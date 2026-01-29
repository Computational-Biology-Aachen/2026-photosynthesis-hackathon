import type { Participant } from '$lib/types';
import { error } from '@sveltejs/kit';

export async function load() {
	try {
		let members: Participant[] = [];

		const paths = import.meta.glob('/src/md/participants/*.md', {
			eager: true
		});

		for (const path in paths) {
			const file = paths[path];
			const slug = path.split('/').at(-1)?.replace('.md', '');

			if (file && typeof file === 'object' && 'metadata' in file && slug) {
				const metadata = file.metadata as Omit<Participant, 'slug'>;
				const member = { ...metadata, slug } satisfies Participant;
				members.push(member);
			}
		}

		return { members };
	} catch (e) {
		console.error('Failed to load members:', e);
		error(500, 'Failed to load members');
	}
}
