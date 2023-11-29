import prisma from "$lib/server/prisma.js";
import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const categories = await prisma.category.findMany({});

	return json({ categories });
}
