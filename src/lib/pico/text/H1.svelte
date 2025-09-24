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

<h1 class={`${color}`}>
	{@render children()}
</h1>

<style>
	h1 {
		font-size: 2rem;
		padding: 0;
		margin: 0 0 var(--text-ypad) 0;
		font-family: var(--font-family);
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
