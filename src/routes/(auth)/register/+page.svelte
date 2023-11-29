<script>
	import { enhance } from "$app/forms";
	import Button from "$lib/components/Button.svelte";
	import Input from "$lib/components/Input.svelte";

	/** @type {import('./$types').ActionData} */
	export let form;
	$: console.log(form);
</script>

<svelte:head>
	<title>Register | Splish 🛒</title>
</svelte:head>

<form class="bg-white rounded-md min-w-80 py-5 px-7" method="post" use:enhance>
	<fieldset class="grid gap-5">
		<legend class="font-bold text-center text-xl mb-5 text-gray-700"> Register </legend>
		<Input label="Name (optional)" name="name" required={false} />
		<Input label="Username" name="username" />
		<Input label="Email (optional)" type="email" name="email" required={false} />
		<Input label="Password" type="password" name="password" />
		<Button class="opensans">Register</Button>
	</fieldset>

	<small class="mt-3 text-center text-gray-500 block">
		Already have an account? <a href="/login" class="text-xs text-blue-400"> login here </a>
	</small>
</form>

<a href="/" class="mt-5 text-center text-xs opacity-60 text-blue-600 block"> Back Home </a>
