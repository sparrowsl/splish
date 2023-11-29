import db from "$lib/server/db/drizzle.js";
import { categoriesTable, itemsTable } from "$lib/server/db/schema.js";
import { uploadFile } from "$lib/utils/upload.js";
import { redirect } from "@sveltejs/kit";
import { nanoid } from "nanoid";
import { z } from "zod";

async function seedCategories() {
	await db.delete(categoriesTable);

	const res = await fetch("https://dummyjson.com/products/categories");
	const data = await res.json();

	const categories = ["clothes", "trousers", "pants", "shorts"].concat(data);
	for (const name of categories) {
		try {
			await db.insert(categoriesTable).values({ id: nanoid(), name });
		} catch (error) {}
	}
}

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	// seedCategories();
	const getCategories = async () => await db.query.categoriesTable.findMany();

	return {
		streamed: {
			categories: getCategories(),
		},
	};
}

const itemSchema = z.object({
	id: z.string().optional(),
	name: z.string(),
	price: z.number({ coerce: true }).default(0),
	// image: z.string().optional().default("https://via.placeholder.com/150"),
	description: z.string(),
	isSold: z.boolean().optional(),
	createdAt: z.date().optional(),
});

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const form = Object.fromEntries(await request.formData());

		/** @type {import("$lib/types").Item} */
		let newItem;
		try {
			// @ts-ignore
			newItem = itemSchema.parse(form);
			console.log(newItem);
		} catch (error) {
			console.log(error);
			return { error: "Invalid data!!" };
		}

		await db
			.insert(itemsTable)
			.values({
				id: nanoid(),
				image: await uploadFile(form.image),
				description: newItem.description,
				name: newItem.name,
				price: newItem.price,
			})
			.returning();

		if (!newItem) return { error: "Can't create new item currently!!" };

		throw redirect(307, "/items");
	},
};
