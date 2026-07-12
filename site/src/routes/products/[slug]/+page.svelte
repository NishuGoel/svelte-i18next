<script lang="ts">
	import { productCategories } from '$lib/data/company';
	import PageHero from '$lib/components/PageHero.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';

	let { data } = $props();

	let category = $derived(data.category);
	let otherCategories = $derived(productCategories.filter((c) => c.slug !== category.slug));
</script>

<svelte:head>
	<title>{category.title} | The Interior Aura</title>
	<meta name="description" content={category.description} />
</svelte:head>

<PageHero title={category.title} subtitle={category.subtitle} breadcrumb={category.title} />

<!-- Description + Features -->
<section class="bg-white py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid items-start gap-12 lg:grid-cols-2">
			<div>
				<h2 class="mb-4 font-[Playfair_Display] text-2xl font-bold text-gray-900">
					About Our {category.title}
				</h2>
				<p class="text-lg leading-relaxed text-gray-600">{category.description}</p>
				<a
					href="/contact"
					class="mt-8 inline-flex rounded-lg bg-amber-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-700/25 transition-all hover:bg-amber-800"
				>
					Request Samples & Pricing
				</a>
			</div>
			<div class="rounded-2xl bg-gray-50 p-8">
				<h3 class="mb-6 text-lg font-bold text-gray-900">Key Features</h3>
				<ul class="grid gap-4 sm:grid-cols-2">
					{#each category.features as feature}
						<li class="flex items-center gap-3">
							<span
								class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700"
							>
								✓
							</span>
							<span class="text-sm text-gray-700">{feature}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Products Grid -->
<section class="bg-gray-50 py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="mb-10 font-[Playfair_Display] text-3xl font-bold text-gray-900">
			Our {category.title} Range
		</h2>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each category.products as product}
				<ProductCard {product} />
			{/each}
		</div>
		<p class="mt-8 text-xs text-gray-400">
			* Prices are indicative starting rates and vary by design, quality, and quantity. Contact
			us for an exact quote with free doorstep sampling.
		</p>
	</div>
</section>

<!-- Other Categories -->
<section class="bg-white py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="mb-10 font-[Playfair_Display] text-2xl font-bold text-gray-900">
			Explore Other Products
		</h2>
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
			{#each otherCategories as other}
				<a
					href="/products/{other.slug}"
					class="group flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
				>
					<span class="text-2xl">{other.icon}</span>
					<span class="text-sm font-semibold text-gray-700 group-hover:text-amber-700">
						{other.title}
					</span>
				</a>
			{/each}
		</div>
	</div>
</section>
