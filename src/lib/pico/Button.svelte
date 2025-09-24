<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		children,
		color = 'primary'
	}: {
		children: Snippet;
		color?: 'black' | 'white' | 'primary' | 'secondary';
	} = $props();
</script>

<button class={`${color}`}>
	{@render children()}
</button>

<style>
	button {
		font-size: 1rem;
		border-radius: 0.25rem;
		outline: 0;
		padding: 0.75rem 2rem;
		transition: var(--transition);
		overflow-y: hidden;
	}
	button:hover {
		text-decoration: underline;
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
