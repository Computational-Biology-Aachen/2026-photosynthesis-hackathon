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
		align-items: center;
		justify-content: center;
		gap: 10px 3rem;
	}

	@media (min-width: 64rem) {
		div {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
