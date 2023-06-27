<script lang="ts">
	import { onMount } from 'svelte';

	let buttonRef: HTMLButtonElement;

	function handler(event: MouseEvent) {
		//@ts-ignore
		console.log('::this: ', this);
		console.log('::event: ', event);
	}

	onMount(() => {
		buttonRef.addEventListener('click', handler);
	});
</script>

<button bind:this={buttonRef}>Test</button>
