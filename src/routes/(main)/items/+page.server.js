import prisma from "../../../lib/server/prisma.js";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const items = await prisma.item.findMany({
		// take: 15,
		orderBy: {
			dateCreated: "desc",
		},
		include: {
			User: {
				select: {
					name: true,
					username: true,
				},
			},
		},
	});
	return { items };
}
