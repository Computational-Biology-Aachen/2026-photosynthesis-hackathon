<script lang="ts">
	import Link from '$lib/Link.svelte';
	const images: Record<string, string> = import.meta.glob(
		['$lib/assets/participants/*'],
		{
			eager: true,
			query: '?url',
			import: 'default'
		}
	);

	let {
		title,
		link,
		slug
	}: {
		title: string;
		link: string;
		slug: string;
	} = $props();

	let filename = `/src/lib/assets/participants/${slug}.jpg`;
	let img = images[filename] ?? '/src/lib/assets/people/placeholder.jpg';
</script>

<Link
	color="white"
	href="{link}/{slug}">
	<div class="card">
		<img
			src={img}
			alt={title} />
		<div class="bar">
			<h4 class="white">{title}</h4>
		</div>
	</div>
</Link>

<style>
	.card {
		position: relative;
		display: inline-flex;
		flex-direction: column;
		justify-content: end;
		width: 100%;
		height: 300px;
		padding: 0;
		margin: 0 auto;
		transition: transform 0.3s ease;
		overflow: hidden;
	}
	.card:hover {
		transform: scale(1.02);
	}
	.card img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
	.bar {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		padding: 0.5rem;
		margin: 0 auto;
		color: var(--white);
		background-color: rgba(0, 0, 0, 0.7);
	}
	h4 {
		padding: 0;
		margin: 0;
		font-size: 14px;
	}
</style>
