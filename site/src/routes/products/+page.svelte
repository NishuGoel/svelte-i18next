<script lang="ts">
	import { productCategories } from '$lib/data/company';
	import PageHero from '$lib/components/PageHero.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
</script>

<svelte:head>
	<title>Products & Services | The Interior Aura</title>
	<meta
		name="description"
		content="Explore our full range of vinyl flooring, wooden flooring, wall panels, wallpaper, carpets and blinds. Wholesale prices with installation across Delhi NCR."
	/>
</svelte:head>

<PageHero
	title="Products & Services"
	subtitle="Explore our complete range of premium interior products — from flooring and wall solutions to window treatments, all at wholesale prices."
	breadcrumb="Products"
/>

{#each productCategories as category, i}
	<section class="py-16 {i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-10 flex flex-wrap items-end justify-between gap-4">
				<div>
					<div class="mb-2 text-3xl">{category.icon}</div>
					<h2 class="font-[Playfair_Display] text-3xl font-bold text-gray-900">
						{category.title}
					</h2>
					<p class="mt-2 max-w-2xl text-gray-600">{category.subtitle}</p>
				</div>
				<a
					href="/products/{category.slug}"
					class="inline-flex items-center rounded-lg border-2 border-amber-700 px-5 py-2.5 text-sm font-semibold text-amber-700 transition-colors hover:bg-amber-700 hover:text-white"
				>
					View All {category.title}
					<svg class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</a>
			</div>
			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{#each category.products as product}
					<ProductCard {product} />
				{/each}
			</div>
		</div>
	</section>
{/each}

<!-- CTA -->
<section class="bg-amber-700 py-16">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-4 font-[Playfair_Display] text-3xl font-bold text-white">
			Can't Find What You're Looking For?
		</h2>
		<p class="mx-auto mb-8 max-w-2xl text-lg text-amber-100">
			We stock much more than what's listed here — including ceiling grids, false ceilings, sun
			control films, glass films and soffit panels. Reach out and we'll help you find it.
		</p>
		<a
			href="/contact"
			class="inline-flex rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-amber-700 transition-all hover:bg-amber-50"
		>
			Ask Us Anything
		</a>
	</div>
</section>
