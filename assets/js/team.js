(() => {
	const SEED = 'our-team-2025';

	function hashStringToInt(str, seed) {
		let h = 2166136261 ^ seed.length;
		for (let i = 0; i < str.length; i++) {
			h ^= str.charCodeAt(i);
			h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
		}
		return h >>> 0;
	}

	function byId(id) {
		return document.getElementById(id);
	}

	async function loadJSON(path) {
		const res = await fetch(path);
		if (!res.ok) throw new Error('Failed to load ' + path);
		return res.json();
	}

	function assignPeopleToStreams(people, streams) {
		const streamIdToMembers = Object.fromEntries(
			streams.map((s) => [s.id, []])
		);
		for (const person of people) {
			const h = hashStringToInt(person.id + SEED, SEED);
			const idx = h % streams.length;
			const stream = streams[idx];
			streamIdToMembers[stream.id].push({ person, hash: h });
		}
		const leaders = {};
		for (const s of streams) {
			const members = streamIdToMembers[s.id];
			if (members.length) {
				members.sort((a, b) => a.hash - b.hash);
				leaders[s.id] = members[0].person;
			}
		}
		return { streamIdToMembers, leaders };
	}

	// Parse RSS feed to extract publications
	async function loadPublications() {
		try {
			const res = await fetch('/blog/rss.xml');
			if (!res.ok) throw new Error('Failed to load RSS feed');
			const text = await res.text();
			const parser = new DOMParser();
			const xml = parser.parseFromString(text, 'text/xml');
			const items = xml.querySelectorAll('item');

			const publications = [];
			items.forEach((item) => {
				const title = item.querySelector('title')?.textContent || '';
				const link = item.querySelector('link')?.textContent || '';
				const pubDate = item.querySelector('pubDate')?.textContent || '';
				const description =
					item.querySelector('description')?.textContent || '';
				const content =
					item.querySelector('content\\:encoded, encoded')?.textContent || '';

				// Extract categories/tags
				const categories = Array.from(item.querySelectorAll('category')).map(
					(cat) => cat.textContent
				);

				// Extract authors from content (looking for author names in the HTML)
				const authors = extractAuthorsFromContent(content);

				// Extract image if available - try multiple patterns
				let image = null;
				// Try to find img tag with /assets/images/ or /img/blog/ paths
				let imgMatch = content.match(
					/src="([^"]*(?:\/assets\/images\/|\/img\/blog\/)[^"]*)"/
				);
				if (imgMatch) {
					image = imgMatch[1];
				} else {
					// Try to find any img tag with http/https URL
					imgMatch = content.match(/src="(https?:\/\/[^"]*)"/);
					if (imgMatch) {
						image = imgMatch[1];
					}
				}

				publications.push({
					title,
					link,
					pubDate: new Date(pubDate),
					description,
					categories,
					authors,
					image,
					content,
				});
			});

			return publications;
		} catch (error) {
			console.error('Error loading publications:', error);
			return [];
		}
	}

	// Extract author names from HTML content
	function extractAuthorsFromContent(content) {
		const authors = [];
		// Look for author sections in the HTML
		const authorMatches = content.matchAll(
			/<span itemprop="name">([^<]+)<\/span>/g
		);
		for (const match of authorMatches) {
			authors.push(match[1].trim());
		}
		return authors;
	}

	// Fuzzy match author name to person in people.json
	function matchAuthorToPerson(authorName, people) {
		const normalized = authorName.toLowerCase().replace(/[^a-z\s]/g, '');

		for (const person of people) {
			const personName = person.name.toLowerCase().replace(/[^a-z\s]/g, '');
			if (personName === normalized) {
				return person;
			}
		}

		// Try partial matching (first + last name)
		const nameParts = normalized.split(/\s+/);
		if (nameParts.length >= 2) {
			for (const person of people) {
				const personParts = person.name.toLowerCase().split(/\s+/);
				if (personParts.length >= 2) {
					if (
						nameParts[0] === personParts[0] &&
						nameParts[nameParts.length - 1] ===
							personParts[personParts.length - 1]
					) {
						return person;
					}
				}
			}
		}

		return null;
	}

	// Match publications to streams using keywords
	function matchPublicationsToStreams(publications, streams) {
		const streamPubs = {};
		streams.forEach((s) => (streamPubs[s.id] = []));

		publications.forEach((pub) => {
			const text = `${pub.title} ${pub.description} ${pub.categories.join(
				' '
			)}`.toLowerCase();

			streams.forEach((stream) => {
				if (matchDocToStream(text, stream.id)) {
					streamPubs[stream.id].push(pub);
				}
			});
		});

		return streamPubs;
	}

	function matchDocToStream(text, streamId) {
		if (streamId === 'ai-ml') {
			return /ai|machine learning|ml|deep learning|neural|llm|genai|generative|model|transformer/i.test(
				text
			);
		}
		if (streamId === 'data-eng') {
			return /data engineering|pipeline|mlops|platform|infrastructure|deployment|kubernetes|databricks/i.test(
				text
			);
		}
		if (streamId === 'decision-science') {
			return /causal|inference|optimization|decision|econom|pricing|market mix|mmm|bayesian/i.test(
				text
			);
		}
		if (streamId === 'sustainability') {
			return /sustainab|climate|esg|environment|carbon|green|biodiversity|impact|ipcc/i.test(
				text
			);
		}
		if (streamId === 'product-platforms') {
			return /product|platform|ux|dx|tool|dashboard|app|software|streamlit/i.test(
				text
			);
		}
		return false;
	}

	// Match publications to a person
	function matchPublicationsToPerson(publications, person, people) {
		const matched = [];
		publications.forEach((pub) => {
			pub.authors.forEach((authorName) => {
				const matchedPerson = matchAuthorToPerson(authorName, people);
				if (matchedPerson && matchedPerson.id === person.id) {
					matched.push(pub);
				}
			});
		});
		return matched;
	}

	// Render a single publication card
	function renderPublicationCard(publication, people) {
		const card = document.createElement('div');
		card.className = 'publication-card';

		const imgSrc = publication.image || '/img/logo.png';
		const date = publication.pubDate.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		});

		// Build author links
		let authorLinks = '';
		if (publication.authors.length > 0) {
			const authorElements = publication.authors.map((authorName) => {
				const person = matchAuthorToPerson(authorName, people);
				if (person) {
					return `<a href="/about/our-team/person.html?id=${encodeURIComponent(
						person.id
					)}" class="author-link">${authorName}</a>`;
				}
				return `<span class="author-name">${authorName}</span>`;
			});
			authorLinks = `<div class="publication-authors">By ${authorElements.join(
				', '
			)}</div>`;
		}

		const tags = publication.categories
			.slice(0, 3)
			.map((tag) => `<span class="publication-tag">${tag}</span>`)
			.join('');

		card.innerHTML = `
			<a href="${publication.link}" class="publication-link">
				<div class="publication-image">
					<img src="${imgSrc}" alt="${publication.title}" />
				</div>
				<div class="publication-content">
					<h3 class="publication-title">${publication.title}</h3>
					<p class="publication-description">${publication.description}</p>
					<div class="publication-meta">
						<span class="publication-date">${date}</span>
						${tags ? `<div class="publication-tags">${tags}</div>` : ''}
					</div>
					${authorLinks}
				</div>
			</a>
		`;

		return card;
	}

	function renderStreams(
		container,
		streams,
		leaders,
		streamIdToMembers,
		publicationCounts
	) {
		// Stream icons/emojis
		const streamIcons = {
			'ai-ml': '🤖',
			sustainability: '🌱',
			strategy: '📊',
			marketing: '📱',
			'data-engineering': '⚙️',
		};

		streams.forEach((s) => {
			const leader = leaders[s.id];
			const memberCount = streamIdToMembers[s.id].length;
			const pubCount = publicationCounts[s.id] || 0;

			const item = document.createElement('a');
			item.className = 'stream-list-item';
			item.href = `/about/our-team/stream.html?id=${encodeURIComponent(s.id)}`;

			item.innerHTML = `
				<div class="stream-icon">${streamIcons[s.id] || '🔬'}</div>
				<div class="stream-content">
					<div class="stream-header">
						<h2 class="stream-name">${s.name}</h2>
						<span class="stream-count">${pubCount} publication${
				pubCount !== 1 ? 's' : ''
			}</span>
					</div>
					<p class="stream-description">${s.description}</p>
					${
						leader
							? `
						<div class="stream-leader">
							<img src="${leader.avatar}" alt="${leader.name}" class="stream-leader-avatar" />
							<span class="stream-leader-name">Led by ${leader.name} • ${memberCount} member${
									memberCount !== 1 ? 's' : ''
							  }</span>
						</div>
					`
							: ''
					}
				</div>
				<svg class="stream-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			`;

			container.appendChild(item);
		});
	}

	function renderPeopleGrid(container, people) {
		// This section is now hidden - people discovered through streams
		return;
	}

	// Render publications with pagination
	function renderPublicationsWithPagination(
		container,
		publications,
		people,
		pageSize = 9
	) {
		if (!publications || publications.length === 0) {
			container.innerHTML =
				'<p class="no-publications">No publications found for this stream yet.</p>';
			return;
		}

		const grid = document.createElement('div');
		grid.className = 'publications-grid';

		let currentPage = 0;
		const totalPages = Math.ceil(publications.length / pageSize);

		function renderPage() {
			const start = currentPage * pageSize;
			const end = Math.min(start + pageSize, publications.length);
			const pagePubs = publications.slice(start, end);

			pagePubs.forEach((pub) => {
				const card = renderPublicationCard(pub, people);
				grid.appendChild(card);
			});
		}

		renderPage();
		container.appendChild(grid);

		if (totalPages > 1 && currentPage < totalPages - 1) {
			const loadMoreBtn = document.createElement('button');
			loadMoreBtn.className = 'load-more-btn';
			loadMoreBtn.textContent = `Load More (${
				publications.length - (currentPage + 1) * pageSize
			} remaining)`;
			loadMoreBtn.onclick = () => {
				currentPage++;
				renderPage();
				if (currentPage >= totalPages - 1) {
					loadMoreBtn.remove();
				} else {
					loadMoreBtn.textContent = `Load More (${
						publications.length - (currentPage + 1) * pageSize
					} remaining)`;
				}
			};
			container.appendChild(loadMoreBtn);
		}
	}

	async function init() {
		try {
			const [{ people }, { streams }, publications] = await Promise.all([
				loadJSON('/assets/js/people.json'),
				loadJSON('/assets/js/team-config.json'),
				loadPublications(),
			]);
			const { streamIdToMembers, leaders } = assignPeopleToStreams(
				people,
				streams
			);

			// Match publications to streams
			const streamPublications = matchPublicationsToStreams(
				publications,
				streams
			);
			const publicationCounts = {};
			streams.forEach((s) => {
				publicationCounts[s.id] = streamPublications[s.id].length;
			});

			// Store data globally for other pages FIRST
			window.teamData = {
				people,
				streams,
				publications,
				streamIdToMembers,
				leaders,
				streamPublications,
			};

			console.log('Team data loaded:', {
				peopleCount: people.length,
				streamsCount: streams.length,
				publicationsCount: publications.length,
				streamPublications: Object.entries(streamPublications).map(
					([id, pubs]) => `${id}: ${pubs.length}`
				),
			});

			// Only render if we're on the home page
			const streamsContainer = document.getElementById('streams');
			if (streamsContainer) {
				renderStreams(
					streamsContainer,
					streams,
					leaders,
					streamIdToMembers,
					publicationCounts
				);
				const peopleGridContainer = document.getElementById('people-grid');
				if (peopleGridContainer) {
					renderPeopleGrid(peopleGridContainer, people);
				}
			}
		} catch (e) {
			console.error('Error loading team data:', e);
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
