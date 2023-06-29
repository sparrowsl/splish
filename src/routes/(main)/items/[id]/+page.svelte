<script>
	import dayjs from "dayjs";

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<figure class="grid gap-10 grid-cols-2">
	<img
		src={`/uploads/${data.item.image}`}
		alt={data.item.name}
		class="object-center h-80 w-fit block"
	/>
	<figcaption class="flex flex-col gap-2">
		<h2 class="font-bold mb-3 text-(4xl gray-700) opensans capitalize">{data.item.name}</h2>
		<p class="max-w-md text-gray-800">{data.item.description}</p>
		<p class="text-gray-700">Price: ${data.item.price}</p>
		<p class="text-gray-700">
			Seller: {data.item.User.name} <span class="text-blue">@{data.item.User.username}</span>
		</p>
		<p class="text-gray-700">
			Uploaded on:
			{dayjs(data.item.dateCreated).format("MMMM DD, YYYY")}
		</p>

		<!-- Contact Seller link -->
		<a
			href="/items/{data.item.id}"
			class="rounded bg-gray-300 mt-5 text-(xs gray-700) w-fit py-2 px-6
			block hover:(bg-gray-600 text-white)"
		>
			Message Seller
		</a>
	</figcaption>
</figure>
