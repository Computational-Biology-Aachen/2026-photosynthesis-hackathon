<script lang="ts">
	let { children } = $props();
</script>

<header>
	<div class="inner">
		{@render children()}
	</div>
</header>

<style>
	header {
		margin: 0;
		padding: var(--section-ypad) 2rem;
		background-color: var(--primary);
		min-height: 12rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	@media (min-width: 96rem) {
		header {
			padding: var(--section-ypad) 0;
		}
	}
	.inner {
		margin: 0 auto;
		width: 100%;
		max-width: var(--max-width);
	}
</style>
