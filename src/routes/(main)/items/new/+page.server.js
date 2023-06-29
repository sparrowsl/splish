import { redirect } from "@sveltejs/kit";
import prisma from "$lib/server/prisma.js";
import { uploadFile } from "$lib/utils/upload.js";

async function seedCategories() {
	await prisma.category.deleteMany();
	// const res = await fetch("https://dummyjson.com/products/categories");
	// const categories = [...["clothes", "trousers", "pants", "shorts"], ...data];
	["Clothes", "Furnitures", "Toys"].forEach(async (categ) => {
		try {
			await prisma.category.create({
				data: { name: categ },
			});
		} catch (error) {}
	});
}

/** @type {import('./$types').PageServerLoad} */
export async function load({}) {
	// seedCategories();

	const categories = await prisma.category.findMany();
	return { categories };
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, locals, fetch }) => {
		const form = await request.formData();
		const name = form.get("name")?.toString() ?? "";
		const price = form.get("price")?.toString() ?? "";
		const image = form.get("image");
		const description = form.get("description")?.toString() ?? "";
		const categoryId = form.get("category")?.toString() ?? "";

		const res = await fetch("/api/items", {
			method: "POST",
			headers: { "Content-Type": "multipart/form-data" },
			body: JSON.stringify({
				userId: locals?.user?.id || "e228be3c-5a1d-4e84-950c-605aff9a9a23",
				name,
				price: Number(price),
				image: await uploadFile(image),
				description,
				categoryId,
			}),
		});
		// const data = await res.json();

		if (!res.ok) return { error: "Could not upload the file or create new item!!" };

		throw redirect(302, "/items");
	},
};
