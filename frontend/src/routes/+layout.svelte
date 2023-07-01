<script lang="ts">
	import '../app.postcss';
	import '$lib/scss/main.scss';
	import { user } from '$lib/stores/user.js';
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	import '../app.postcss';

	export let data;

	$: $user = structuredClone(data.user);
</script>

<main>
	<slot />
</main>

<style lang="scss">
	main {
		height: calc(100vh - 3rem);
	}
</style>
