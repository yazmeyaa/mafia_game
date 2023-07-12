<script lang="ts">
	import { t } from '$lib/i18n';
	import { enhance, applyAction } from '$app/forms';
</script>

<section class="login_page_container">
	<div class="form_container">
		<figure class="logo">
			<strong>Mafia</strong>
		</figure>
        <h1>Registration</h1>
		<form
			class="form"
			method="post"
			action="?/register"
			use:enhance
		>
			<div class="form_field column">
				<label for="username">{$t('register.username')}</label>
				<input name="username" autocomplete="off" id="username" />
			</div>

			<div class="form_field column">
				<label for="password">{$t('register.password')}</label>
				<input type="password" name="password" id="password" />
			</div>
			<button type="submit">{$t('register.register')}</button>
			<small>{$t('register.already_has_account')} <a href="/login">{$t('register.login')}</a></small>
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
