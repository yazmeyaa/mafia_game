<section class="login_page_container">
	<div class="form_container">
		<slot />
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


		& > .h2 {
			text-align: center;
		}
	}
</style>
