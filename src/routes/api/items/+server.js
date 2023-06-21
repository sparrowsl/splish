import { json } from "@sveltejs/kit";
import prisma from "$lib/server/prisma";

/** @type {import('./$types').RequestHandler} */
export async function GET({}) {
	try {
		const items = await prisma.item.findMany({
			orderBy: { createdAt: "desc" },
			include: {
				User: {
					select: { username: true, name: true },
				},
			},
		});
		return json(items);
	} catch (error) {
		return json({ error: "Could not get any items" });
	}
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { userId, name, image, price, description, categoryId } = await request.json();

	const item = await prisma.item.create({
		data: {
			name,
			description,
			price,
			categoryId,
			image,
			userId,
		},
	});
	return json(item);
}
