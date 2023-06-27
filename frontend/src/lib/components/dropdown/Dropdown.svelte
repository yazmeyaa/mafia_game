<script lang="ts">
	import type { DropdownItem, DropdownItemsList } from './Dropdown.types';

	export let itemsList: DropdownItemsList = [];
	let dropdownOpen = false;

	function handleItemClick(item: DropdownItem) {
		item.onClick(item);
	}

	function handleButtonClick() {
		dropdownOpen = !dropdownOpen;
	}
</script>

<div class="dropdown">
	<button on:click={handleButtonClick}><slot /></button>
	{#if dropdownOpen}
		<div class="dropdown_list">
			<ul>
				{#each itemsList as item}
					<li>
						<button
							on:click={() => {
								handleItemClick(item);
							}}
						>
							<span>{item.text}</span>
						</button>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>

<style lang="scss">
	.dropdown {
		position: relative;
	}

	.dropdown_list {
		position: absolute;
		right: 0;
		min-width: 250px;
		background-color: #606060;
		padding: 1rem 0.5rem;
		ul {
			list-style-type: none;
			margin: 0px;
			padding: 0px;
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			
			li {
				width: 100%;
				margin: 0px;
				background-color: red;

				button {
					width: 100%;
				}
			}
		}
	}
</style>
