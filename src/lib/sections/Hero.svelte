<script lang="ts">
</script>

<div class="box">
	<div class="inner">
		<h1>JII OPEN CHALLENGE</h1>
		<div class="highlight">
			<p>From field photosynthesis to genetic architecture</p>
		</div>
	</div>
</div>

<style>
	.box {
		position: relative;
		background-image:
			linear-gradient(
				to bottom,
				rgba(245, 246, 252, 0.52),
				color-mix(in srgb, var(--primary) 73%, transparent)
			),
			url('/hero2.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		height: 500px;
		margin: 0 auto;
	}
	.inner {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: auto;
		max-width: var(--max-width);
		padding: 2rem 2rem;
		height: calc(100vh / 2);
		max-height: 800px;
	}
	h1 {
		color: var(--white);
		font-family: 'Roboto', 'Quicksand', 'sans-serif';
		font-optical-sizing: auto;
		font-weight: 700;
		font-style: normal;
		font-size: 3rem;
		padding: 0;
		margin: 0 0 0.5rem 0;
		max-width: 30rem;
	}

	.highlight {
		width: fit-content;
		background-color: var(--secondary);
		padding: 1.5rem;
		font-family: var(--font-family);
		border-radius: 1rem;
	}

	.highlight p {
		color: var(--white);
		font-size: 1rem;
		font-weight: 500;
	}

	@media (min-width: 64rem) {
		h1 {
			font-size: 5rem;
		}
	}
</style>
