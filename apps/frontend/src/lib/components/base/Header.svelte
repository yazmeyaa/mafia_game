<script lang="ts">
	import { PUBLIC_APP_NAME } from '$env/static/public';
	import { locale } from '$lib/i18n';
	import TranslatePlanet from '$lib/icons/TranslatePlanet.svelte';
	import { user } from '$lib/stores/user';
	import Dropdown from '$lib/components/dropdown/Dropdown.svelte';
	import HeaderUserSlotOverflow from './HeaderUserSlotOverflow.svelte';

	function changeLocale() {
		$locale = $locale === 'ru' ? 'en' : 'ru';
	}
</script>

<header>
	<div class="app_logo">
		<span>{PUBLIC_APP_NAME}</span>
	</div>
	<div class="header_actions">
		{#if $user}
			<HeaderUserSlotOverflow />
		{:else}
			<a href="/login">Login</a>
		{/if}
	</div>
</header>

<style lang="scss">
	header {
		box-sizing: border-box;
		height: 3rem;
		display: flex;
		background-color: var(--primary-ui-01);
		align-items: center;
	}

	.app_logo {
		user-select: none;
		color: var(--text-01);
		margin-left: 0.5rem;
		letter-spacing: 0.125rem;
	}

	.header_actions {
		height: 100%;
		margin-left: auto;
	}
</style>
