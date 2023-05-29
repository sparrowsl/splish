import prisma from "../../../../lib/server/prisma";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const item = await prisma.item.findUnique({
		where: {
			id: params.id,
		},
		include: {
			User: {
				select: {
					id: true,
					name: true,
					username: true,
					email: true,
				},
			},
		},
	});
	return { item };
}
