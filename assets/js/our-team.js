(() => {
  const AVATAR_COLORS = [
    '#1a6b8a', '#2d7a4f', '#7a3d8a', '#8a5c1a',
    '#1a4a8a', '#8a1a3d', '#3d8a1a', '#8a6b1a',
  ];

  function avatarColor(name) {
    let h = 0;
    for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
    return AVATAR_COLORS[h % AVATAR_COLORS.length];
  }

  function initials(name) {
    return name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map(w => w[0].toUpperCase())
      .join('');
  }

  function emailIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>`;
  }

  function renderCard(person, activeTags) {
    const card = document.createElement('div');
    card.className = 'person-card';

    const avatar = document.createElement('div');
    avatar.className = 'person-avatar';
    avatar.style.background = avatarColor(person.name);
    avatar.textContent = initials(person.name);

    const body = document.createElement('div');
    body.className = 'person-body';

    const name = document.createElement('h2');
    name.className = 'person-name';
    name.textContent = person.name;

    const role = document.createElement('p');
    role.className = 'person-role';
    role.textContent = person.role;

    const tagsEl = document.createElement('div');
    tagsEl.className = 'person-tags';
    for (const tag of person.tags) {
      const t = document.createElement('span');
      t.className = 'person-tag' + (activeTags.has(tag) ? ' active' : '');
      t.textContent = tag;
      t.addEventListener('click', () => toggleTag(tag));
      tagsEl.appendChild(t);
    }

    body.appendChild(name);
    body.appendChild(role);
    body.appendChild(tagsEl);

    const emailLink = document.createElement('a');
    emailLink.className = 'person-email';
    emailLink.href = `mailto:${person.email}`;
    emailLink.title = person.email;
    emailLink.innerHTML = emailIcon();

    card.appendChild(avatar);
    card.appendChild(body);
    card.appendChild(emailLink);
    return card;
  }

  let allPeople = [];
  let activeTags = new Set();

  function render() {
    const grid = document.getElementById('team-grid');
    grid.innerHTML = '';

    const visible = activeTags.size === 0
      ? allPeople
      : allPeople.filter(p => [...activeTags].every(t => p.tags.includes(t)));

    if (visible.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'team-empty';
      empty.textContent = 'No team members match the selected filters.';
      grid.appendChild(empty);
      return;
    }

    for (const person of visible) {
      grid.appendChild(renderCard(person, activeTags));
    }
  }

  function renderFilterBar(tags) {
    const bar = document.getElementById('tag-filter-bar');
    bar.innerHTML = '';

    const label = document.createElement('span');
    label.className = 'tag-filter-bar-label';
    label.textContent = 'Filter:';
    bar.appendChild(label);

    for (const tag of tags) {
      const t = document.createElement('span');
      t.className = 'filter-tag' + (activeTags.has(tag) ? ' active' : '');
      t.textContent = tag;
      t.addEventListener('click', () => toggleTag(tag));
      bar.appendChild(t);
    }
  }

  function toggleTag(tag) {
    if (activeTags.has(tag)) {
      activeTags.delete(tag);
    } else {
      activeTags.add(tag);
    }
    const allTags = collectTags(allPeople);
    renderFilterBar(allTags);
    render();
  }

  function collectTags(people) {
    const set = new Set();
    for (const p of people) for (const t of p.tags) set.add(t);
    return [...set].sort();
  }

  document.addEventListener('DOMContentLoaded', async () => {
    try {
      const res = await fetch('/assets/js/our-team-data.json');
      if (!res.ok) throw new Error('Failed to load team data');
      const data = await res.json();
      allPeople = data.people;

      const tags = collectTags(allPeople);
      renderFilterBar(tags);
      render();
    } catch (err) {
      const grid = document.getElementById('team-grid');
      grid.innerHTML = '<div class="team-empty">Could not load team data.</div>';
      console.error(err);
    }
  });
})();
