<script>
	import { page } from '$app/stores';
	export let categories = [];
</script>

<aside class="bg-light-900 h-[calc(100vh-15vh)] p-5 overflow-y-scroll">
	<h3 class="text-xl ">Categories</h3>

	<ul class="mt-5 grid gap-2">
		{#each categories as { name } (name)}
			<a
				href="{$page.url.pathname}?category={name}"
				class="w-fit text-gray-600 capitalize hover:cursor-pointer hover:text-gray-900"
			>
				{name}
			</a>
		{/each}
	</ul>
</aside>

<style>
	aside::-webkit-scrollbar {
		width: 5px;
		background-color: gray;
	}
</style>
