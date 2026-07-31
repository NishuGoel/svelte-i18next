<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import QuickBar from '$lib/components/QuickBar.svelte';
	import { lang } from '$lib/i18n';

	let { children } = $props();

	$effect(() => {
		document.documentElement.lang = $lang;
	});
</script>

<svelte:head>
	<title>The Interior Aura — Surfaces, considered</title>
</svelte:head>

<Header />
<main>
	{@render children()}
</main>
<Footer />
<QuickBar />
