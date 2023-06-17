import { redirect } from "@sveltejs/kit";
import prisma from "$lib/server/prisma";

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

		// Check if username exists
		const userExists = await prisma.user.findFirst({
			where: { username, email },
		});
		if (userExists) return { error: "Username or Email already exists!!" };

		const res = await fetch("/api/users", {
			method: "POST",
			body: JSON.stringify({ name, username, email, password }),
		});
		const data = await res.json();

		if (!res.ok) return { error: data.message };

		// Set cookies
		cookies.set("splish", data.id, {
			path: "/",
			httpOnly: true,
			sameSite: "strict",
			maxAge: 60 * 60 * 24 * 7,
		});
		throw redirect(302, "/items");
	},
};
