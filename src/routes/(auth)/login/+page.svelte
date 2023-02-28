<script>
	import { applyAction, enhance } from '$app/forms';
	import Button from '../../../lib/components/shared/Button.svelte';
	import Input from '../../../lib/components/shared/Input.svelte';

	export let form;
	let loading = false;
</script>

<svelte:head>
	<title>Login | Splish 🛒</title>
</svelte:head>

<form
	action=""
	method="post"
	class="bg-white rounded-md min-w-80 py-5 px-7"
	use:enhance={({ form }) => {
		loading = true;
		return async ({ result, update }) => {
			if (result.type === 'success') form.reset();
			if (result.type === 'invalid') await applyAction(form);
			update();
			loading = false;
		};
	}}
>
	<fieldset class="grid gap-5">
		<legend class="font-bold text-center text-xl mb-5 text-gray-700">Login</legend>

		<div>
			<label for="" class="text-sm text-gray-600 block">Username</label>
			<Input type="text" name="username" placeholder="Username" />
		</div>

		<div>
			<label for="" class="text-sm text-gray-600 block">Password</label>
			<Input type="password" name="password" placeholder="password" />
		</div>

		{#if form?.error}
			<small class="text-center text-red-500 italic">{form.error}</small>
		{/if}

		<Button
			type="submit"
			disabled={loading}
			classes="opensans {loading ? 'animate-pulse disabled:cursor-wait' : ''}"
		>
			{loading ? '...' : 'Login'}
		</Button>
	</fieldset>

	<small class="mt-3 text-center text-gray-500 block">
		Need an account? <a href="/register" class="text-xs text-blue-400">register here</a>
	</small>
</form>

<a href="/" class="mt-5 text-center text-xs opacity-60 text-blue-600 block">Back Home</a>
