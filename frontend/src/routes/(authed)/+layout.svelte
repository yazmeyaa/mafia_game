<script lang="ts">
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<h1 class="h1">
				<span class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone">Mafia</span>
			</h1>
		</AppBar>
	</svelte:fragment>
	<!-- <svelte:fragment slot="sidebarLeft"><div id="sidebar-left" class="hidden lg:block">Sidebar</div></svelte:fragment
	> -->
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<!-- (footer) -->
</AppShell>
