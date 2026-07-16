<script lang="ts">
	import { base } from '$app/paths';
	import { company, installationServices } from '$lib/data/company';
	import PageHero from '$lib/components/PageHero.svelte';

	const icons = ['🏠', '🎨', '🪟', '🖨️', '📐', '🧱'];

	const steps = [
		{
			title: 'Book a Free Visit',
			description:
				'Call or message us and we will schedule a doorstep visit at a time that suits you.'
		},
		{
			title: 'Physical Sampling',
			description:
				'We bring physical samples to your home or office so you can see and feel the material before deciding.'
		},
		{
			title: 'Measurement & Quote',
			description:
				'Our team takes precise measurements and gives you a transparent, all-inclusive quote.'
		},
		{
			title: 'Expert Installation',
			description:
				'Trained installers complete the job cleanly and quickly, with quality checks at every step.'
		}
	];
</script>

<svelte:head>
	<title>Installation Services | The Interior Aura</title>
	<meta
		name="description"
		content="Professional installation services for flooring, wallpaper, wall panels, blinds, glass films and vinyl printing across Gurgaon, Faridabad, Manesar, Sohna and Delhi NCR."
	/>
</svelte:head>

<PageHero
	title="Installation Services"
	subtitle="We don't just supply materials — our trained professionals install them too. Doorstep service with physical sampling across Delhi NCR."
	breadcrumb="Services"
/>

<!-- Services Grid -->
<section class="bg-white py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each installationServices as service, i}
				<div
					class="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
				>
					<div class="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-50 text-3xl">
						{icons[i]}
					</div>
					<h3 class="mb-2 text-lg font-bold text-gray-900">{service.name}</h3>
					<p class="text-sm leading-relaxed text-gray-600">{service.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- How It Works -->
<section class="bg-gray-50 py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-14 text-center">
			<h2 class="mb-4 font-[Playfair_Display] text-3xl font-bold text-gray-900">How It Works</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600">
				From first call to finished installation — a simple, transparent process.
			</p>
		</div>
		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each steps as step, i}
				<div class="relative rounded-2xl bg-white p-8 shadow-sm">
					<div
						class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-amber-700 text-lg font-bold text-white"
					>
						{i + 1}
					</div>
					<h3 class="mb-2 font-bold text-gray-900">{step.title}</h3>
					<p class="text-sm leading-relaxed text-gray-600">{step.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Service Areas -->
<section class="bg-white py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="rounded-3xl bg-gradient-to-br from-amber-700 to-amber-800 px-8 py-14 text-center sm:px-14">
			<h2 class="mb-4 font-[Playfair_Display] text-3xl font-bold text-white">Where We Serve</h2>
			<p class="mx-auto mb-8 max-w-2xl text-amber-100">
				Both material and installation are available across the entire Delhi NCR region, with
				doorstep service and physical sampling.
			</p>
			<div class="flex flex-wrap justify-center gap-3">
				{#each company.serviceAreas as area}
					<span class="rounded-full bg-white/15 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm">
						{area}
					</span>
				{/each}
			</div>
			<a
				href="{base}/contact"
				class="mt-10 inline-flex rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-amber-700 transition-all hover:bg-amber-50"
			>
				Book a Free Visit
			</a>
		</div>
	</div>
</section>
