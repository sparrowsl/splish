<script>
	// /** @type {Array<import("$lib/types").Category>} */
	export let categories = [];
</script>

<aside class="bg-light-900 h-[calc(100vh-15vh)] p-5">
	Aside link here
	<ul>
		{#each categories as category (category)}
			<li>{category.name || category}</li>
		{/each}
	</ul>
</aside>
