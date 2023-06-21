<script>
	import Aside from "./Aside.svelte";

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<section class="grid gap-5 grid-cols-[max-content_1fr]">
	<Aside />

	<div class="grid gap-10 grid-cols-4">
		{#each data.items as item (item.id)}
			<a href="/items/{item.id}">
				<figure class="border rounded h-fit shadow hover:shadow-lg">
					<img src={`/uploads/${item.image}`} alt={item.name} class="object-center h-52 w-full" />
					<figcaption class="p-3">
						<h3>{item.name}</h3>
						<p>${item.price.toLocaleString()}</p>
					</figcaption>
				</figure>
			</a>
		{:else}
			<p>No Items added yet!!</p>
		{/each}
	</div>
</section>
