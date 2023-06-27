<script lang="ts">
	import '$lib/scss/main.scss';
	import { user } from '$lib/stores/user.js';
	
	export let data

	$: $user = structuredClone(data.user)


</script>

<main>
	<slot />
</main>

<style lang="scss">
	main {
		height: calc(100vh - 3rem);
	}
</style>
