<script lang="ts">
	import { base } from '$app/paths';
	import type { Product } from '$lib/data/company';

	let { product }: { product: Product } = $props();

	let imageFailed = $state(false);
</script>

<div class="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
	<div class="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-amber-100 to-orange-50">
		{#if !imageFailed}
			<img
				src={product.image}
				alt={product.name}
				loading="lazy"
				class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
				onerror={() => (imageFailed = true)}
			/>
		{:else}
			<div class="flex h-full flex-col items-center justify-center bg-gradient-to-br from-amber-100 to-orange-50 p-6 text-center">
				<svg class="mb-3 h-10 w-10 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
					/>
				</svg>
				<p class="text-sm font-medium text-amber-800">{product.name}</p>
			</div>
		{/if}
	</div>
	<div class="p-6">
		<h3 class="mb-2 text-lg font-bold text-gray-900 group-hover:text-amber-700">
			{product.name}
		</h3>
		<p class="text-sm leading-relaxed text-gray-600">{product.description}</p>
		<div class="mt-4 flex items-baseline gap-1.5">
			<span class="text-lg font-bold text-amber-700">{product.price}</span>
			<span class="text-xs text-gray-500">{product.unit}</span>
		</div>
		<a
			href="{base}/contact"
			class="mt-3 inline-flex items-center text-sm font-semibold text-amber-700 transition-transform group-hover:translate-x-1"
		>
			Enquire Now
			<svg class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
			</svg>
		</a>
	</div>
</div>
