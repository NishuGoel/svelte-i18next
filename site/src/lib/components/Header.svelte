<script lang="ts">
	import { base } from '$app/paths';
	import { lang, t, type Lang } from '$lib/i18n';
	import { theme, setTheme } from '$lib/theme';

	let scrollY = $state(0);
	let menuOpen = $state(false);

	function setLang(l: Lang) {
		lang.set(l);
	}

	function toggleTheme() {
		setTheme($theme === 'dark' ? 'light' : 'dark');
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
				class="theme-btn"
				type="button"
				onclick={toggleTheme}
				aria-label={$theme === 'dark'
					? $t('theme.light', 'Switch to light theme')
					: $t('theme.dark', 'Switch to dark theme')}
				title={$theme === 'dark'
					? $t('theme.light', 'Switch to light theme')
					: $t('theme.dark', 'Switch to dark theme')}
			>
				{#if $theme === 'dark'}
					<!-- sun -->
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
						<circle cx="12" cy="12" r="4.2" />
						<path
							stroke-linecap="round"
							d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7"
						/>
					</svg>
				{:else}
					<!-- moon -->
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M20.4 14.2A8.4 8.4 0 0 1 9.8 3.6a8.4 8.4 0 1 0 10.6 10.6z"
						/>
					</svg>
				{/if}
			</button>
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
