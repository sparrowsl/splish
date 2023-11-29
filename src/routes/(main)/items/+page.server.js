import db from "$lib/server/db/drizzle.js";
import { itemsTable } from "$lib/server/db/schema.js";
import { desc } from "drizzle-orm";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const items = await db.query.itemsTable.findMany({
		limit: 6,
		orderBy: desc(itemsTable.createdAt),
	});

	const getCategories = async () => await db.query.categoriesTable.findMany();

	return {
		items,
		streamed: {
			categories: getCategories(),
		},
	};
}
