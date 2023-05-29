<script>
	/** @type {"button" | "submit" | "reset"} */
	export let type = "button";
	export let disabled = false;
</script>

<button
	type="{type}"
	disabled="{disabled}"
	on:click
	class="{$$props.class} block rounded bg-gray-700 p-2 text-sm text-white"
>
	<slot>Click Me</slot>
</button>
