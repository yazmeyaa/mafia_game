<style lang="scss">
	.logo {
		display: flex;
		justify-content: center;
	}

	.h2 {
		text-align: center;
	}

	.form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>

<script lang="ts">
	import { t } from '$lib/i18n';
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';

	let usernameRef: HTMLInputElement;
	let loading = false;

	onMount(() => {
		usernameRef.focus();
	});
</script>

<svelte:head>
	<title>Registration</title>
</svelte:head>

<figure class="logo">
	<h1 class="h1">Mafia</h1>
</figure>
<h2 class="h2">Registration</h2>
<form class="form" method="post" action="?/register" use:enhance>
	<div class="form_field column">
		<label class="label" for="username">
			<span>{$t('login.username')}</span>
			<input
				type="text"
				bind:this={usernameRef}
				class="input"
				name="username"
				autocomplete="off"
				id="username"
			/>
		</label>
	</div>

	<div class="form_field column">
		<label for="password">
			<span class="label">{$t('login.password')}</span>
			<input class="input" type="password" name="password" id="password" />
		</label>
	</div>
	<button class="btn variant-filled" disabled={loading} type="submit">Register</button>
	<small
		>Already have account?
		<a class="anchor" href="/login">Login!</a></small
	>
</form>
