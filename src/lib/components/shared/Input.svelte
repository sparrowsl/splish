<script>
	// @ts-nocheck
	export let type = "text";
	export let name = "";
	export let placeholder = "";
	export let value = "";
	export let disabled = false;
	export let required = true;
</script>

<input
	{type}
	{name}
	{required}
	{placeholder}
	{disabled}
	on:input={(e) => (value = e.target?.value)}
	class="{$$props.class} block w-full rounded border p-2 text-sm"
/>
