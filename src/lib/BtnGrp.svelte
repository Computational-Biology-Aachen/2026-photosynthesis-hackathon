<script lang="ts">
	import type { Snippet } from 'svelte';
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

{#if disabled}
	<button
		type="button"
		{disabled}
		class={`${color}`}>
		{@render children()}
	</button>
{:else}
	<a
		{href}
		class={`${color}`}>
		{@render children()}
	</a>
{/if}

<style>
	a,
	button {
		max-height: 100%;
		width: 100%;
		font-size: 1rem;
		font-family: sans-serif;
		outline: 0;
		padding: 0.75rem 1rem;
		border-radius: 0.25rem;
		transition: var(--transition);
		cursor: pointer;
		text-decoration: none;
		text-align: center;
	}
	a:hover,
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
