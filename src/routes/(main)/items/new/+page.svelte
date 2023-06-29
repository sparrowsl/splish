<script>
	import { enhance } from "$app/forms";
	import Input from "$lib/components/shared/Input.svelte";
	import Textarea from "$lib/components/shared/Textarea.svelte";
	import Button from "$lib/components/shared/Button.svelte";

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<form action="" method="POST" use:enhance class="max-w-3xl pb-10" enctype="multipart/form-data">
	<fieldset class="grid gap-5">
		<legend class="font-bold text-xl mb-5">Add New Item</legend>

		<label for="" class="text-sm text-gray-700">
			Name
			<Input name="name" placeholder="Item Name" />
		</label>

		<label for="" class="text-sm text-gray-700">
			Price <small class="text-xs">(in $)</small>
			<Input type="number" name="price" placeholder="Item Price" />
		</label>

		<label for="" class="text-sm text-gray-700">
			Image URL
			<Input type="file" name="image" accept=".png, .jpeg, .webp" placeholder="Item Image" />
		</label>

		<label for="" class="text-sm text-gray-700">
			Category
			<select name="category" class="rounded text-sm w-full p-2 text-gray-700 capitalize">
				{#each data.categories as category (category.id)}
					<option value={category.id} class="capitalize">{category.name}</option>
				{/each}
			</select>
		</label>

		<label for="" class="text-sm text-gray-700">
			Description
			<Textarea name="description" placeholder="Item Description" />
		</label>

		<Button type="submit" classes="w-fit px-10">Add Item</Button>
	</fieldset>
</form>
