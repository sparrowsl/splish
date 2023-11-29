<script>
	export let type = "text";
	export let name = "";
	export let placeholder = "";
	export let required = true;
	export let id = "";
	export let label = "";
	/** @type {number|string} */
	export let value = "";
	/** @type {number|string} */
	export let min = 0;
	/** @type {number|string} */
	export let max = "";
</script>

<label for={id || name} class="block">
	{#if label.trim()}<span class="text-sm text-gray-600">{label}</span>{/if}
	<input
		{type}
		{name}
		{min}
		{max}
		id={id || name}
		{placeholder}
		{required}
		{value}
		on:input={(/** @type {Event|any} */ e) => (value = e.target?.value)}
		class="{$$props.class} block rounded text-sm w-full p-2"
	/>
</label>
