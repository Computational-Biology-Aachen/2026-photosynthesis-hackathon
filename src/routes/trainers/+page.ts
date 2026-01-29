import type { Trainer } from '$lib/types';
import { error } from '@sveltejs/kit';

export async function load() {
	try {
		let members: Trainer[] = [];

		const paths = import.meta.glob('/src/md/trainers/*.md', { eager: true });

		for (const path in paths) {
			const file = paths[path];
			const slug = path.split('/').at(-1)?.replace('.md', '');

			if (file && typeof file === 'object' && 'metadata' in file && slug) {
				const metadata = file.metadata as Omit<Trainer, 'slug'>;
				const member = { ...metadata, slug } satisfies Trainer;
				members.push(member);
			}
		}

		return { members };
	} catch (e) {
		console.error('Failed to load members:', e);
		error(500, 'Failed to load members');
	}
}
