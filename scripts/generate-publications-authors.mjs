import { promises as fs } from 'fs';
import path from 'path';

const ROOT = path.resolve(
	path.dirname(new URL(import.meta.url).pathname),
	'..'
);
const BLOG_DIR = path.join(ROOT, 'blog');
const OUTPUT_DIR = path.join(ROOT, 'assets', 'js');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'publications-authors.json');

function decodeHtmlEntities(str) {
	// Minimal decoding for common entities encountered in author names
	return str
		.replaceAll('&amp;', '&')
		.replaceAll('&lt;', '<')
		.replaceAll('&gt;', '>')
		.replaceAll('&quot;', '"')
		.replaceAll('&#39;', "'")
		.replaceAll('&#x27;', "'");
}

function extractAuthorsFromBlogPostHtml(html) {
	// Only keep real blog post pages (not tag pages / listing pages)
	if (!html.includes('itemtype="http://schema.org/BlogPosting"')) return null;

	const authors = new Set();

	// In the generated Docusaurus HTML, authors are rendered as:
	// itemprop="author" ... <span itemprop="name">Full Name</span>
	const authorRegex =
		/itemprop="author"[\s\S]{0,2000}?itemprop="name">([^<]+)<\/span>/g;

	let match;
	while ((match = authorRegex.exec(html))) {
		const raw = decodeHtmlEntities(match[1].trim());
		if (!raw) continue;

		// Some older posts render multiple authors in a single span, comma-separated.
		// Split them so runtime matching works (and each author can be linked).
		const parts = raw
			.split(',')
			.map((p) => p.trim())
			.filter(Boolean);
		for (const name of parts.length ? parts : [raw]) {
			authors.add(name);
		}
	}

	return Array.from(authors);
}

async function findIndexHtmlFiles(dir) {
	const out = [];
	const entries = await fs.readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			// Skip huge non-post folders early (they never contain BlogPosting pages)
			if (entry.name === 'tags' || entry.name === 'page') continue;
			out.push(...(await findIndexHtmlFiles(fullPath)));
		} else if (entry.isFile() && entry.name === 'index.html') {
			out.push(fullPath);
		}
	}
	return out;
}

async function main() {
	const files = await findIndexHtmlFiles(BLOG_DIR);
	const authorsBySlug = {};

	for (const filePath of files) {
		const rel = path.relative(BLOG_DIR, filePath).replaceAll(path.sep, '/');
		const slug = rel.replace(/\/index\.html$/, '');

		// Skip blog listing pages explicitly
		if (slug === 'index' || slug === 'archive') continue;

		const html = await fs.readFile(filePath, 'utf8');
		const authors = extractAuthorsFromBlogPostHtml(html);
		if (!authors || authors.length === 0) continue;

		authorsBySlug[slug] = authors;
	}

	await fs.mkdir(OUTPUT_DIR, { recursive: true });
	await fs.writeFile(OUTPUT_FILE, JSON.stringify(authorsBySlug, null, 2));
	console.log(
		`Wrote ${Object.keys(authorsBySlug).length} entries to ${OUTPUT_FILE}`
	);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});


