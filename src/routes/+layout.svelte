<script lang="ts">
	import * as config from '$lib/config';
	import '../app.css';

	let { children } = $props();
</script>

<!-- SEO -->
<svelte:head>
	<meta name="description" content={config.description} />
	<meta property="og:title" content={config.title} />
	<meta property="og:description" content={config.description} />
	<meta property="og:url" content={config.url} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
</svelte:head>

{@render children()}
