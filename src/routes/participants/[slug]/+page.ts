import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const member = await import(`../../../md/participants/${params.slug}.md`);

		return {
			content: member.default,
			slug: params.slug,
			meta: member.metadata
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
}
