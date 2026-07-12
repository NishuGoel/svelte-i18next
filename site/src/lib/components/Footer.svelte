<script lang="ts">
	import { company, productCategories } from '$lib/data/company';
</script>

<footer class="bg-gray-900 text-gray-300">
	<!-- Main Footer -->
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
			<!-- Company Info -->
			<div class="lg:col-span-1">
				<div class="mb-4 flex items-center gap-3">
					<div
						class="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-700 text-lg font-bold text-white"
					>
						IA
					</div>
					<div class="font-[Playfair_Display] text-xl font-bold text-white">
						The Interior Aura
					</div>
				</div>
				<p class="mb-6 text-sm leading-relaxed text-gray-400">
					{company.description}
				</p>
			</div>

			<!-- Products -->
			<div>
				<h3 class="mb-4 text-sm font-semibold tracking-wider text-white uppercase">Products</h3>
				<ul class="space-y-3">
					{#each productCategories as category}
						<li>
							<a
								href="/products/{category.slug}"
								class="text-sm text-gray-400 transition-colors hover:text-amber-500"
							>
								{category.title}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Company -->
			<div>
				<h3 class="mb-4 text-sm font-semibold tracking-wider text-white uppercase">Company</h3>
				<ul class="space-y-3">
					<li>
						<a href="/about" class="text-sm text-gray-400 transition-colors hover:text-amber-500">
							About Us
						</a>
					</li>
					<li>
						<a href="/services" class="text-sm text-gray-400 transition-colors hover:text-amber-500">
							Installation Services
						</a>
					</li>
					<li>
						<a href="/products" class="text-sm text-gray-400 transition-colors hover:text-amber-500">
							All Products
						</a>
					</li>
					<li>
						<a href="/contact" class="text-sm text-gray-400 transition-colors hover:text-amber-500">
							Contact Us
						</a>
					</li>
				</ul>
			</div>

			<!-- Contact Info -->
			<div>
				<h3 class="mb-4 text-sm font-semibold tracking-wider text-white uppercase">Contact</h3>
				<ul class="space-y-4">
					<li class="flex items-start gap-3">
						<svg
							class="mt-0.5 h-5 w-5 shrink-0 text-amber-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
						<span class="text-sm text-gray-400">{company.address.full}</span>
					</li>
					<li class="flex items-start gap-3">
						<svg
							class="mt-0.5 h-5 w-5 shrink-0 text-amber-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<span class="text-sm text-gray-400">{company.hours}</span>
					</li>
					<li class="flex items-start gap-3">
						<svg
							class="mt-0.5 h-5 w-5 shrink-0 text-amber-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
						<span class="text-sm text-gray-400">{company.email}</span>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- Bottom Bar -->
	<div class="border-t border-gray-800">
		<div
			class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8"
		>
			<p class="text-sm text-gray-500">
				&copy; {new Date().getFullYear()} The Interior Aura. All rights reserved.
			</p>
			<p class="text-sm text-gray-500">GST: {company.gst}</p>
		</div>
	</div>
</footer>
