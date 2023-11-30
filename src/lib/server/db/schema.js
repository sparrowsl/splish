import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users", {
	id: text("id").notNull().unique().primaryKey(),
	name: text("name"),
	username: text("username").notNull().unique(),
	email: text("email").unique(),
	password: text("password").notNull(),
	isAdmin: integer("is_admin", { mode: "boolean" }).notNull().default(false),
	joined: text("joined").default(sql`CURRENT_TIMESTAMP`),
});

export const categoriesTable = sqliteTable("categories", {
	id: text("id").notNull().unique().primaryKey(),
	name: text("name").notNull(),
});

export const itemsTable = sqliteTable("items", {
	id: text("id").notNull().unique().primaryKey(),
	name: text("name").notNull(),
	price: integer("price").default(0),
	image: text("image").default("https://via.placeholder.com/150"),
	description: text("description").notNull(),
	isSold: integer("is_sold", { mode: "boolean" }).default(false),
	createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
	ownerId: text("owner_id")
		.notNull()
		.references(() => usersTable.id, { onDelete: "cascade" })
		.default("NULL"),
	categoryId: text("category_id")
		.notNull()
		.references(() => categoriesTable.id, { onDelete: "set default" })
		.default("NULL"),
});
