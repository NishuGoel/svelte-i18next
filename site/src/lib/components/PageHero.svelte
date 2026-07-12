<script lang="ts">
	let {
		title,
		subtitle = '',
		breadcrumb = ''
	}: { title: string; subtitle?: string; breadcrumb?: string } = $props();
</script>

<section class="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		{#if breadcrumb}
			<nav class="mb-4 text-sm text-gray-500">
				<a href="/" class="hover:text-amber-700">Home</a>
				<span class="mx-2">/</span>
				<span class="text-amber-700">{breadcrumb}</span>
			</nav>
		{/if}
		<h1 class="font-[Playfair_Display] text-4xl font-bold text-gray-900 sm:text-5xl">
			{title}
		</h1>
		{#if subtitle}
			<p class="mt-4 max-w-2xl text-lg text-gray-600">{subtitle}</p>
		{/if}
	</div>
</section>
