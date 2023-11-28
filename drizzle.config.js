/** @type { import("drizzle-kit").Config } */
export default {
	out: "./drizzle",
	schema: "./src/lib/server/db/schema.js",
	driver: "better-sqlite",
	breakpoints: true,
	strict: true,
	verbose: true,
	dbCredentials: {
		url: "./sqlite.db",
	},
};
