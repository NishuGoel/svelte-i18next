<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	let mobileMenuOpen = $state(false);

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/products', label: 'Products' },
		{ href: '/services', label: 'Services' },
		{ href: '/about', label: 'About Us' },
		{ href: '/contact', label: 'Contact' }
	];

	function toggleMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMenu() {
		mobileMenuOpen = false;
	}

	function isActive(pathname: string, href: string): boolean {
		// Normalize away the base prefix and any trailing slash so links
		// highlight correctly whether deployed at the domain root or a subpath.
		let path = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
		if (path === '') path = '/';
		if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
		return path === href;
	}
</script>

<header class="fixed top-0 right-0 left-0 z-50 bg-white/95 shadow-sm backdrop-blur-sm">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-20 items-center justify-between">
			<!-- Logo -->
			<a href="{base}/" class="flex items-center gap-3" onclick={closeMenu}>
				<div
					class="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-700 text-lg font-bold text-white"
				>
					IA
				</div>
				<div>
					<div class="font-[Playfair_Display] text-xl font-bold text-gray-900">
						The Interior Aura
					</div>
					<div class="text-xs tracking-wider text-amber-700">FLOORING & INTERIORS</div>
				</div>
			</a>

			<!-- Desktop Nav -->
			<nav class="hidden items-center gap-8 md:flex">
				{#each navLinks as link}
					<a
						href="{base}{link.href}"
						class="text-sm font-medium transition-colors {isActive($page.url.pathname, link.href)
							? 'text-amber-700'
							: 'text-gray-600 hover:text-amber-700'}"
					>
						{link.label}
					</a>
				{/each}
				<a
					href="{base}/contact"
					class="rounded-lg bg-amber-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-amber-800"
				>
					Get Quote
				</a>
			</nav>

			<!-- Mobile Menu Button -->
			<button
				class="flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 md:hidden"
				onclick={toggleMenu}
				aria-label="Toggle menu"
			>
				{#if mobileMenuOpen}
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				{:else}
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if mobileMenuOpen}
		<div class="border-t border-gray-100 bg-white md:hidden">
			<nav class="mx-auto max-w-7xl space-y-1 px-4 py-4">
				{#each navLinks as link}
					<a
						href="{base}{link.href}"
						onclick={closeMenu}
						class="block rounded-lg px-4 py-3 text-sm font-medium transition-colors {isActive($page.url.pathname, link.href)
							? 'bg-amber-50 text-amber-700'
							: 'text-gray-600 hover:bg-gray-50'}"
					>
						{link.label}
					</a>
				{/each}
				<a
					href="{base}/contact"
					onclick={closeMenu}
					class="mt-2 block rounded-lg bg-amber-700 px-4 py-3 text-center text-sm font-semibold text-white"
				>
					Get Quote
				</a>
			</nav>
		</div>
	{/if}
</header>
