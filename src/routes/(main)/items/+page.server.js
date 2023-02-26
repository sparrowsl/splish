import prisma from '../../../lib/utils/prisma.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const items = await prisma.item.findMany({
		// take: 15,
		orderBy: {
			dateCreated: 'desc'
		}
	});
	return { items };
}
