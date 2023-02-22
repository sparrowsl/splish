<script>
	export let disabled = false;
	export let classes = '';
	export let type = 'button';
</script>

<button
	{type}
	{disabled}
	on:click
	class="{classes} block rounded bg-gray-700 p-2 text-sm text-white"
>
	<slot>Click Me</slot>
</button>
