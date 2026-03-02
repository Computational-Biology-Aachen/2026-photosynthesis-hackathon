<script lang="ts">
	const images: Record<string, string> = import.meta.glob(
		['$lib/assets/people/*'],
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

	// svelte-ignore state_referenced_locally
	let filename = `/src/lib/assets/people/${slug}.jpg`;
	let img = images[filename] ?? '/src/lib/assets/people/placeholder.jpg';
</script>

<div class="card">
	<div class="inner">
		<a
			color="white"
			href="{link}/{slug}">
			<img
				src={img}
				alt={title} />
			<div class="bar">
				<h4 class="white">{title}</h4>
			</div>
		</a>
	</div>
</div>

<style>
	.card {
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 300px;
		padding: 0;
		margin: 0 auto;
		transition: transform 0.3s ease;
		overflow: hidden;
	}
	.inner {
		position: relative;
		margin: 0 auto;
		padding: 0;
		height: 300px;
	}

	img {
		display: block;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
	.bar {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 0.5rem;
		color: var(--white);
		background-color: rgba(0, 0, 0, 0.7);
	}
	.card:hover {
		transform: scale(1.02);
	}
	a {
		font-family: sans-serif;
		text-decoration: none;
		transition: var(--transition);
		margin: 0;
		padding: 0;
	}
	a:hover {
		text-decoration: underline;
	}

	h4 {
		padding: 0;
		margin: 0;
		font-size: 14px;
	}
</style>
