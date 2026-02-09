<script lang="ts">
	let {
		href,
		name,
		disabled = false
	}: { href: string; name: string; disabled?: boolean } = $props();
</script>

<li>
	<a
		class={disabled ? 'disabled' : ''}
		href={disabled ? '/' : href}>{name}</a>
</li>

<style>
	li {
		list-style: none;
		padding: 1rem;
		font-size: 1.125rem;
	}
	li:hover {
		box-shadow: inset 0em 0em 0em 10em rgba(0, 0, 0, 0.125);
	}
	a {
		text-decoration: none;
		color: var(--primary);
		transition: var(--transition);
	}
	a:hover {
		text-decoration: underline;
		/* filter: brightness(150%); */
	}
	a.disabled {
		color: var(--black);
		cursor: not-allowed;
	}
	a.disabled:hover {
		text-decoration: none;
	}
</style>
