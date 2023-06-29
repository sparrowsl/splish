/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const res = await fetch("/api/items");
	const data = await res.json();

	const cats = await fetch("/api/categories");
	const catData = await cats.json();

	const onSaleItems = data.items.filter((/**@type {any} */ item) => !item.isSold);
	return {
		items: onSaleItems.slice(0, 6),
		// categories: ["Clothes", "Furnitures", "Toys"],
		categories: catData.categories,
	};
}
