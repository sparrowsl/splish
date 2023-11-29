<script>
	/** @type {import("$lib/types").Item} */
	export let item;
</script>

<figure class="border rounded h-fit shadow hover:shadow-lg">
	<img
		src={item.image?.startsWith("http") ? item.image : `/uploads/${item.image}`}
		alt={item.name}
		class="object-cover h-52 w-full"
	/>
	<figcaption class="p-3">
		<h3>{item.name}</h3>
		<p class="text-gray-600">price: ${item.price}</p>
	</figcaption>
</figure>
