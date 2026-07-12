<script lang="ts">
	import { company, productCategories } from '$lib/data/company';
	import PageHero from '$lib/components/PageHero.svelte';

	let name = $state('');
	let phone = $state('');
	let email = $state('');
	let interest = $state('');
	let message = $state('');
	let submitted = $state(false);

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		// Static site: hand off the enquiry to the visitor's email client.
		const subject = encodeURIComponent(`Enquiry: ${interest || 'General'} — ${name}`);
		const body = encodeURIComponent(
			`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nInterested in: ${interest}\n\n${message}`
		);
		window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
		submitted = true;
	}
</script>

<svelte:head>
	<title>Contact Us | The Interior Aura</title>
	<meta
		name="description"
		content="Contact The Interior Aura for free quotes, doorstep sampling and installation services in Gurugram and Delhi NCR."
	/>
</svelte:head>

<PageHero
	title="Contact Us"
	subtitle="Get a free quote, book a doorstep sampling visit, or just ask a question — we're happy to help."
	breadcrumb="Contact"
/>

<section class="bg-white py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-12 lg:grid-cols-5">
			<!-- Contact Info -->
			<div class="lg:col-span-2">
				<h2 class="mb-8 font-[Playfair_Display] text-2xl font-bold text-gray-900">
					Get In Touch
				</h2>
				<div class="space-y-6">
					<div class="flex items-start gap-4">
						<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-xl">
							📍
						</div>
						<div>
							<h3 class="font-semibold text-gray-900">Visit Us</h3>
							<p class="mt-1 text-sm leading-relaxed text-gray-600">{company.address.full}</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-xl">
							✉️
						</div>
						<div>
							<h3 class="font-semibold text-gray-900">Email Us</h3>
							<p class="mt-1 text-sm text-gray-600">{company.email}</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-xl">
							🕒
						</div>
						<div>
							<h3 class="font-semibold text-gray-900">Business Hours</h3>
							<p class="mt-1 text-sm text-gray-600">{company.hours}</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-xl">
							🗺️
						</div>
						<div>
							<h3 class="font-semibold text-gray-900">Service Areas</h3>
							<p class="mt-1 text-sm text-gray-600">{company.serviceAreas.join(' · ')}</p>
						</div>
					</div>
				</div>

				<div class="mt-10 rounded-2xl bg-amber-50 p-6">
					<h3 class="mb-2 font-semibold text-amber-900">Doorstep Sampling</h3>
					<p class="text-sm leading-relaxed text-amber-800">
						Can't visit us? No problem. We bring physical samples to your home or office anywhere
						in Delhi NCR — completely free.
					</p>
				</div>
			</div>

			<!-- Contact Form -->
			<div class="lg:col-span-3">
				<div class="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg sm:p-10">
					{#if submitted}
						<div class="py-16 text-center">
							<div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
								✓
							</div>
							<h3 class="mb-2 font-[Playfair_Display] text-2xl font-bold text-gray-900">
								Almost There!
							</h3>
							<p class="mx-auto max-w-md text-gray-600">
								Your email app should have opened with your enquiry pre-filled. Just hit send and
								we'll get back to you within 24 hours.
							</p>
							<button
								class="mt-6 text-sm font-semibold text-amber-700 hover:underline"
								onclick={() => (submitted = false)}
							>
								← Back to form
							</button>
						</div>
					{:else}
						<h2 class="mb-6 font-[Playfair_Display] text-2xl font-bold text-gray-900">
							Request a Free Quote
						</h2>
						<form onsubmit={handleSubmit} class="space-y-5">
							<div class="grid gap-5 sm:grid-cols-2">
								<div>
									<label for="name" class="mb-1.5 block text-sm font-medium text-gray-700">
										Your Name *
									</label>
									<input
										id="name"
										type="text"
										required
										bind:value={name}
										placeholder="Full name"
										class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 focus:outline-none"
									/>
								</div>
								<div>
									<label for="phone" class="mb-1.5 block text-sm font-medium text-gray-700">
										Phone Number *
									</label>
									<input
										id="phone"
										type="tel"
										required
										bind:value={phone}
										placeholder="+91"
										class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 focus:outline-none"
									/>
								</div>
							</div>
							<div>
								<label for="email" class="mb-1.5 block text-sm font-medium text-gray-700">
									Email
								</label>
								<input
									id="email"
									type="email"
									bind:value={email}
									placeholder="you@example.com"
									class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 focus:outline-none"
								/>
							</div>
							<div>
								<label for="interest" class="mb-1.5 block text-sm font-medium text-gray-700">
									I'm Interested In
								</label>
								<select
									id="interest"
									bind:value={interest}
									class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 focus:outline-none"
								>
									<option value="">Select a category</option>
									{#each productCategories as category}
										<option value={category.title}>{category.title}</option>
									{/each}
									<option value="Installation Services">Installation Services</option>
									<option value="Other">Other</option>
								</select>
							</div>
							<div>
								<label for="message" class="mb-1.5 block text-sm font-medium text-gray-700">
									Message
								</label>
								<textarea
									id="message"
									rows="4"
									bind:value={message}
									placeholder="Tell us about your project — room size, preferred style, timeline..."
									class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 focus:outline-none"
								></textarea>
							</div>
							<button
								type="submit"
								class="w-full rounded-lg bg-amber-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-700/25 transition-all hover:bg-amber-800"
							>
								Send Enquiry
							</button>
						</form>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>
