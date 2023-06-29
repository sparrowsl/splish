export interface Category {
	name: String;
	id: String;
	items: Item[];
}

export interface Item {
	id: String;
	name: String;
	price: Number;
	image: String;
	description: String;
	isSold: Boolean;
	createdAt: Date;
	userId: String;
	categoryId: String;
}
