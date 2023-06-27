<script lang="ts">
	import { PUBLIC_APP_NAME } from '$env/static/public';
	import { locale } from '$lib/i18n';
	import TranslatePlanet from '$lib/icons/TranslatePlanet.svelte';
	import { user } from '$lib/stores/user';
	import Dropdown from '$lib/components/dropdown/Dropdown.svelte';

	function changeLocale() {
		$locale = $locale === 'ru' ? 'en' : 'ru';
	}
</script>

<header>
	<div class="app_logo">
		<span>{PUBLIC_APP_NAME}</span>
	</div>
	<div class="header_actions">
		<button on:click={changeLocale}>
			<TranslatePlanet height="24px" width="24px" />
		</button>
	</div>
	{#if $user}
		<Dropdown
			itemsList={[
				{
					text: 'Hello world',
					onClick: () => {}
				},
				{
					text: 'Hello world',
					onClick: () => {}
				},
				{
					text: 'Hello world',
					onClick: () => {}
				},
				{
					text: 'Hello world',
					onClick: () => {}
				}
			]}
		> Hello world</Dropdown>
	{:else}
		<a href="/login">Login</a>
	{/if}
</header>

<style lang="scss">
	header {
		box-sizing: border-box;
		height: 3rem;
		display: flex;
		background-color: #f5f5f5;
		align-items: center;
		padding: 0.5rem;
	}

	.app_logo {
		user-select: none;
	}

	.header_actions {
		margin-left: auto;
	}
</style>
