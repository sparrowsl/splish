<script>
	import { enhance } from '$app/forms';
	import Input from '../../../../lib/components/shared/Input.svelte';
	import Textarea from '../../../../lib/components/shared/Textarea.svelte';
	import Button from '../../../../lib/components/shared/Button.svelte';

	export let data;
</script>

<form action="" method="post" use:enhance class="max-w-3xl pb-10">
	<fieldset class="grid gap-5">
		<legend class="font-bold text-xl mb-10">Add New Item</legend>

		<div>
			<label for="" class="text-sm text-gray-500">Name</label>
			<Input name="name" placeholder="Item Name" />
		</div>

		<div>
			<label for="" class="text-sm text-gray-500">Price</label>
			<Input type="number" name="price" placeholder="Item Price" />
		</div>

		<div>
			<label for="" class="text-sm text-gray-500">Image URL</label>
			<Input type="url" name="image" placeholder="Item Image" />
			<!-- <input type="file" accept=".png, .jpeg, .webp" name="image" class="block" /> -->
		</div>

		<div>
			<label for="" class="text-sm text-gray-500">Description</label>
			<Textarea name="description" placeholder="Item Description" />
		</div>

		<div>
			<label for="" class="text-sm text-gray-500">Category</label>
			<select name="category" class="w-full py-3">
				{#each data.categories as category (category)}
					<option value={category}>{category}</option>
				{/each}
			</select>
		</div>

		<Button type="submit" classes="w-fit px-10">Add Item</Button>
	</fieldset>
</form>
