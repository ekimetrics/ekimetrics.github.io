import { promises as fs } from 'fs';
import path from 'path';

const ROOT = path.resolve(
	path.dirname(new URL(import.meta.url).pathname),
	'..'
);
const AUTHORS_DIR = path.join(ROOT, 'img', 'authors');
const OUTPUT_DIR = path.join(ROOT, 'assets', 'js');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'people.json');

function titleCaseFromFilename(filename) {
	const base = filename.replace(/\.[^.]+$/, '');
	return base
		.replace(/[_.-]+/g, ' ')
		.split(' ')
		.map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
		.join(' ');
}

async function main() {
	const entries = await fs.readdir(AUTHORS_DIR, { withFileTypes: true });
	const people = entries
		.filter((e) => e.isFile())
		.filter((e) => /\.(png|jpg|jpeg|gif|jfif)$/i.test(e.name))
		.map((e) => {
			const id = e.name.replace(/\.[^.]+$/, '');
			return {
				id,
				name: titleCaseFromFilename(e.name),
				avatar: `/img/authors/${e.name}`,
			};
		});

	await fs.mkdir(OUTPUT_DIR, { recursive: true });
	await fs.writeFile(OUTPUT_FILE, JSON.stringify({ people }, null, 2));
	console.log(`Wrote ${people.length} people to ${OUTPUT_FILE}`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
