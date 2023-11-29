import db from "$lib/server/db/drizzle.js";
import { itemsTable } from "$lib/server/db/schema.js";
import { desc } from "drizzle-orm";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const items = await db.query.itemsTable.findMany({
		limit: 6,
		orderBy: desc(itemsTable.createdAt),
	});
	// const res = await fetch("/api/items");
	// const data = await res.json();

	// const cats = await fetch("/api/categories");
	// const catData = await cats.json();

	// const onSaleItems = data.items.filter((/**@type {import("$lib/types.js").Item} */ item) => !item.isSold);
	return {
		items,
		categories: ["Clothes", "Furnitures", "Toys"],
		// categories: catData.categories,
	};
}
