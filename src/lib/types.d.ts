export interface Category {
	id?: string;
	name: string;
	items?: Item[];
}

export interface Item {
	id?: string;
	name: string;
	price: number | null;
	image?: string | null;
	description: string;
	isSold?: boolean | undefined | null;
	createdAt?: Date | string | null | undefined;
	userId?: string;
	categoryId?: string | null;
}

export interface User {
	id?: string;
	name?: string | null;
	username: string;
	email?: string | null;
	password: string;
	isAdmin?: boolean;
	joined?: Date | string | null;
	items?: Item[];
}
