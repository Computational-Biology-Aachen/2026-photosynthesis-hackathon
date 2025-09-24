<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		children,
		color = 'black'
	}: {
		children: Snippet;
		color?: 'black' | 'white' | 'primary' | 'secondary';
	} = $props();
</script>

<p class={`${color}`}>
	{@render children()}
</p>

<style>
	p {
		font-size: 1rem;
		margin: 0 0 var(--text-ypad) 0;
		font-family: var(--font-family);
		text-align: justify;
		hyphens: auto;
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
