const major = Number(process.version.slice(1).split(".")[0]);
const min = 18;
if (Number.isFinite(major) && major < min) {
	console.error(
		`\nThis project needs Node ${min}+ (see package.json "engines"). You are on ${process.version}.`,
	);
	console.error("Fix: run `nvm use` (see .nvmrc), or open a new terminal after pulling latest.\n");
	process.exit(1);
}
