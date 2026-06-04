<script lang="ts">
	import { base } from '$app/paths';
	import * as config from '$lib/config';
	import {
		CollapseToBurger,
		Navbar,
		NavItem
	} from '@computational-biology-aachen/design';
	import '../app.css';

	let { children } = $props();
</script>

<!-- SEO -->
<svelte:head>
	<title>2026 Photosynthesis Hackathon</title>
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

<Navbar>
	{#snippet brand()}
		<span class="brand">Photosynthesis Hackathon</span>
	{/snippet}
	<CollapseToBurger>
		<NavItem href="{base}/">Home</NavItem>
		<NavItem href="{base}/trainers">Trainers</NavItem>
		<NavItem href="{base}/challenge">Challenge</NavItem>
		<NavItem href="{base}/participants">Participants</NavItem>
		<NavItem href="{base}/contact">Contact</NavItem>
	</CollapseToBurger>
</Navbar>

{@render children()}

<style>
	.brand {
		color: var(--color-primary);
		font-weight: 600;
		font-size: 1rem;
	}
</style>
