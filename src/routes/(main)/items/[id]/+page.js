/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
	const res = await fetch(`/api/items/${params.id}`);
	const data = await res.json();

	if (!res.ok) return;
	return { item: data.item };
}
