import prisma from '../../../../lib/utils/prisma.js';

async function seedCategories() {
	await prisma.category.deleteMany();

	const res = await fetch('https://dummyjson.com/products/categories');
	const data = await res.json();

	const categories = [...['clothes', 'trousers', 'pants', 'shorts'], ...data];

	categories.forEach(async (cat) => {
		await prisma.category.create({
			data: {
				id: crypto.randomUUID(),
				name: cat
			}
		});
	});
}

async function getProducts() {
	const res = await fetch(
		'https://dummyjson.com/products?limit=100&select=title,price,category,description,thumbnail'
	);
	const { products } = await res.json();

	// const thumbnails = products.map((product) => ({
	// 	name: product.title,
	// 	price: product.price,
	// 	image: product.thumbnail,
	// 	description: product.description,
	// 	category: product.category
	// }));
	console.log(products);
}

/** @type {import('./$types').PageServerLoad} */
export async function load({}) {
	// seedCategories();
	// getProducts();

	const categories = await prisma.category.findMany();
	return { categories };
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, locals }) => {
		const form = await request.formData();
		const name = form.get('name');
		const price = form.get('price') * 1;
		const image = form.get('image');
		const description = form.get('description');
		const categoryId = form.get('category');

		const item = await prisma.item.create({
			data: {
				userId: locals.user.id,
				id: crypto.randomUUID(),
				name,
				price,
				image,
				description,
				categoryId,
				dateCreated: new Date()
			}
		});

		console.log(item);
	}
};
