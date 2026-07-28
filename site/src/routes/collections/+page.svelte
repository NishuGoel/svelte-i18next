<script lang="ts">
	import { base } from '$app/paths';
	import { collections } from '$lib/data/company';
	import { t } from '$lib/i18n';
	import { reveal } from '$lib/actions/reveal';
</script>

<svelte:head>
	<title>The Collections — The Interior Aura</title>
	<meta
		name="description"
		content="Five surface collections — flooring, walls, ceilings, light & glass, carpets & textiles — sourced and crafted by hand in Gurugram, India."
	/>
</svelte:head>

<section class="page-hero">
	<div class="aura" aria-hidden="true"></div>
	<div class="wrap">
		<span class="eyebrow">{$t('rooms.eyebrow', 'The anatomy of a room')}</span>
		<h1>The <em>collections</em>.</h1>
		<p class="lede">
			{$t(
				'rooms.intro',
				'A considered interior is built outward in layers — the plane underfoot, the walls that frame it, the ceiling few think to dress, the light that moves through it, and the softness that makes it a home. We make each one, so the layers meet rather than merely coexist.'
			)}
		</p>
	</div>
</section>

<section class="section plaster tight">
	<div class="wrap">
		{#each collections as c, i}
			<article class="entry {i % 2 === 1 ? 'flip' : ''}" use:reveal>
				<div class="entry-media">
					<a href="{base}/collections/{c.slug}">
						<div class="plate">
							<div class="scene {c.scene}" aria-hidden="true"></div>
							<span class="plno {c.darkPlate ? '' : 'on-light'}">{c.plate}</span>
						</div>
					</a>
				</div>
				<div class="entry-body">
					<span class="layer-no">{c.layerNo}</span>
					<h3>{$t(`col.${c.slug}.title`, c.title)}</h3>
					<div class="term">{$t(`col.${c.slug}.term`, c.term)}</div>
					<p class="desc">{$t(`col.${c.slug}.desc`, c.description)}</p>
					<div class="kinds">{$t(`col.${c.slug}.kinds`, c.kinds)}</div>
					<a href="{base}/collections/{c.slug}" class="link-more">
						<span>{$t(`col.${c.slug}.more`, `Discover ${c.title.toLowerCase()}`)}</span>
						<span class="ln"></span>
					</a>
				</div>
			</article>
		{/each}
	</div>
</section>
