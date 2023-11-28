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
	<title>Login | Splish 🛒</title>
</svelte:head>

<form
	action=""
	method="post"
	class="bg-white rounded-md min-w-80 py-5 px-7"
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
		<legend class="font-bold text-center text-xl mb-5 text-gray-700">Login</legend>

		<Input label="Email" type="email" name="email" placeholder="Email" />
		<Input label="Password" type="password" name="password" placeholder="password" />

		<!-- {#if form?.error}
			<small class="text-center text-red-500 italic">{form.error}</small>
		{/if} -->

		<Button disabled={loading} class="opensans {loading && 'animate-pulse disabled:cursor-wait'}">
			{loading ? "..." : "Login"}
		</Button>
	</fieldset>

	<small class="mt-3 text-center text-gray-500 block">
		Need an account? <a href="/register" class="text-xs text-blue-400">register here</a>
	</small>
</form>

<a href="/" class="mt-5 text-center text-xs opacity-60 text-blue-600 block">Back Home</a>
