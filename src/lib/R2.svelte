<script lang="ts">
	let { children } = $props();
</script>

<div>
	{@render children()}
</div>

<style>
	div {
		display: grid;
		grid-template-columns: 1fr;
		width: 100%;
		gap: 2rem;
		padding-bottom: var(--text-ypad);
		align-items: start;
	}

	@media (min-width: 64rem) {
		div {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
