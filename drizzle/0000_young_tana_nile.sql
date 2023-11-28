CREATE TABLE `categories` (
	`id` text NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `items` (
	`id` text NOT NULL,
	`name` text NOT NULL,
	`price` integer DEFAULT 0,
	`image` text DEFAULT 'https://via.placeholder.com/150',
	`description` text NOT NULL,
	`is_sold` integer DEFAULT false,
	`created_at` text DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text NOT NULL,
	`name` text NOT NULL,
	`username` text NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`is_admin` integer DEFAULT false NOT NULL,
	`joined` text DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE UNIQUE INDEX `categories_id_unique` ON `categories` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `items_id_unique` ON `items` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_id_unique` ON `users` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_username_unique` ON `users` (`username`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);