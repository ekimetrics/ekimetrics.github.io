// Stream page with sidebar filtering
// This script runs on stream.html pages

(async () => {
	// Wait for team.js to load and populate window.teamData
	let attempts = 0;
	while (!window.teamData && attempts < 50) {
		await new Promise((resolve) => setTimeout(resolve, 100));
		attempts++;
	}

	if (!window.teamData) {
		console.error(
			'Team data not loaded. Please ensure team.js is loaded first.'
		);
		return;
	}

	const {
		people,
		streams,
		publications,
		streamIdToMembers,
		leaders,
		streamPublications,
	} = window.teamData;

	// Get stream ID from URL
	const params = new URLSearchParams(window.location.search);
	const streamId = params.get('id');
	const stream = streams.find((s) => s.id === streamId);

	if (!stream) {
		document.getElementById('stream-title').textContent = 'Stream not found';
		return;
	}

	// Update page title and description
	document.getElementById('stream-title').textContent = stream.name;
	document.getElementById('stream-description').textContent =
		stream.description;

	// Get all members for this stream
	const members = streamIdToMembers[streamId] || [];
	const leader = leaders[streamId];
	const streamPubs = streamPublications[streamId] || [];

	console.log('Stream data:', {
		streamId,
		memberCount: members.length,
		members: members.map((m) => m.person.name),
		leader: leader?.name,
		publicationCount: streamPubs.length,
		samplePubs: streamPubs
			.slice(0, 2)
			.map((p) => ({ title: p.title, image: p.image })),
	});

	// State management
	let selectedPersonId = null; // null means "Everyone"
	let filteredPubs = streamPubs;

	// Count publications per person
	const personPubCounts = {};
	members.forEach(({ person }) => {
		const count = streamPubs.filter((pub) => {
			const matches = pub.authors.some((authorName) => {
				const normalized = person.name.toLowerCase().replace(/[^a-z\s]/g, '');
				const authorNormalized = authorName
					.toLowerCase()
					.replace(/[^a-z\s]/g, '');
				const isMatch = normalized === authorNormalized;

				// Debug logging for first person
				if (person.id === members[0]?.person.id && pub === streamPubs[0]) {
					console.log(
						`Comparing "${person.name}" (${normalized}) with "${authorName}" (${authorNormalized}): ${isMatch}`
					);
				}

				return isMatch;
			});
			return matches;
		}).length;
		personPubCounts[person.id] = count;
	});

	console.log('Person publication counts:', personPubCounts);
	console.log(
		'Sample members:',
		members.slice(0, 2).map((m) => m.person.name)
	);
	console.log(
		'Sample authors from pubs:',
		streamPubs.slice(0, 3).map((p) => ({ title: p.title, authors: p.authors }))
	);

	// Render sidebar team list
	function renderTeamList() {
		const teamList = document.getElementById('team-list');
		teamList.innerHTML = '';

		// "Everyone" option
		const everyoneItem = document.createElement('div');
		everyoneItem.className = `team-member-item ${
			!selectedPersonId ? 'active' : ''
		}`;
		everyoneItem.innerHTML = `
			<div class="member-avatar" style="display: flex; align-items: center; justify-content: center; background: ${
				selectedPersonId ? '#2a2a2a' : 'var(--primary-color)'
			}; border: 2px solid ${
			selectedPersonId ? '#333' : 'var(--primary-color)'
		};">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 6C10.9 6 10 6.9 10 8C10 9.1 10.9 10 12 10C13.1 10 14 9.1 14 8C14 6.9 13.1 6 12 6ZM17 6C15.9 6 15 6.9 15 8C15 9.1 15.9 10 17 10C18.1 10 19 9.1 19 8C19 6.9 18.1 6 17 6ZM7 6C5.9 6 5 6.9 5 8C5 9.1 5.9 10 7 10C8.1 10 9 9.1 9 8C9 6.9 8.1 6 7 6ZM12 11C9.67 11 7.8 12.34 7.05 14.19C6.97 14.42 7 14.67 7.14 14.86C7.28 15.05 7.5 15.17 7.75 15.17H16.25C16.5 15.17 16.72 15.05 16.86 14.86C17 14.67 17.03 14.42 16.95 14.19C16.2 12.34 14.33 11 12 11ZM17 11C16.68 11 16.38 11.03 16.08 11.1C17.17 12.16 17.85 13.54 18.02 15.17H19.75C20 15.17 20.22 15.05 20.36 14.86C20.5 14.67 20.53 14.42 20.45 14.19C19.7 12.34 17.83 11 17 11ZM7 11C4.67 11 2.8 12.34 2.05 14.19C1.97 14.42 2 14.67 2.14 14.86C2.28 15.05 2.5 15.17 2.75 15.17H5.98C6.15 13.54 6.83 12.16 7.92 11.1C7.62 11.03 7.32 11 7 11Z" fill="${
						selectedPersonId ? '#d1d5db' : 'white'
					}"/>
				</svg>
			</div>
			<div class="member-info">
				<span class="member-name">Everyone</span>
				<span class="member-count">${streamPubs.length} article${
			streamPubs.length !== 1 ? 's' : ''
		}</span>
			</div>
		`;
		everyoneItem.onclick = () => selectPerson(null);
		teamList.appendChild(everyoneItem);

		// Leader first (if exists)
		if (leader) {
			const leaderItem = createMemberItem(leader, true);
			teamList.appendChild(leaderItem);
		}

		// Other members
		members.forEach(({ person }) => {
			if (leader && person.id === leader.id) return; // Skip leader as already shown

			const item = createMemberItem(person, false);
			teamList.appendChild(item);
		});
	}

	function createMemberItem(person, isLeader) {
		const item = document.createElement('div');
		item.className = `team-member-item ${
			selectedPersonId === person.id ? 'active' : ''
		}`;
		item.innerHTML = `
			<img src="${person.avatar}" alt="${person.name}" class="member-avatar" />
			<div class="member-info">
				<span class="member-name">${person.name}${isLeader ? ' ⭐' : ''}</span>
				<span class="member-count">${personPubCounts[person.id]} article${
			personPubCounts[person.id] !== 1 ? 's' : ''
		}</span>
			</div>
		`;
		item.onclick = () => selectPerson(person.id);
		return item;
	}

	function selectPerson(personId) {
		selectedPersonId = personId;

		// Update bio section
		const bioSection = document.getElementById('member-bio');
		if (personId) {
			const person = members.find((m) => m.person.id === personId)?.person;
			if (person) {
				bioSection.style.display = 'block';
				document.getElementById('bio-avatar').src = person.avatar;
				document.getElementById('bio-avatar').alt = person.name;
				document.getElementById('bio-name').textContent = person.name;

				// Check if person is the leader
				const isLeader = leader && leader.id === person.id;
				document.getElementById('bio-role').textContent = isLeader
					? 'Stream Lead'
					: 'Team Member';

				// Lorem ipsum placeholder
				document.getElementById('bio-text').textContent =
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
			}
		} else {
			bioSection.style.display = 'none';
		}

		// Filter publications
		if (!personId) {
			filteredPubs = streamPubs;
		} else {
			const person = members.find((m) => m.person.id === personId)?.person;
			if (person) {
				filteredPubs = streamPubs.filter((pub) =>
					pub.authors.some(
						(authorName) =>
							person.name.toLowerCase().replace(/[^a-z\s]/g, '') ===
							authorName.toLowerCase().replace(/[^a-z\s]/g, '')
					)
				);
			}
		}

		// Re-render UI
		renderTeamList();
		renderPublications();
	}

	// Render publications with pagination
	function renderPublications() {
		const container = document.getElementById('publications-container');
		const titleEl = document.getElementById('publications-title');
		const countEl = document.getElementById('publications-count');

		// Update title
		if (selectedPersonId) {
			const person = members.find(
				(m) => m.person.id === selectedPersonId
			)?.person;
			titleEl.textContent = person
				? `${person.name}'s Publications`
				: 'Publications';
		} else {
			titleEl.textContent = 'All Publications';
		}

		// Update count
		countEl.textContent = filteredPubs.length;

		// Clear container
		container.innerHTML = '';

		if (filteredPubs.length === 0) {
			container.innerHTML = '<p class="muted">No publications found.</p>';
			return;
		}

		// Create grid
		const grid = document.createElement('div');
		grid.className = 'publications-grid';

		let currentPage = 0;
		const pageSize = 9;
		const totalPages = Math.ceil(filteredPubs.length / pageSize);

		function renderPublicationCard(pub) {
			const card = document.createElement('div');
			card.className = 'publication-card';

			// Use the actual article image, or fallback to logo
			const imgSrc = pub.image || '/img/logo.png';
			const date = pub.pubDate.toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
			});

			console.log('Rendering publication:', pub.title, 'with image:', imgSrc);

			// Build author links
			let authorLinks = '';
			if (pub.authors.length > 0) {
				const authorElements = pub.authors.map((authorName) => {
					const person = people.find(
						(p) =>
							p.name.toLowerCase().replace(/[^a-z\s]/g, '') ===
							authorName.toLowerCase().replace(/[^a-z\s]/g, '')
					);
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

			const tags = pub.categories
				.slice(0, 3)
				.map((tag) => `<span class="publication-tag">${tag}</span>`)
				.join('');

			card.innerHTML = `
				<a href="${pub.link}" class="publication-link">
					<div class="publication-image">
						<img src="${imgSrc}" alt="${pub.title}" />
					</div>
					<div class="publication-content">
						<h3 class="publication-title">${pub.title}</h3>
						<p class="publication-description">${pub.description}</p>
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

		function renderPage() {
			const start = currentPage * pageSize;
			const end = Math.min(start + pageSize, filteredPubs.length);
			const pagePubs = filteredPubs.slice(start, end);

			pagePubs.forEach((pub) => {
				const card = renderPublicationCard(pub);
				grid.appendChild(card);
			});
		}

		renderPage();
		container.appendChild(grid);

		// Add "Load More" button if needed
		if (totalPages > 1 && currentPage < totalPages - 1) {
			const loadMoreBtn = document.createElement('button');
			loadMoreBtn.className = 'load-more-btn';
			loadMoreBtn.textContent = `Load More (${
				filteredPubs.length - (currentPage + 1) * pageSize
			} remaining)`;
			loadMoreBtn.onclick = () => {
				currentPage++;
				renderPage();
				if (currentPage >= totalPages - 1) {
					loadMoreBtn.remove();
				} else {
					loadMoreBtn.textContent = `Load More (${
						filteredPubs.length - (currentPage + 1) * pageSize
					} remaining)`;
				}
			};
			container.appendChild(loadMoreBtn);
		}
	}

	// Initial render
	renderTeamList();
	renderPublications();
})();
