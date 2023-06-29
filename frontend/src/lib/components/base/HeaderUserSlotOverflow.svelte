<script lang="ts">
	import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
	export let open = false;
	import { user } from '$lib/stores/user';
	import { onMount } from 'svelte';
	function toggleHiddenMode() {
		open = !open;
	}

	onMount(() => {
		console.log($user);
	});
</script>

<div hidden={!open} class="dropdown">
	<button on:click={toggleHiddenMode} class="dropdown-button">
		{#if $user && $user.avatar}
			<img
				src={`${PUBLIC_POCKETBASE_URL}/api/files/users/${$user?.id}/${$user?.avatar}`}
				alt="avatar"
				class="avatar"
			/>
		{:else}
			<div class="avatar"/>
		{/if}
	</button>
	<div class="dropdown-content">
		<p class="dropdown-content-item">123123</p>
		<p class="dropdown-content-item">123123</p>
		<p class="dropdown-content-item">123123</p>
		<p class="dropdown-content-item">123123</p>
	</div>
</div>

<style lang="scss">
	.dropdown {
		position: relative;
		height: 100%;
		aspect-ratio: 1/1;
		transition: background-color 0.2s linear;

		&[hidden] {
			display: block;
			& > .dropdown-content {
				visibility: hidden;
			}
		}

		&:not([hidden]) {
			background-color: rgb(46, 46, 46);
		}

		&:hover {
			background-color: rgb(46, 46, 46);
		}
	}

	.dropdown-button {
		background: transparent;
		border: none;
		outline: none;
		width: 100%;
		height: 100%;
		padding: 8px;
		cursor: pointer;
	}

	.avatar {
		background-color: var(--secondary-ui-01);
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.dropdown-content {
		position: absolute;
		min-width: 10rem;
		background-color: var(--secondary-ui-01);
		right: 0;
	}
</style>
