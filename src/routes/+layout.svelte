<script lang="ts">
	import * as config from '$lib/config';
	import '../app.css';

	let { children } = $props();

	// Workaround to allow smooth scrolling in Firefox
	// https://github.com/sveltejs/kit/issues/2733#issuecomment-1050779671
	// TODO: Check if SvelteKit snapshots can solve this: https://github.com/sveltejs/kit/pull/8723#issuecomment-1423522635
	// beforeNavigate(({ to, from }) => {
	// 	if (to?.url?.pathname !== from?.url?.pathname) {
	// 		document.documentElement.style.scrollBehavior = 'auto';
	// 	}
	// });
	// afterNavigate(() => (document.documentElement.style.scrollBehavior = ''));
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

{@render children()}
