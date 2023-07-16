<style lang="scss">
	main {
		height: calc(100vh - 3rem);
	}
</style>

<script lang="ts">
	import { user } from '$lib/stores/user.js';
	import 'remixicon/fonts/remixicon.css';

	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '../app.postcss';

	export let data;

	$: $user = structuredClone(data.user);
</script>

<main>
	<slot />
</main>
