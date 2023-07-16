// See https://kit.svelte.dev/docs/types#app

import type { BackendService } from "backend_service";
import type { UserWithoutSecretFields } from "types";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			lang: string
			user: UserWithoutSecretFields | null | undefined
			service: BackendService
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export { };
