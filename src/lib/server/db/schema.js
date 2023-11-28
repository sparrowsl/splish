import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users", {
	id: text("id").notNull().unique(),
	name: text("name").notNull(),
	username: text("username").notNull().unique(),
	email: text("email").notNull().unique(),
	password: text("password").notNull(),
	isAdmin: integer("is_admin", { mode: "boolean" }).notNull().default(false),
	joined: text("joined").default(sql`CURRENT_TIMESTAMP`),
});

export const categoriesTable = sqliteTable("categories", {
	id: text("id").notNull().unique(),
	name: text("name").notNull(),
	// items:
});

export const itemsTable = sqliteTable("items", {
	id: text("id").notNull().unique(),
	name: text("name").notNull(),
	price: integer("price").default(0),
	image: text("image").default("https://via.placeholder.com/150"),
	description: text("description").notNull(),
	isSold: integer("is_sold", { mode: "boolean" }).default(false),
	createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),

	// categoryId String?
	// Category   Category? @relation(fields: [categoryId], references: [id], onDelete: Cascade)
	// userId     String?
	// User       User?     @relation(fields: [userId], references: [id], onDelete: Cascade)
});
