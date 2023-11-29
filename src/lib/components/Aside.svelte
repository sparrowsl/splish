<script>
	/** @type {Array<import("$lib/types").Category>} */
	export let categories = [];
</script>

<aside class="bg-light-500 h-[calc(100vh-15vh)] p-5">
	<ul class="grid gap-2">
		{#each categories as category (category.id)}
			<li class="text-sm capitalize">{category.name}</li>
		{/each}
	</ul>
</aside>
