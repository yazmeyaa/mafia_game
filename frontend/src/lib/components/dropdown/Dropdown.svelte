<script lang="ts">
	import { onMount } from 'svelte';

	export let titleText: string | undefined = undefined;
	export let size: 'sm' | 'md' | 'lg' = 'md';

	let dropdownOpen = false;
	let dropdownListRef: HTMLDivElement;

	function handleButtonClick(event: MouseEvent) {
		event.preventDefault();
		dropdownOpen = !dropdownOpen;
	}

	function handleClickOutside(event: MouseEvent) {
		if (!dropdownOpen) return;
		if (
			dropdownListRef &&
			!dropdownListRef.contains(event.target as Node) &&
			!event.defaultPrevented
		) {
			dropdownOpen = false;
		}
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
	});
</script>

<div class="dropdown" data-size={size}>
	<button data-size={size} on:click={handleButtonClick}>
		{#if !titleText}
			<slot name="menu" />
		{/if}
	</button>
	{#if dropdownOpen}
		<div class="dropdown_list" bind:this={dropdownListRef}>
			<slot />
		</div>
	{/if}
</div>

<style lang="scss">
	.dropdown {
		position: relative;
		aspect-ratio: 1/1;

		button[data-size='sm'] {
			height: 1.5rem;
		}
		button[data-size='md'] {
			height: 2.5rem;
		}
		button[data-size='lg'] {
			height: 3.5rem;
		}
		button {
			aspect-ratio: 1/1;
			width: 100%;
		}
	}

	.dropdown_list {
		position: absolute;
		right: 0;
		min-width: 250px;
		background-color: #606060;
		padding: 1rem 0.5rem;
	}
</style>
