<script>
	import { applyAction, enhance } from "$app/forms";
	import Button from "$lib/components/shared/Button.svelte";
	import Input from "$lib/components/shared/Input.svelte";

	/** @type {import('./$types').ActionData} */
	export let form;
	let loading = false;
	$: console.log(form);
</script>

<svelte:head>
	<title>Register | Splish 🛒</title>
</svelte:head>

<form
	class="bg-white rounded-md min-w-80 py-5 px-7"
	method="POST"
	use:enhance={({ formElement }) => {
		loading = true;
		return async ({ result, update }) => {
			if (result.type === "success") formElement.reset();
			if (result.type === "failure") await applyAction(result);
			update();
			loading = false;
		};
	}}
>
	<fieldset class="grid gap-5">
		<legend class="font-bold text-center text-xl mb-5 text-gray-700"> Register </legend>

		<label for="" class="text-sm text-gray-600 block">
			Name (optional)
			<Input type="text" name="name" placeholder="John Doe" required={false} />
		</label>

		<label for="" class="text-sm text-gray-600 block">
			Username
			<Input type="text" name="username" placeholder="johndoe" />
		</label>

		<label for="" class="text-sm text-gray-600 block">
			Email (optional)
			<Input type="email" name="email" placeholder="john@gmail.com" required={false} />
		</label>

		<label for="" class="text-sm text-gray-600 block">
			Password
			<Input type="password" name="password" placeholder="password" />
		</label>

		{#if form?.error}
			<small class="text-center text-red-500 italic">{form?.error}</small>
		{/if}

		<Button
			type="submit"
			disabled={loading}
			classes="opensans {loading && 'animate-pulse disabled:cursor-wait'}"
		>
			{loading ? "..." : "Register"}
		</Button>
	</fieldset>

	<small class="mt-3 text-center text-gray-500 block">
		Already have an account? <a href="/login" class="text-xs text-blue-400"> login here </a>
	</small>
</form>

<a href="/" class="mt-5 text-center text-xs opacity-60 text-blue-600 block"> Back Home </a>
