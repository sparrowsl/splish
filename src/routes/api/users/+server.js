import { json } from "@sveltejs/kit";
import bcrypt from "bcrypt";
import prisma from "$lib/server/prisma";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { name, username, email, password } = await request.json();
	let user = {};

	try {
		user = await prisma.user.create({
			data: {
				name,
				username,
				email,
				password: await bcrypt.hash(password, 10),
			},
		});
		return json(user);
	} catch (error) {
		return json({ error: "Could not create the user:" });
	}
}
