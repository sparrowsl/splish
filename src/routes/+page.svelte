<svelte:head>
	<title>Welcome | Splish 🛒</title>
</svelte:head>

<main>
	<section class="h-screen grid place-content-center">
		<i
			class="mx-auto animate-pulse text-7xl text-gray-700 healthicons:market-stall-outline"
		/>
		<h1 class="font-bold mb-1 text-3xl text-gray-800">Welcome to Splish 🛒</h1>
		<p class="text-center text-gray-500 italic">
			A small simple online marketplace
		</p>

		<div class="flex mx-auto mt-5 gap-8 items-center">
			<a href="/login" class="text-blue-500 hover:text-blue-700">Login</a>
			<a href="/register" class="text-blue-500 hover:text-blue-700">Register</a>
		</div>
	</section>
</main>
