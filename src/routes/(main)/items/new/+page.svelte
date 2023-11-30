<script>
	import { enhance } from "$app/forms";
	import Input from "$lib/components/Input.svelte";
	import Textarea from "$lib/components/Textarea.svelte";
	import Button from "$lib/components/Button.svelte";

	/** @type {import('./$types').PageServerData} */
	export let data;
</script>

<form action="" method="POST" use:enhance class="max-w-3xl pb-10" enctype="multipart/form-data">
	<fieldset class="grid gap-5">
		<legend class="font-bold text-xl mb-5">Add New Item</legend>
		<Input label="Name" name="name" />
		<Input label="Price (in $)" type="number" name="price" />
		<Input label="Image URL" type="file" name="image" accept=".png,.jpeg,.webp" class="border max-w-60" />
		<label for="category">
			<span class="text-sm text-gray-700 block">Category</span>
			<select name="categoryId" class="rounded text-sm w-full p-2 text-gray-700 capitalize">
				{#await data?.streamed?.categories}
					<option value="" disabled selected>loading...</option>
				{:then categories}
					{#each categories as category (category.id)}
						<option value={category.id} class="capitalize">{category.name}</option>
					{/each}
				{/await}
			</select>
		</label>
		<Textarea label="Description" name="description" placeholder="Item Description" />
		<Button class="w-fit px-10">Add Item</Button>
	</fieldset>
</form>
