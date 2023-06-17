import { redirect } from "@sveltejs/kit";
import bcrypt from "bcrypt";
import prisma from "$lib/server/prisma.js";

/** @type {import('./$types').PageServerLoad} */
export async function load() {}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, cookies }) => {
		const form = await request.formData();
		const email = form.get("email")?.toString() ?? "";
		const password = form.get("password")?.toString() ?? "";

		const user = await prisma.user.findUnique({
			where: { email },
		});
		if (!user) return { error: "Invalid email or password!!" };

		const validPassword = await bcrypt.compare(password, user.password);
		if (!validPassword) return { error: "Invalid email or password" };

		cookies.set("splish", user.id, {
			path: "/",
			httpOnly: true,
			sameSite: "strict",
			maxAge: 60 * 60 * 24 * 7,
		});

		throw redirect(302, "/items");
	},
};
