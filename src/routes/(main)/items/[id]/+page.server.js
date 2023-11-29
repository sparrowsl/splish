import db from "$lib/server/db/drizzle.js";
import { itemsTable } from "$lib/server/db/schema.js";
import { redirect } from "@sveltejs/kit";
import { eq } from "drizzle-orm";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const item = await db.query.itemsTable.findFirst({
		where: eq(itemsTable.id, params.id),
	});

	if (!item) throw redirect(307, "/");

	return { item };
}
