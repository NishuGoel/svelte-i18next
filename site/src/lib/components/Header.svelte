<script lang="ts">
	import { base } from '$app/paths';
	import { lang, t, type Lang } from '$lib/i18n';

	let scrollY = $state(0);
	let menuOpen = $state(false);

	function setLang(l: Lang) {
		lang.set(l);
	}
</script>

<svelte:window bind:scrollY />

<header class="site-header {scrollY > 24 ? 'scrolled' : ''}">
	<div class="wrap bar">
		<a class="mark" href="{base}/" aria-label="The Interior Aura, home" onclick={() => (menuOpen = false)}>
			The Interior <b>Aura</b>
		</a>
		<div class="bar-right">
			<nav class="main" aria-label="Primary">
				<a href="{base}/collections">{$t('nav.collections', 'Collections')}</a>
				<a href="{base}/atelier">{$t('nav.atelier', 'The Atelier')}</a>
				<a href="{base}/#heritage">{$t('nav.heritage', 'Heritage')}</a>
				<a href="{base}/enquire" class="nav-cta">{$t('nav.enquire', 'Enquire')}</a>
			</nav>
			<div class="lang" role="group" aria-label="Language">
				<button type="button" aria-pressed={$lang === 'en'} onclick={() => setLang('en')}>EN</button>
				<span class="sep" aria-hidden="true"></span>
				<button type="button" aria-pressed={$lang === 'de'} onclick={() => setLang('de')}>DE</button>
			</div>
			<button
				class="menu-btn"
				aria-label="Menu"
				aria-expanded={menuOpen}
				onclick={() => (menuOpen = !menuOpen)}
			>
				<span></span><span></span>
			</button>
		</div>
	</div>
	<nav class="mobile-nav {menuOpen ? 'open' : ''}" aria-label="Mobile">
		<a href="{base}/collections" onclick={() => (menuOpen = false)}>{$t('nav.collections', 'Collections')}</a>
		<a href="{base}/atelier" onclick={() => (menuOpen = false)}>{$t('nav.atelier', 'The Atelier')}</a>
		<a href="{base}/#heritage" onclick={() => (menuOpen = false)}>{$t('nav.heritage', 'Heritage')}</a>
		<a href="{base}/enquire" onclick={() => (menuOpen = false)}>{$t('nav.enquire', 'Enquire')}</a>
	</nav>
</header>
