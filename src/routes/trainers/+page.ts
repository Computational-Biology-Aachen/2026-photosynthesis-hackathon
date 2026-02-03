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

		members = members.sort((first, second) => {
			const order = second.order - first.order;
			if (order !== 0) return order;

			const lastName1 = first.slug.split('-').pop() || '';
			const lastName2 = second.slug.split('-').pop() || '';
			return lastName1.localeCompare(lastName2);
		});

		return { members };
	} catch (e) {
		console.error('Failed to load members:', e);
		error(500, 'Failed to load members');
	}
}
