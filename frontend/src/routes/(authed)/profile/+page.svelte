<script lang="ts">
	import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
	import { user } from '$lib/stores/user';
	import { Avatar } from '@skeletonlabs/skeleton';

	const avatarUrl = `${PUBLIC_POCKETBASE_URL}/api/files/users/${$user?.id}/${$user?.avatar}`;

    $: console.log($user)
</script>

<main>
	<div class="card w-fit mx-auto p-16 mt-4">
		<header class="flex flex-col card-header items-center gap-4 ">
			<Avatar src={avatarUrl} width="w-64" />
			<h1 class="h2">{$user?.username}</h1>
		</header>
        <section>
            <div>
                <h2 class="h2">Stats</h2>
                <div class="flex flex-col gap-4">
                    <span>Games played: {$user?.games}</span>
                    <span>Wins: {$user?.wins}</span>
                    <span>Loses: {$user?.loses}</span>
                </div>
            </div>
        </section>
	</div>
</main>
