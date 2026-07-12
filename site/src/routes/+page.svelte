<script lang="ts">
	import { company, productCategories } from '$lib/data/company';
</script>

<svelte:head>
	<title>The Interior Aura | Premium Flooring & Interior Solutions in Gurugram</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50">
	<div class="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<div>
				<div
					class="mb-4 inline-flex items-center rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800"
				>
					Est. {company.established} &middot; Gurugram, Haryana
				</div>
				<h1
					class="mb-6 font-[Playfair_Display] text-4xl leading-tight font-bold text-gray-900 sm:text-5xl lg:text-6xl"
				>
					{company.tagline}
				</h1>
				<p class="mb-8 max-w-lg text-lg leading-relaxed text-gray-600">
					{company.description}
				</p>
				<div class="flex flex-wrap gap-4">
					<a
						href="/products"
						class="rounded-lg bg-amber-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-700/25 transition-all hover:bg-amber-800 hover:shadow-xl"
					>
						Explore Products
					</a>
					<a
						href="/contact"
						class="rounded-lg border-2 border-gray-300 px-8 py-3.5 text-sm font-semibold text-gray-700 transition-all hover:border-amber-700 hover:text-amber-700"
					>
						Get Free Quote
					</a>
				</div>
			</div>
			<div class="relative">
				<div
					class="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-amber-200 to-amber-100 shadow-2xl"
				>
					<div class="flex h-full flex-col items-center justify-center p-8 text-center">
						<div class="mb-4 text-6xl">🏡</div>
						<p class="font-[Playfair_Display] text-2xl font-semibold text-amber-900">
							Premium Interiors
						</p>
						<p class="mt-2 text-amber-700">Flooring &middot; Walls &middot; Windows</p>
					</div>
				</div>
				<div class="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-lg">
					<div class="flex items-center gap-3">
						<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-2xl">
							✓
						</div>
						<div>
							<div class="text-sm font-semibold text-gray-900">Trusted by 500+</div>
							<div class="text-xs text-gray-500">Happy Customers</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Service Areas Banner -->
<section class="bg-amber-700 py-4">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-amber-100">
			<span class="font-semibold text-white">Serving:</span>
			{#each company.serviceAreas as area}
				<span class="flex items-center gap-1.5">
					<span class="h-1.5 w-1.5 rounded-full bg-amber-300"></span>
					{area}
				</span>
			{/each}
		</div>
	</div>
</section>

<!-- Product Categories Grid -->
<section class="bg-white py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-14 text-center">
			<h2 class="mb-4 font-[Playfair_Display] text-3xl font-bold text-gray-900 sm:text-4xl">
				Our Product Range
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600">
				From premium flooring to elegant wall solutions, we offer everything you need to
				transform your space.
			</p>
		</div>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each productCategories as category}
				<a
					href="/products/{category.slug}"
					class="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
				>
					<div class="mb-4 text-4xl">{category.icon}</div>
					<h3 class="mb-2 text-xl font-bold text-gray-900 group-hover:text-amber-700">
						{category.title}
					</h3>
					<p class="mb-4 text-sm text-gray-500">{category.subtitle}</p>
					<p class="line-clamp-3 text-sm leading-relaxed text-gray-600">
						{category.description}
					</p>
					<div
						class="mt-6 inline-flex items-center text-sm font-semibold text-amber-700 transition-transform group-hover:translate-x-1"
					>
						View Products
						<svg class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
						</svg>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Why Choose Us -->
<section class="bg-gray-50 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-14 text-center">
			<h2 class="mb-4 font-[Playfair_Display] text-3xl font-bold text-gray-900 sm:text-4xl">
				Why Choose The Interior Aura
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600">
				We combine quality materials, expert craftsmanship, and competitive pricing to deliver
				the best interior solutions in Delhi NCR.
			</p>
		</div>
		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each company.highlights as highlight, i}
				{@const icons = ['💎', '🚚', '💰', '🔧', '🎨', '📅']}
				{@const descriptions = [
					'We source only the finest materials from trusted manufacturers for lasting quality.',
					'Free doorstep visits with physical samples so you can see and feel before you buy.',
					'Direct wholesale pricing means you get premium products without the premium markup.',
					'Our trained professionals ensure flawless installation every time.',
					'Thousands of designs, patterns, and finishes to match every taste and decor.',
					'Proudly serving the Delhi NCR region with quality and trust since 2022.'
				]}
				<div class="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
					<div
						class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-2xl"
					>
						{icons[i]}
					</div>
					<div>
						<h3 class="mb-1 font-semibold text-gray-900">{highlight}</h3>
						<p class="text-sm text-gray-500">{descriptions[i]}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Installation CTA -->
<section class="bg-amber-700 py-20">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-4 font-[Playfair_Display] text-3xl font-bold text-white sm:text-4xl">
			Professional Installation Services
		</h2>
		<p class="mx-auto mb-8 max-w-2xl text-lg text-amber-100">
			From flooring to wallpaper, wall panels to blinds — our expert team handles it all. We
			provide doorstep service with physical sampling across Delhi NCR.
		</p>
		<div class="flex flex-wrap justify-center gap-4">
			<a
				href="/services"
				class="rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-amber-700 transition-all hover:bg-amber-50"
			>
				Our Services
			</a>
			<a
				href="/contact"
				class="rounded-lg border-2 border-white/50 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10"
			>
				Request a Callback
			</a>
		</div>
	</div>
</section>

<!-- Trust Section -->
<section class="bg-white py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<div>
				<h2 class="mb-4 font-[Playfair_Display] text-3xl font-bold text-gray-900 sm:text-4xl">
					Quality You Can Trust
				</h2>
				<p class="mb-6 text-lg leading-relaxed text-gray-600">
					At The Interior Aura, we believe your space deserves the best. Every product in our
					catalog is handpicked for quality, durability, and aesthetic appeal. Whether you're
					renovating a home or outfitting a commercial space, we have solutions that fit your
					vision and budget.
				</p>
				<div class="grid grid-cols-3 gap-6">
					<div class="text-center">
						<div class="text-3xl font-bold text-amber-700">500+</div>
						<div class="mt-1 text-sm text-gray-500">Happy Clients</div>
					</div>
					<div class="text-center">
						<div class="text-3xl font-bold text-amber-700">1000+</div>
						<div class="mt-1 text-sm text-gray-500">Projects Done</div>
					</div>
					<div class="text-center">
						<div class="text-3xl font-bold text-amber-700">50+</div>
						<div class="mt-1 text-sm text-gray-500">Product Brands</div>
					</div>
				</div>
			</div>
			<div class="grid grid-cols-2 gap-4">
				<div class="space-y-4">
					<div class="aspect-[3/4] rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 p-6">
						<div class="flex h-full flex-col items-center justify-center text-center">
							<div class="text-4xl">🪵</div>
							<p class="mt-2 text-sm font-medium text-amber-800">Wood Flooring</p>
						</div>
					</div>
					<div class="aspect-square rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 p-6">
						<div class="flex h-full flex-col items-center justify-center text-center">
							<div class="text-4xl">🎨</div>
							<p class="mt-2 text-sm font-medium text-orange-800">Wallpaper</p>
						</div>
					</div>
				</div>
				<div class="mt-8 space-y-4">
					<div class="aspect-square rounded-xl bg-gradient-to-br from-yellow-100 to-yellow-50 p-6">
						<div class="flex h-full flex-col items-center justify-center text-center">
							<div class="text-4xl">🧱</div>
							<p class="mt-2 text-sm font-medium text-yellow-800">Wall Panels</p>
						</div>
					</div>
					<div class="aspect-[3/4] rounded-xl bg-gradient-to-br from-rose-100 to-rose-50 p-6">
						<div class="flex h-full flex-col items-center justify-center text-center">
							<div class="text-4xl">🪟</div>
							<p class="mt-2 text-sm font-medium text-rose-800">Blinds</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Contact CTA -->
<section class="bg-gray-900 py-20">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-4 font-[Playfair_Display] text-3xl font-bold text-white sm:text-4xl">
			Ready to Transform Your Space?
		</h2>
		<p class="mx-auto mb-8 max-w-2xl text-lg text-gray-400">
			Get in touch with us for a free consultation and quote. We offer doorstep service with
			physical samples across {company.serviceAreas.join(', ')}.
		</p>
		<a
			href="/contact"
			class="inline-flex rounded-lg bg-amber-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-amber-600"
		>
			Contact Us Today
		</a>
	</div>
</section>
