<script>
	import { applyAction, enhance } from '$app/forms';
	import Button from '../../../lib/components/shared/Button.svelte';
	import Input from '../../../lib/components/shared/Input.svelte';

	export let form;
</script>

<svelte:head>
	<title>Register | Splish 🛒</title>
</svelte:head>

<form
	class="bg-white rounded-md min-w-80 py-5 px-7"
	method="POST"
	use:enhance={({ form }) => {
		return async ({ result, update }) => {
			if (result.type === 'success') form.reset();
			if (result.type === 'invalid') await applyAction(form);
			update();
		};
	}}
>
	<fieldset class="grid gap-5">
		<legend class="font-bold text-center text-xl mb-5 text-gray-700">Register</legend>

		<div>
			<label for="" class="text-sm text-gray-600 block">Name (optional)</label>
			<Input type="text" name="name" placeholder="John Doe" required={false} />
		</div>

		<div>
			<label for="" class="text-sm text-gray-600 block">Username</label>
			<Input type="text" name="username" placeholder="johndoe" />
		</div>

		<div>
			<label for="" class="text-sm text-gray-600 block">Email (optional)</label>
			<Input type="email" name="email" placeholder="john@gmail.com" required={false} />
		</div>

		<div>
			<label for="" class="text-sm text-gray-600 block">Password</label>
			<Input type="password" name="password" placeholder="password" />
		</div>

		{#if form?.error}
			<small class="text-center text-red-500 italic">{form.error}</small>
		{/if}

		<Button type="submit" classes="opensans">Register</Button>
	</fieldset>

	<small class="mt-3 text-center text-gray-500 block">
		Already have an account? <a href="/login" class="text-xs text-blue-400">login here</a>
	</small>
</form>

<a href="/" class="mt-5 text-center text-xs opacity-60 text-blue-600 block">Back Home</a>
