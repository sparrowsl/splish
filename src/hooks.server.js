// import prisma from "$lib/server/prisma.js";

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ resolve, event }) => {
	const session = event.cookies.get("splish");
	if (!session) return await resolve(event);

	// const user = await prisma.user.findUnique({
	// 	where: { id: session },
	// 	select: {
	// 		email: true,
	// 		isAdmin: true,
	// 		id: true,
	// 		name: true,
	// 		username: true,
	// 	},
	// });

	// if (user) event.locals.user = user;
	return await resolve(event);
};
