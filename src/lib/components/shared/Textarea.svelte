<script>
	export let name = "";
	export let placeholder = "";
	export let value = "";
	export let disabled = false;
	export let required = false;
</script>

<textarea
	{name}
	{required}
	{placeholder}
	{disabled}
	bind:value
	class="{$$props.class} block w-full min-h-20 rounded border p-2 text-sm"
/>
