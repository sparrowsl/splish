<script>
	import dayjs from "dayjs";

	/** @type {import('./$types').PageServerData} */
	export let data;
	const { item } = data;
</script>

<figure class="grid gap-10 grid-cols-2">
	<img
		src={item.image?.startsWith("http") ? item.image : `/uploads/${item.image}`}
		alt={item.name}
		class="object-center h-80 w-fit block"
	/>
	<figcaption class="flex flex-col gap-2">
		<h2 class="font-bold mb-3 text-(4xl opensans capitalize gray-700)">{item.name}</h2>
		<p class="max-w-md text-gray-800">{item.description}</p>
		<p class="text-gray-700">Price: ${item.price}</p>
		<p class="text-gray-700">
			Seller: {item.owner?.name} <span class="text-blue">@{item.owner?.username}</span>
		</p>
		<p class="text-gray-700">
			Uploaded on:
			{dayjs(item.createdAt).format("MMMM DD, YYYY")}
		</p>

		<!-- Contact Seller link -->
		<a href="/items/{item.id}" class="rounded bg-gray-300 mt-5 text-xs w-fit py-2 px-6 text-gray-700 block">
			Message Seller
		</a>
	</figcaption>
</figure>
