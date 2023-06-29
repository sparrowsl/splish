import { json } from "@sveltejs/kit";
import prisma from "$lib/server/prisma";

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
	const item = await prisma.item.findUnique({
		where: { id: params.id },
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

	return json({ item });
}
