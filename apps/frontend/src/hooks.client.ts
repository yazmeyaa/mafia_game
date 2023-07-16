import { getUser, user } from '$lib/stores/user';

user.subscribe(() => {
	console.log(getUser());
});
