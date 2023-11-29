<script>
	import Aside from "$lib/components/Aside.svelte";
	import ItemCard from "./ItemCard.svelte";

	/** @type {import('./$types').PageServerData} */
	export let data;
</script>

<section class="grid gap-5 grid-cols-[max-content_1fr]">
	{#await data.streamed.categories then categories}
		<Aside {categories} />
	{/await}

	<div class="h-fit grid gap-10 grid-cols-3 lg:grid-cols-4">
		{#each data.items as item (item.id)}
			<a href="/items/{item.id}"><ItemCard {item} /></a>
		{:else}
			<p class="text-gray-500">No Items added yet!!</p>
		{/each}
	</div>
</section>
