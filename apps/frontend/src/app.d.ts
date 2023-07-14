// See https://kit.svelte.dev/docs/types#app

import type { BackendService } from "backend_service";
import type { User } from 'types'

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			lang: string
			user: User | null | undefined
			service: BackendService
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export { };
