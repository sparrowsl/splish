/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const res = await fetch("/api/items");
	const data = await res.json();
	return { items: data };
}
