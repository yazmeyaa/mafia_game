// See https://kit.svelte.dev/docs/types#app

import type { CustomPocketbase } from "$lib/pocketbase";
import type { BackendService } from "backend_service";
import type { Record } from "pocketbase";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			lang: string
			pb: CustomPocketbase,
			user: Record | undefined | null
			service: BackendService
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export { };
