<script lang="ts">
	let maxPlayer = 6;
</script>

<svlete:head>
	<title>Mafia - Create game</title>
</svlete:head>

<main>
	<div class="card max-w-4xl mx-auto mt-4 px-12">
		<header class="card-header">
			<h1 class="h1">Create new game</h1>
		</header>
		<section class="my-4">
			<form class="flex flex-col gap-4">
				<div>
					<label class="label" for="lobby_name">
						<span>Lobby name</span>
						<input
							placeholder="Lobby name ex.: Mike, come here..."
							autocomplete="off"
							id="lobby_name"
							type="text"
							class="input"
						/>
					</label>
				</div>
				<div>
					<label class="label" for="lobby_password">
						<span>Password</span>
						<input
							id="lobby_password"
							type="password"
							class="input"
							placeholder="Lobby passwrd ex.: 12345678Aa"
						/>
					</label>
				</div>

				<div>
					<label class="label flex flex-col" for="max_players">
						<span>Max players</span>
						<input type="number" bind:value={maxPlayer} class={`input`} max="24" min="0" />
					</label>
					<small class="pl-2">max: 24</small>
				</div>

				<button class="btn variant-filled" type="submit">Create</button>
			</form>
		</section>
	</div>
</main>
