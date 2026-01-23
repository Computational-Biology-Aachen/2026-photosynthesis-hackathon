<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		color = 'white'
	}: {
		children: Snippet;
		color?: 'black' | 'white' | 'primary' | 'secondary' | 'bright' | 'muted';
	} = $props();
</script>

<section class={`${color}`}>
	<div class="inner">
		{@render children()}
	</div>
</section>

<style>
	section {
		margin: 0;
		padding: var(--section-ypad) 2rem;
	}

	@media (min-width: 96rem) {
		section {
			padding: var(--section-ypad) 0;
		}
	}
	.inner {
		margin: 0 auto;
		width: 100%;
		max-width: var(--max-width);
	}
	.black {
		background-color: var(--black);
	}
	.white {
		background-color: var(--white);
	}
	.primary {
		background-color: var(--primary);
	}
	.secondary {
		background-color: var(--secondary);
	}
	.bright {
		background-color: var(--bright);
	}
	.muted {
		background-color: var(--muted);
	}
</style>
