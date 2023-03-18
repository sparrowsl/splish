<script>
	import { page } from '$app/stores';
	import Aside from './Aside.svelte';

	export let data;
	$: console.log($page.url.searchParams.get('category') || null);
</script>

<section class="grid gap-5 grid-cols-[max-content_1fr]">
	<Aside categories={data.categories} />

	<div class="grid gap-10 grid-cols-4">
		{#each data.items as item (item.id)}
			<a href="/items/{item.id}" class="h-fit">
				<figure class="border rounded shadow hover:shadow-lg">
					<img src={item.image} alt={item.name} class="object-center h-52 w-full" />
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
