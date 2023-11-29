<script>
	export let name = "";
	export let placeholder = "";
	export let value = "";
	export let required = false;
	export let label = "";
	export let id = "";
</script>

<label for={id || name} class="block">
	{#if label.trim()}<span class="text-sm text-gray-600">{label}</span>{/if}

	<textarea
		{name}
		{required}
		{placeholder}
		bind:value
		class="{$$props.class} block w-full min-h-20 rounded border p-2 text-sm"
	/>
</label>
