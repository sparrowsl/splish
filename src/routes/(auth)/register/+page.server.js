import { redirect } from "@sveltejs/kit";
import bcrypt from "bcrypt";
import prisma from "../../../lib/server/prisma.js";

/** @type {import('./$types').PageServerLoad} */
export async function load({}) {}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, cookies }) => {
		const form = await request.formData();

		const name = form.get("name")?.toString() ?? "";
		const username = form.get("username")?.toString() ?? "";
		const email = form.get("email")?.toString() ?? "";
		const password = form.get("password")?.toString() ?? "";

		// Check if username exists
		const usernameExists = await prisma.user.findUnique({
			where: { username },
		});
		if (usernameExists) return { error: "Username already exists!!" };

		// Check if username exists
		const emailExists = await prisma.user.findUnique({
			where: { email },
		});
		if (emailExists) return { error: "Email already exists!!" };

		// Create the user
		const user = await prisma.user.create({
			data: {
				id: crypto.randomUUID(),
				name,
				username,
				email,
				password: await bcrypt.hash(password, 10),
			},
		});

		// Set cookies
		cookies.set("splish", user.id, {
			path: "/",
			httpOnly: true,
			sameSite: "strict",
			maxAge: 60 * 60 * 24 * 7,
		});

		throw redirect(302, "/items");
	},
};
