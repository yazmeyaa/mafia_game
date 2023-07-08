<script lang="ts">
	import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
	export let open = false;
	import { user } from '$lib/stores/user';
	import { onDestroy, onMount } from 'svelte';

	let dropdownContentRef: HTMLDivElement;

	const avatarUrl = `${PUBLIC_POCKETBASE_URL}/api/files/users/${$user?.id}/${$user?.avatar}`;

	function toggleHiddenMode(event: MouseEvent) {
		event.preventDefault();
		open = !open;
	}

	function handleClickOutside(event: MouseEvent) {
		if (!open) return;
		if (
			dropdownContentRef &&
			!dropdownContentRef.contains(event.target as Node) &&
			!event.defaultPrevented
		) {
			open = false;
		}
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
	});
</script>

<div hidden={!open} class="dropdown">
	<button on:click={toggleHiddenMode} class="dropdown-button">
		{#if $user && $user.avatar}
			<img src={avatarUrl} alt="avatar" class="avatar" />
		{:else}
			<div class="avatar" />
		{/if}
	</button>
	<div bind:this={dropdownContentRef} class="dropdown-content">
		<img class="dropdown-content-avatar" src={avatarUrl} alt="avatar" />
		<strong class="dropdown-content-username">{$user?.username}</strong>
		<ul>
			<li>
				<a href="/profile">
					<span>Profile</span>
				</a>
			</li>
			<li>
				<a href="/stats">
					<span>Stats</span>
				</a>
			</li>
			<li>
				<a href="/help">
					<span>Help</span>
				</a>
			</li>
			<li>
				<a href="/logout">
					<span>Logout</span>
				</a>
			</li>
		</ul>
	</div>
</div>

<style lang="scss">
	.dropdown {
		position: relative;
		height: 100%;
		aspect-ratio: 1/1;
		transition: background-color 0.2s linear;

		&[hidden] {
			display: block;
			& > .dropdown-content {
				visibility: hidden;
			}
		}

		&:not([hidden]) {
			background-color: rgb(46, 46, 46);
		}

		&:hover {
			background-color: rgb(46, 46, 46);
		}
	}

	.dropdown-button {
		background: transparent;
		border: none;
		outline: none;
		width: 100%;
		height: 100%;
		padding: 4px;
		cursor: pointer;
	}

	.avatar {
		background-color: var(--secondary-ui-01);
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.dropdown-content {
		display: flex;
		flex-direction: column;
		gap: 8px;

		position: absolute;
		min-width: 15rem;
		background-color: var(--secondary-ui-01);
		right: 0;
		color: var(--text-01);

		.dropdown-content-avatar {
			width: 5rem;
			aspect-ratio: 1/1;
			border-radius: 50%;
			align-self: center;
			margin-top: 0.5rem;
		}

		ul {
			display: flex;
			flex-direction: column;
			gap: 8px;
			list-style-type: none;
			padding: 0px;

			li {
				background-color: var(--primary-ui-01);

				a {
					padding: 0.5rem;
					display: block;
					text-decoration: none;
					color: inherit;
					&:visited {
						color: inherit;
					}
					&>span{
						font-size: 1.25rem;
					}
				}
			}
		}
	}

	.dropdown-content-username {
		align-self: center;
	}
</style>
