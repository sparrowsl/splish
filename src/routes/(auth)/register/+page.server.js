/** @type {import('./$types').PageServerLoad} */
export async function load({}) {}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, cookies }) => {
		const form = await request.formData();
		const name = form.get('name');
		const username = form.get('username');
		const email = form.get('email');
		const password = form.get('password');

		console.log({ name, username, email, password });
	}
};
