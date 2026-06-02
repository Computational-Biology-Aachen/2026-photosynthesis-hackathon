<script context="module">
	import {
		Code,
		H1,
		H2,
		H3,
		H4,
		H5,
		H6,
		Link as a,
		Pre,
		Text as p
	} from '@computational-biology-aachen/design';

	const code = Code;
	const h1 = H1;
	const h2 = H2;
	const h3 = H3;
	const h4 = H4;
	const h5 = H5;
	const h6 = H6;
	const pre = Pre;

	export { a, code, h1, h2, h3, h4, h5, h6, p, pre };

	/** @type {string} */
	export let title;
	/** @type {string} */
	export let description;
	/** @type {string} */
	export let date;
	/** @type {string} */
	export let categories;
	/** @type {string} */
	export let published;
</script>

<slot></slot>
