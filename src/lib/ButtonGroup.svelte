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
		padding-bottom: var(--text-ypad);
		gap: 10px;
		align-items: center;
		justify-content: center;
	}

	@media screen and (min-width: 800px) {
		div {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
