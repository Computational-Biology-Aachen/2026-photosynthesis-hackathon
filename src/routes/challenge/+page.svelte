<script lang="ts">
	import Header from '$lib/sections/Header.svelte';
	import Section from '$lib/sections/Section.svelte';
	import H1 from '$lib/text/H1.svelte';

	let { data } = $props();
	// svelte-ignore state_referenced_locally
	let page = data;
</script>

<Header>
	<H1 color="white">Challenge</H1>
</Header>

<Section>
	<page.default />
</Section>
