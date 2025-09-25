<script lang="ts">
	import { base } from '$app/paths';
	import Nav from '$lib/nav/Nav.svelte';
	import NavItem from '$lib/nav/NavItem.svelte';

	let { children } = $props();
</script>

<Nav>
	<NavItem href="{base}/" name="Home" />
	<NavItem href="{base}/trainers" name="Trainers" />
	<NavItem href="{base}/info" name="Info" />
	<NavItem href="{base}/contact" name="Contact" />
</Nav>

{@render children()}
