<script>
	import dayjs from "dayjs";

	export let data;
	// console.log(data);
</script>

<figure class="grid gap-10 grid-cols-2">
	<img
		src={`/uploads/${data.item.image}`}
		alt={data.item.name}
		class="object-center h-80 w-fit block"
	/>
	<figcaption>
		<h2 class="font-bold mb-3 text-4xl text-gray-700 opensans capitalize">{data.item.name}</h2>
		<p class="max-w-md mb-1 text-gray-700">{data.item.description}</p>
		<p class="mb-1 text-gray-700">Price: ${data.item.price}</p>
		<p class="mb-1 text-gray-700">
			Seller: {data.item.User.name} (@{data.item.User.username})
		</p>
		<p class="mb-1 text-gray-700">
			Date Uploaded:
			{dayjs(data.item.dateCreated).format("MMM DD, YYYY")}
		</p>

		<!-- Contact Seller link -->
		<a
			href="/items/{data.item.id}"
			class="rounded bg-gray-300 mt-5 text-xs w-fit py-2 px-6 text-gray-700
			block hover:bg-gray-600 hover:text-white"
		>
			Message Seller
		</a>
	</figcaption>
</figure>
