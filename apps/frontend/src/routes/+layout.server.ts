import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {
	const { lang, user } = locals || {};

	return {
		lang,
		user
	};
}) satisfies LayoutServerLoad;
