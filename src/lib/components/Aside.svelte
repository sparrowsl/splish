<script>
	/** @type {Array<string>} */
	export let categories = [];
</script>

<aside class="bg-light-900 h-[calc(100vh-15vh)] p-5">
	Aside link here
	<ul>
		{#each categories as category (category?.id)}
			<li>{category?.name}</li>
		{/each}
	</ul>
</aside>
