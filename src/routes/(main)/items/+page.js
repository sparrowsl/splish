/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const res = await fetch("/api/items");
	const items = await res.json();

	const onSaleItems = items.filter((/**@type {any} */ item) => !item.isSold);
	return { items: onSaleItems };
}
