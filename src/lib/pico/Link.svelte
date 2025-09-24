<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		href,
		color = 'primary',
		disabled = false,
		children
	}: {
		href: string;
		disabled?: boolean;
		color?: 'black' | 'white' | 'primary' | 'secondary';
		children: Snippet;
	} = $props();
</script>

{#if disabled}
	<a {href} class={`${color}`}>
		{@render children()}
	</a>
{:else}
	<a {href} class={`${color}`}>
		{@render children()}
	</a>
{/if}

<style>
	a {
		font-family: sans-serif;
		text-decoration: none;
		/* text-decoration: currentcolor underline dashed auto; */
		transition: var(--transition);
		margin: 0 0 var(--text-ypad) 0;
		padding: 0;
	}
	a:hover {
		text-decoration: underline;
		/* filter: brightness(150%); */
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
