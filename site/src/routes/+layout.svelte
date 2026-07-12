<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>The Interior Aura | Premium Flooring & Interior Solutions in Gurugram</title>
	<meta
		name="description"
		content="The Interior Aura - Wholesale trader & retailer of vinyl flooring, wooden flooring, wall panels, wallpaper, carpets & blinds in Gurugram, Delhi NCR."
	/>
</svelte:head>

<div class="flex min-h-screen flex-col font-[Inter]">
	<Header />
	<main class="flex-1 pt-20">
		{@render children()}
	</main>
	<Footer />
</div>
