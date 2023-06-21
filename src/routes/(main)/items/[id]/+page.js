/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
	const res = await fetch(`/api/items/${params.id}`);
	const item = await res.json();

	if (!res.ok) return {};

	return { item };
}
