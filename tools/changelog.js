const {resolve} = require('path');
const {promisify} = require('util');
const {readFile, readdir, writeFileSync} = require('fs');

const kpath = '../karaokes';
const tpath = '../tags';
const authors = [];
const contributors = [];
const newKaras = [];

if (!process.argv[2]) {
	console.log(`Create changelog for CHANGELOG.md. Supply a year-date to make it work.
	Example : node changelog.js 2019-09 or node changelog.js 2019-09 file.txt`);
	return;
}

const start = new Date(process.argv[2] + '-01');
const end = new Date(process.argv[2] + '-31 23:59:59');

const asyncReadFile = (...args) => passThroughFunction(readFile, args);
const asyncReadDir = (...args) => passThroughFunction(readdir, args);
const passThroughFunction = (fn, args) => {
	if(!Array.isArray(args)) args = [args];
	return promisify(fn)(...args);
};

async function readTags() {
	const dir = await asyncReadDir(tpath);
	for (const file of dir) {
		const data = await asyncReadFile(resolve(tpath, file), 'utf-8');
		const tag = JSON.parse(data);
		if (tag.tag.types.includes('authors')) authors.push(tag.tag);
	}
}

async function readKaras() {
	const dir = await asyncReadDir(kpath);
	for (const file of dir) {
		const data = await asyncReadFile(resolve(kpath, file), 'utf-8');
		const kara = JSON.parse(data);
		kara.filename = file;
		const created_at = new Date(kara.data.created_at);
		if (!kara.data.tags.authors) kara.data.tags.authors = [];
		const author = [];
		kara.data.tags.authors.forEach(tid => {
			const singleAuthor = authors.find(a => a.tid === tid);
			singleAuthor
				? author.push(singleAuthor.name)
				: author.push('Unknown');
		});
		if (created_at > start && created_at < end) {
			newKaras.push(`${kara.filename.replace('.kara.json','')} (${author.join(', ')})`);
			author.forEach(a => contributors.push(a));
		}
	}
}

async function main() {
	await readTags();
	await readKaras();
	const out = [];
	out.push('Contributors: ');
	out.push('');
	contributors.sort();
	contributors.filter((item, index) => contributors.indexOf(item) === index).forEach(c => out.push('- ' + c));
	out.push('');
	out.push('## Added');
	out.push('');
	out.push('New songs : ' + newKaras.length);
	out.push('');
	newKaras.sort();
	newKaras.forEach(k => out.push('- ' + k));

	if (process.argv[3]) {
		writeFileSync(process.argv[3], out.join('\n'), 'utf8');
	} else {
		console.log(out.join('\n'));
	}
}

main();
