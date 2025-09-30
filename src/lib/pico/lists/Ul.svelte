<script lang="ts">
	let { children } = $props();
</script>

<ul>
	{@render children()}
</ul>

<style>
	ul {
		padding-left: calc(var(--spacing) * 2);
		padding-bottom: var(--spacing);
	}
</style>
