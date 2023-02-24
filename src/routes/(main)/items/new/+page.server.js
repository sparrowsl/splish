import prisma from '../../../../lib/utils/prisma.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const categories = await prisma.category.findMany({
		select: {
			name: true
		}
	});
	return { categories: categories.map((category) => category.name) };
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const name = form.get('name');
		const price = form.get('price');
		const image = form.get('image');
		const description = form.get('description');
		const category = form.get('category');

		console.log({ name, price, image, description, category });
	}
};
