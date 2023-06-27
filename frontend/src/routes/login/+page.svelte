<script lang="ts">
	import { PUBLIC_APP_NAME } from '$env/static/public';
	import { t } from '$lib/i18n';
	import { enhance, applyAction } from '$app/forms';

	let loading = false
</script>

<section class="login_page_container">
	<div class="form_container">
		<figure class="logo">
			<strong>{PUBLIC_APP_NAME}</strong>
		</figure>
		<h1>Login</h1>
		<form
			class="form"
			method="post"
			use:enhance={() => {
				loading = true
				return async ({ result }) => {
					loading = false
					applyAction(result);
				};
			}}
		>
			<div class="form_field column">
				<label for="username">{$t('login.username')}</label>
				<input name="username" autocomplete="off" id="username" />
			</div>

			<div class="form_field column">
				<label for="password">{$t('login.password')}</label>
				<input type="password" name="password" id="password" />
			</div>
			<button disabled={loading} type="submit">{$t('login.login')}</button>
			<small>{$t('login.dont_have_account')} <a href="/register">{$t('login.register')}</a></small>
		</form>
	</div>
</section>

<style lang="scss">
	.login_page_container {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		max-width: 32rem;
		margin: 0px auto;
		justify-content: center;
	}

	.form_container {
		padding: 1rem;

		background-color: rgba(230, 230, 230, 0.3);
		border: 1px solid rgba(0, 0, 0, 0.2);
		border-radius: 0.5rem;
		box-shadow: 0px 0px 2rem 15px rgba(0, 0, 0, 0.1);

		flex-shrink: 1;
		flex-grow: 1;
		& > h1 {
            text-align: center;
        }
	}

	.logo {
		display: flex;
		justify-content: center;
	}

	.form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
