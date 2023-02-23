<script>
	import { applyAction, enhance } from '$app/forms';
	import Button from '../lib/components/shared/Button.svelte';
	import Input from '../lib/components/shared/Input.svelte';

	export let form;
</script>

<svelte:head>
	<title>Login | Splish 🛒</title>
</svelte:head>

<form
	action=""
	method="POST"
	class="rounded-md bg-white px-7 py-5"
	use:enhance={({ form }) => {
		return async ({ result, update }) => {
			if (result.type === 'success') form.reset();
			if (result.type === 'invalid') await applyAction(form);
			update();
		};
	}}
>
	<fieldset class="grid gap-5">
		<legend class="mb-5 text-center text-xl font-bold text-gray-700">Login</legend>

		<div>
			<label for="" class="block text-sm text-gray-600">Email</label>
			<Input type="email" name="email" placeholder="john@gmail.com" />
		</div>

		<div>
			<label for="" class="block text-sm text-gray-600">Password</label>
			<Input type="password" name="password" placeholder="password" />
		</div>

		{#if form?.error}
			<small class="text-center italic text-red-500">{form.error}</small>
		{/if}

		<Button classes="opensans">Login</Button>
	</fieldset>

	<small class="mt-3 block text-center text-gray-500">
		Need an account? <a href="/register" class="text-xs text-blue-400">register here</a>
	</small>
</form>

<a href="/" class="mt-5 block text-center text-xs text-blue-600 opacity-60">Back Home</a>
