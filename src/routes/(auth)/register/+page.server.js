import { JWT_SECRET_KEY } from "$env/static/private";
import db from "$lib/server/db/drizzle.js";
import { usersTable } from "$lib/server/db/schema.js";
import { redirect } from "@sveltejs/kit";
import { eq, or } from "drizzle-orm";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, cookies }) => {
		const form = Object.fromEntries(await request.formData());

		// Check if username exists
		const usernameExists = await db.query.usersTable.findFirst({
			where: or(
				eq(usersTable.username, form.username.toString()),
				eq(usersTable.email, form.email.toString()),
			),
		});
		if (usernameExists) return { error: "Username or Email already exists!!" };

		// Create a new user
		const user = (
			await db
				.insert(usersTable)
				.values({ id: nanoid(), ...Object(form) })
				.returning({ id: usersTable.id })
		)[0];

		cookies.set("token", jwt.sign(user.id, JWT_SECRET_KEY), {
			path: "/",
			httpOnly: true,
			sameSite: "strict",
			maxAge: 60 * 60 * 24 * 7,
		});

		throw redirect(307, "/items");
	},
};
