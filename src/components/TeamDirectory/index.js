import React, { useState, useMemo } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import data from './data.json';

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
    .map((w) => w[0].toUpperCase())
    .join('');
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  );
}

function collectTags(people) {
  const set = new Set();
  for (const p of people) for (const t of p.tags) set.add(t);
  return [...set].sort();
}

function PersonCard({ person, activeTags, onToggleTag }) {
  return (
    <div className={styles.personCard}>
      <div className={styles.personAvatar} style={{ background: avatarColor(person.name) }}>
        {initials(person.name)}
      </div>
      <div className={styles.personBody}>
        <h2 className={styles.personName}>{person.name}</h2>
        <p className={styles.personRole}>{person.role}</p>
        <div className={styles.personTags}>
          {person.tags.map((tag) => (
            <span
              key={tag}
              className={clsx(styles.personTag, activeTags.has(tag) && styles.personTagActive)}
              onClick={() => onToggleTag(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <a className={styles.personEmail} href={`mailto:${person.email}`} title={person.email}>
        <EmailIcon />
      </a>
    </div>
  );
}

export default function TeamDirectory() {
  const [activeTags, setActiveTags] = useState(new Set());
  const allTags = useMemo(() => collectTags(data.people), []);

  const toggleTag = (tag) => {
    setActiveTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  };

  const visiblePeople = useMemo(() => {
    if (activeTags.size === 0) return data.people;
    return data.people.filter((p) => [...activeTags].every((t) => p.tags.includes(t)));
  }, [activeTags]);

  return (
    <div className={clsx('container', styles.teamPage)}>
      <div className={styles.teamHero}>
        <h1>Our Team</h1>
        <p>Meet the people behind Eki.Lab</p>
      </div>

      <div className={styles.tagFilterBar}>
        <span className={styles.tagFilterBarLabel}>Filter:</span>
        {allTags.map((tag) => (
          <span
            key={tag}
            className={clsx(styles.filterTag, activeTags.has(tag) && styles.filterTagActive)}
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className={styles.teamGrid}>
        {visiblePeople.length === 0 ? (
          <div className={styles.teamEmpty}>No team members match the selected filters.</div>
        ) : (
          visiblePeople.map((person) => (
            <PersonCard key={person.id} person={person} activeTags={activeTags} onToggleTag={toggleTag} />
          ))
        )}
      </div>
    </div>
  );
}
