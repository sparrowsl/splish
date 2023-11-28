export interface Category {
	name: string;
	id: string;
	items: Item[];
}

export interface Item {
	id: string;
	name: string;
	price: number;
	image: string;
	description: string;
	isSold: boolean;
	createdAt: Date;
	userId: string;
	categoryId: string;
}
