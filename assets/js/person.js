// This script runs on person.html pages

(async () => {
	// Wait for team.js to load and populate window.teamData
	let attempts = 0;
	while (!window.teamData && attempts < 50) {
		await new Promise((resolve) => setTimeout(resolve, 100));
		attempts++;
	}

	// If team data not available, load it ourselves
	if (!window.teamData) {
		console.error(
			'Team data not loaded. Please ensure team.js is loaded first.'
		);
		return;
	}

	const { people, streams, publications, streamIdToMembers } = window.teamData;

	// Get person ID from URL
	const params = new URLSearchParams(window.location.search);
	const personId = params.get('id');
	const person = people.find((p) => p.id === personId);

	if (!person) {
		document.getElementById('name').textContent = 'Person not found';
		return;
	}

	// Update page with person info
	const avatar = document.getElementById('avatar');
	const name = document.getElementById('name');
	const title = document.getElementById('title');

	if (avatar) {
		avatar.src = person.avatar;
		avatar.alt = person.name;
	}
	if (name) {
		name.textContent = person.name;
	}
	if (title) {
		// Find which stream(s) this person belongs to
		const personStreams = [];
		streams.forEach((stream) => {
			const members = streamIdToMembers[stream.id] || [];
			if (members.some((m) => m.person.id === personId)) {
				personStreams.push(stream);
			}
		});
		title.textContent =
			personStreams.map((s) => s.name).join(' • ') || 'Team Member';
	}

	// Find publications by this person
	const personPubs = publications.filter((pub) => {
		return pub.authors.some((authorName) => {
			const normalized = authorName.toLowerCase().replace(/[^a-z\s]/g, '');
			const personName = person.name.toLowerCase().replace(/[^a-z\s]/g, '');
			if (normalized === personName) return true;

			// Try partial matching
			const nameParts = normalized.split(/\s+/);
			const personParts = personName.split(/\s+/);
			if (nameParts.length >= 2 && personParts.length >= 2) {
				return (
					nameParts[0] === personParts[0] &&
					nameParts[nameParts.length - 1] ===
						personParts[personParts.length - 1]
				);
			}
			return false;
		});
	});

	// Render bio section (placeholder for now)
	const bioCard = document.querySelector('.card_UXd2');
	if (bioCard && bioCard.querySelector('h2')?.textContent === 'Bio') {
		bioCard.innerHTML = `
			<h2>Bio</h2>
			<p class="muted">Research scientist and data expert at Ekimetrics.</p>
		`;
	}

	// Render articles section
	const articlesCard = document.querySelectorAll('.card_UXd2')[1];
	if (articlesCard) {
		articlesCard.innerHTML = '<h2>Articles & Publications</h2>';

		if (personPubs.length === 0) {
			articlesCard.innerHTML +=
				'<p class="muted">No publications found yet.</p>';
		} else {
			// Create publications grid
			const grid = document.createElement('div');
			grid.className = 'publications-grid';

			let currentPage = 0;
			const pageSize = 9;
			const totalPages = Math.ceil(personPubs.length / pageSize);

			function renderPublicationCard(pub) {
				const card = document.createElement('div');
				card.className = 'publication-card';

				const imgSrc = pub.image || '/img/logo.png';
				const date = pub.pubDate.toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'short',
					day: 'numeric',
				});

				// Build author links
				let authorLinks = '';
				if (pub.authors.length > 0) {
					const authorElements = pub.authors.map((authorName) => {
						const p = people.find(
							(person) =>
								person.name.toLowerCase().replace(/[^a-z\s]/g, '') ===
								authorName.toLowerCase().replace(/[^a-z\s]/g, '')
						);
						if (p) {
							return `<a href="/about/our-team/person.html?id=${encodeURIComponent(
								p.id
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
				const end = Math.min(start + pageSize, personPubs.length);
				const pagePubs = personPubs.slice(start, end);

				pagePubs.forEach((pub) => {
					const card = renderPublicationCard(pub);
					grid.appendChild(card);
				});
			}

			renderPage();
			articlesCard.appendChild(grid);

			if (totalPages > 1 && currentPage < totalPages - 1) {
				const loadMoreBtn = document.createElement('button');
				loadMoreBtn.className = 'load-more-btn';
				loadMoreBtn.textContent = `Load More (${
					personPubs.length - (currentPage + 1) * pageSize
				} remaining)`;
				loadMoreBtn.onclick = () => {
					currentPage++;
					renderPage();
					if (currentPage >= totalPages - 1) {
						loadMoreBtn.remove();
					} else {
						loadMoreBtn.textContent = `Load More (${
							personPubs.length - (currentPage + 1) * pageSize
						} remaining)`;
					}
				};
				articlesCard.appendChild(loadMoreBtn);
			}
		}
	}

	// Hide citations section for now
	const citationsCard = document.querySelectorAll('.card_UXd2')[2];
	if (
		citationsCard &&
		citationsCard.querySelector('h2')?.textContent === 'Citations'
	) {
		citationsCard.style.display = 'none';
	}
})();
