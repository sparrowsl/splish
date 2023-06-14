import prisma from "$lib/server/prisma";
import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function GET({}) {
	try {
		const items = await prisma.item.findMany({
			orderBy: {
				createdAt: "desc",
			},
			include: {
				User: {
					select: {
						username: true,
						name: true,
					},
				},
			},
		});
		return json(items);
	} catch (error) {
		return json({ error: "Could not get any items" });
	}
}
