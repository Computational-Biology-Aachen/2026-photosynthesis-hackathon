<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		children,
		color = 'black',
		padding = 'lower'
	}: {
		children: Snippet;
		color?: 'black' | 'white' | 'primary' | 'secondary';
		padding?: 'lower' | 'all' | 'none';
	} = $props();
</script>

<p class={`${color} ${padding}`}>
	{@render children()}
</p>

<style>
	p {
		font-size: 1rem;
		font-family: var(--font-family);
		text-align: justify;
		hyphens: auto;
	}
	.lower {
		margin: 0 0 var(--text-ypad) 0;
	}
	.all {
		margin: calc(var(--text-ypad) * 0.5);
	}
	.none {
		margin: 0;
	}
	.black {
		color: var(--black);
	}
	.white {
		color: var(--white);
	}
	.primary {
		color: var(--primary);
	}
	.secondary {
		color: var(--secondary);
	}
</style>
