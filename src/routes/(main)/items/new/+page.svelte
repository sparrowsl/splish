<script>
	import { enhance } from '$app/forms';
	import Input from '../../../../lib/components/shared/Input.svelte';
	import Textarea from '../../../../lib/components/shared/Textarea.svelte';
	import Button from '../../../../lib/components/shared/Button.svelte';

	export let data;
</script>

<form action="" method="post" use:enhance class="max-w-3xl pb-10">
	<fieldset class="grid gap-5">
		<legend class="font-bold text-xl mb-5">Add New Item</legend>

		<div>
			<label for="" class="text-sm text-gray-700">Name</label>
			<Input name="name" placeholder="Item Name" />
		</div>

		<div>
			<label for="" class="text-sm text-gray-700">
				Price <small class="text-xs">(in $)</small>
			</label>
			<Input type="number" name="price" placeholder="Item Price" />
		</div>

		<div>
			<label for="" class="text-sm text-gray-700">Image URL</label>
			<Input type="url" name="image" placeholder="Item Image" />
			<!-- <input type="file" accept=".png, .jpeg, .webp" name="image" class="block" /> -->
		</div>

		<div>
			<label for="" class="text-sm text-gray-700">Category</label>
			<select name="category" class="rounded text-sm w-full p-2 text-gray-700 capitalize">
				{#each data.categories as { id, name } (id)}
					<option value={id} class="capitalize">{name}</option>
				{/each}
			</select>
		</div>

		<div>
			<label for="" class="text-sm text-gray-700">Description</label>
			<Textarea name="description" placeholder="Item Description" />
		</div>

		<Button type="submit" classes="w-fit px-10">Add Item</Button>
	</fieldset>
</form>
