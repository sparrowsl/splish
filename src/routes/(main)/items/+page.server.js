import prisma from '../../../lib/utils/prisma.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	const category = url.searchParams.get('category') || null;

	console.log(category);
	const items = await prisma.item.findMany({
		orderBy: {
			dateCreated: 'desc'
		},
		where: { categoryId: category }
	});
	// include: {
	// 	User: {
	// 		select: {
	// 			name: true,
	// 			username: true
	// 		}
	// 	}
	// }
	return {
		items,
		categories: await prisma.category.findMany({
			select: {
				name: true
			}
		})
	};
}
