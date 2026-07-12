<script lang="ts">
	import { company, productCategories } from '$lib/data/company';
	import PageHero from '$lib/components/PageHero.svelte';
</script>

<svelte:head>
	<title>About Us | The Interior Aura</title>
	<meta
		name="description"
		content="Established in 2022, The Interior Aura is a wholesale trader and retailer of flooring, wall panels, wallpapers, carpets and blinds based in Gurugram, Haryana."
	/>
</svelte:head>

<PageHero
	title="About The Interior Aura"
	subtitle="Your trusted partner for premium interior solutions in Gurugram and Delhi NCR."
	breadcrumb="About Us"
/>

<!-- Story -->
<section class="bg-white py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<div>
				<h2 class="mb-6 font-[Playfair_Display] text-3xl font-bold text-gray-900">Our Story</h2>
				<div class="space-y-4 text-lg leading-relaxed text-gray-600">
					<p>
						Established in {company.established}, <strong class="text-gray-900">The Interior Aura</strong>
						is a Wholesale Trader and Retailer of Wooden Flooring, Flooring Carpet, Wall Panels,
						Wallpapers, Blinds and more, based in Gurugram, Haryana.
					</p>
					<p>
						We believe that transforming a space shouldn't require a premium budget. That's why we
						deal directly at wholesale prices, bringing high-quality materials in thousands of
						designs and patterns — from straight planks and herringbone to chevron flooring, from
						designer wallpapers to custom blinds.
					</p>
					<p>
						What sets us apart is our doorstep service: we bring physical samples to your home or
						office, so you can see, touch, and compare materials in the exact light and setting
						where they'll live.
					</p>
				</div>
			</div>
			<div class="grid grid-cols-2 gap-4">
				<div class="rounded-2xl bg-amber-50 p-8 text-center">
					<div class="text-4xl font-bold text-amber-700">{company.established}</div>
					<div class="mt-2 text-sm text-gray-600">Established</div>
				</div>
				<div class="rounded-2xl bg-orange-50 p-8 text-center">
					<div class="text-4xl font-bold text-amber-700">{productCategories.length}+</div>
					<div class="mt-2 text-sm text-gray-600">Product Categories</div>
				</div>
				<div class="rounded-2xl bg-yellow-50 p-8 text-center">
					<div class="text-4xl font-bold text-amber-700">{company.serviceAreas.length}</div>
					<div class="mt-2 text-sm text-gray-600">Service Regions</div>
				</div>
				<div class="rounded-2xl bg-rose-50 p-8 text-center">
					<div class="text-4xl font-bold text-amber-700">500+</div>
					<div class="mt-2 text-sm text-gray-600">Happy Customers</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Values -->
<section class="bg-gray-50 py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="mb-14 text-center font-[Playfair_Display] text-3xl font-bold text-gray-900">
			What We Stand For
		</h2>
		<div class="grid gap-8 md:grid-cols-3">
			<div class="rounded-2xl bg-white p-8 text-center shadow-sm">
				<div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 text-3xl">
					💎
				</div>
				<h3 class="mb-3 text-lg font-bold text-gray-900">Quality First</h3>
				<p class="text-sm leading-relaxed text-gray-600">
					Every product is handpicked for durability, finish, and aesthetic appeal. We stand
					behind everything we sell.
				</p>
			</div>
			<div class="rounded-2xl bg-white p-8 text-center shadow-sm">
				<div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 text-3xl">
					🤝
				</div>
				<h3 class="mb-3 text-lg font-bold text-gray-900">Honest Pricing</h3>
				<p class="text-sm leading-relaxed text-gray-600">
					As wholesale traders, we cut out middlemen so you get a premium and luxury look at
					very nominal charges.
				</p>
			</div>
			<div class="rounded-2xl bg-white p-8 text-center shadow-sm">
				<div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 text-3xl">
					🚪
				</div>
				<h3 class="mb-3 text-lg font-bold text-gray-900">Doorstep Service</h3>
				<p class="text-sm leading-relaxed text-gray-600">
					Physical sampling at your doorstep, precise measurement, and professional installation
					— all handled by our own team.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Company Facts -->
<section class="bg-white py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
			<div class="bg-gray-900 px-8 py-6">
				<h2 class="font-[Playfair_Display] text-2xl font-bold text-white">Company Facts</h2>
			</div>
			<dl class="divide-y divide-gray-100">
				<div class="grid gap-1 px-8 py-5 sm:grid-cols-3">
					<dt class="text-sm font-semibold text-gray-500">Nature of Business</dt>
					<dd class="text-sm text-gray-900 sm:col-span-2">Wholesale Trader & Retailer</dd>
				</div>
				<div class="grid gap-1 px-8 py-5 sm:grid-cols-3">
					<dt class="text-sm font-semibold text-gray-500">Year of Establishment</dt>
					<dd class="text-sm text-gray-900 sm:col-span-2">{company.established}</dd>
				</div>
				<div class="grid gap-1 px-8 py-5 sm:grid-cols-3">
					<dt class="text-sm font-semibold text-gray-500">Registered Address</dt>
					<dd class="text-sm text-gray-900 sm:col-span-2">{company.address.full}</dd>
				</div>
				<div class="grid gap-1 px-8 py-5 sm:grid-cols-3">
					<dt class="text-sm font-semibold text-gray-500">GST Number</dt>
					<dd class="text-sm text-gray-900 sm:col-span-2">{company.gst}</dd>
				</div>
				<div class="grid gap-1 px-8 py-5 sm:grid-cols-3">
					<dt class="text-sm font-semibold text-gray-500">Service Areas</dt>
					<dd class="text-sm text-gray-900 sm:col-span-2">{company.serviceAreas.join(', ')}</dd>
				</div>
			</dl>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="bg-amber-700 py-16">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-4 font-[Playfair_Display] text-3xl font-bold text-white">
			Let's Build Something Beautiful Together
		</h2>
		<p class="mx-auto mb-8 max-w-2xl text-lg text-amber-100">
			Whether it's a single room or a full commercial project, we'd love to help.
		</p>
		<a
			href="/contact"
			class="inline-flex rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-amber-700 transition-all hover:bg-amber-50"
		>
			Get In Touch
		</a>
	</div>
</section>
