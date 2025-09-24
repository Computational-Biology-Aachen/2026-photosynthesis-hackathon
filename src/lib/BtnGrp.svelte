<script lang="ts">
	import type { Snippet } from 'svelte';
	import Link from './pico/Link.svelte';
	let {
		children,
		disabled = false,
		href,
		color = 'primary'
	}: {
		children: Snippet;
		href: string;
		disabled?: boolean;
		color?: 'black' | 'white' | 'primary' | 'secondary';
	} = $props();
</script>

<button {disabled} class={`${color}`}>
	{#if disabled}
		{@render children()}
	{:else}
		<Link color="white" {href}>{@render children()}</Link>
	{/if}
</button>

<style>
	button {
		max-height: 100%;
		width: 100%;
		font-size: 1rem;
		outline: 0;
		padding: 0.75rem 1rem;
		border-radius: 0.25rem;
		transition: var(--transition);
	}
	button:hover {
		text-decoration: underline;
	}
	button:disabled {
		cursor: not-allowed;
		text-decoration: none;
		background-color: var(--black);
	}

	.primary {
		color: var(--white);
		border: 1px solid var(--primary);
		background-color: var(--primary);
	}
	.primary:hover {
		box-shadow: inset 0em 0em 0em 10em rgba(0, 0, 0, 0.125);
	}
	.secondary {
		color: var(--black);
		border: 1px solid var(--secondary);
		background-color: var(--secondary);
	}
	.secondary:hover {
		box-shadow: inset 0em 0em 0em 10em rgba(0, 0, 0, 0.125);
	}
	.black {
		color: var(--white);
		border: 1px solid var(--black);
		background-color: var(--black);
	}
	.black:hover {
		box-shadow: inset 0em 0em 0em 10em rgba(255, 255, 255, 0.125);
	}
	.white {
		color: var(--primary);
		border: 1px solid var(--white);
		background-color: var(--white);
	}
	.white:hover {
		box-shadow: inset 0em 0em 0em 10em rgba(0, 0, 0, 0.125);
	}
</style>
