<script>
	export let data;
</script>

<h1 class="text-3xl">Recent Items</h1>

<section class="grid gap-10 grid-cols-4">
	{#each data.items as item}
		<figure class="border rounded shadow hover:shadow-lg">
			<img src={item.image} alt={item.name} class="bg-center bg-cover h-56 w-full" />
			<figcaption class="p-3">
				<h3>{item.name}</h3>
				<p>${item.price.toLocaleString()}</p>
			</figcaption>
		</figure>
	{/each}
</section>
