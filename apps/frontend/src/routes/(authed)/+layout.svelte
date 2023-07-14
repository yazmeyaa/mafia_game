<script lang="ts">
	import { user } from '$lib/stores/user';
	import { AppShell, AppBar, Avatar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="pageHeader">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">(icon)</svelte:fragment>
			<a
				href="/"
				class=" h1 bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone"
				>Mafia</a
			>
			<svelte:fragment slot="trail">
				<div class="flex gap-2 items-center relative">
					<LightSwitch />
					<div class="dropdown relative">
						<a href="/profile" class="btn-icon variant-filled-primary"
							><Avatar class="select-none" />
						</a>
					</div>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<slot />
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<div>
			<nav>
				<ul class="list-nav">
					<span class="block w-full mx-auto text-center h5 my-2 select-none">Navigation</span>
					<li>
						<a href="/">
							<i class="ri-home-line" />
							<span>Main page</span>
						</a>
					</li>
					<hr class="!border-t-4 my-2" />
					<span class="block w-full mx-auto text-center h5 my-2 select-none">Game</span>
					<li>
						<a href="/create">
							<i class="ri-add-circle-line" />
							<span>Create game</span>
						</a>
					</li>
					<li>
						<a href="/join_game">
							<i class="ri-arrow-right-line" />
							<span>Join game</span>
						</a>
					</li>
					<li>
						<a href="/lobby_list">
							<i class="ri-file-list-line" />
							<span>Lobby list</span>
						</a>
					</li>
				</ul>
			</nav>
			<a class="anchor" href="/logout">Logout</a>
		</div>
	</svelte:fragment>
</AppShell>
