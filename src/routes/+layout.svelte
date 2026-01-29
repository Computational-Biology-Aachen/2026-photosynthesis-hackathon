<script lang="ts">
	import { base } from '$app/paths';
	import * as config from '$lib/config';
	import Nav from '$lib/nav/Nav.svelte';
	import NavItem from '$lib/nav/NavItem.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<!-- SEO -->
<svelte:head>
	<meta
		name="description"
		content={config.description} />
	<meta
		property="og:title"
		content={config.title} />
	<meta
		property="og:description"
		content={config.description} />
	<meta
		property="og:url"
		content={config.url} />
	<meta
		property="og:type"
		content="website" />
	<meta
		name="twitter:card"
		content="summary" />
</svelte:head>

<Nav>
	<NavItem
		href="{base}/"
		name="Home" />
	<NavItem
		href="{base}/trainers"
		name="Trainers" />
	<NavItem
		href="{base}/challenge"
		disabled
		name="Challenge" />
	<NavItem
		href="{base}/participants"
		disabled
		name="Participants" />
	<NavItem
		href="{base}/contact"
		name="Contact" />
</Nav>

<main>
	{@render children()}
</main>

<style>
	main {
		padding: 0;
	}

	@media (min-width: 800px) {
		main {
			padding-top: 3rem;
		}
	}
</style>
