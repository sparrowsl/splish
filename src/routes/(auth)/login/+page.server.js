import { JWT_SECRET_KEY } from "$env/static/private";
import db from "$lib/server/db/drizzle.js";
import { usersTable } from "$lib/server/db/schema.js";
import { redirect } from "@sveltejs/kit";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import jwt from "jsonwebtoken";

/** @type {import('./$types').PageServerLoad} */
export async function load() {}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, cookies }) => {
		const form = Object.fromEntries(await request.formData());

		const userEmail = await db.query.usersTable.findFirst({
			where: eq(usersTable.email, form?.email.toString()),
		});
		if (!userEmail) return { error: "Invalid email or password!!" };

		const validPassword = await bcrypt.compare(
			form?.password.toString(),
			userEmail.password,
		);
		if (!validPassword) return { error: "Invalid email or password" };

		cookies.set("token", jwt.sign(userEmail.id, JWT_SECRET_KEY), {
			path: "/",
			httpOnly: true,
			sameSite: "strict",
			maxAge: 60 * 60 * 24 * 7,
		});

		throw redirect(307, "/items");
	},
};
