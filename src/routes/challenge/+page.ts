export async function load() {
	const page = await import('../../md/challenge.md');
	return { ...page };
}
