import { writable, get } from 'svelte/store';
import type { Record } from 'pocketbase';

export const user = writable<Record | undefined | null>();

export function getUser() {
	return get(user);
}
