import prisma from "$lib/server/prisma";
import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({}) {}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, cookies, fetch }) => {
		const form = await request.formData();
		const name = form.get("name")?.toString() ?? "";
		const username = form.get("username")?.toString() ?? "";
		const email = form.get("email")?.toString() ?? "";
		const password = form.get("password")?.toString() ?? "";

		try {
			// Check if username exists
			await prisma.user.findFirst({
				where: { username, email },
			});
		} catch (error) {
			console.log(error);
			return { error: "Username or Email already exists!!" };
		}

		const res = await fetch("/api/users", {
			method: "POST",
			body: JSON.stringify({ name, username, email, password }),
		});
		const data = await res.json();

		if (!res.ok) return { error: data };

		// return { message: data };
		console.log(data);

		// Set cookies
		// cookies.set("splish", user.id, {
		// 	path: "/",
		// 	httpOnly: true,
		// 	sameSite: "strict",
		// 	maxAge: 60 * 60 * 24 * 7,
		// });
		throw redirect(302, "/items");
	},
};
