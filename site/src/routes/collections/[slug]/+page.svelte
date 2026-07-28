<script lang="ts">
	import { base } from '$app/paths';
	import { collections } from '$lib/data/company';
	import { t } from '$lib/i18n';
	import { reveal } from '$lib/actions/reveal';

	let { data } = $props();

	let c = $derived(data.collection);
	let others = $derived(collections.filter((o) => o.slug !== c.slug));
	let imgFailed = $state<Record<string, boolean>>({});
</script>

<svelte:head>
	<title>{c.title} — The Interior Aura</title>
	<meta name="description" content={c.description} />
</svelte:head>

<section class="page-hero">
	<div class="aura" aria-hidden="true"></div>
	<div class="wrap">
		<span class="eyebrow">{c.layerNo} {$t(`col.${c.slug}.term`, c.term)}</span>
		<h1><em>{$t(`col.${c.slug}.title`, c.title)}</em></h1>
		<p class="lede">{$t(`col.${c.slug}.desc`, c.description)}</p>
	</div>
</section>

<section class="section plaster tight">
	<div class="wrap">
		<div class="layers-head" style="margin-bottom:80px;" use:reveal>
			<div class="statement">
				<h2 style="font-size:clamp(30px,3.6vw,48px);">The pieces.</h2>
			</div>
			<p class="intro-p" style="border-top:1px solid var(--line-dark); padding-top:18px; font-size:13.5px; letter-spacing:.04em; color:var(--clay);">
				{$t(`col.${c.slug}.kinds`, c.kinds)}
			</p>
		</div>

		<div class="pieces">
			{#each c.products as p}
				<div class="piece" use:reveal>
					<div class="plate">
						{#if !imgFailed[p.image]}
							<img
								class="scene"
								src="{base}{p.image}"
								alt={p.name}
								loading="lazy"
								onerror={() => (imgFailed = { ...imgFailed, [p.image]: true })}
							/>
						{:else}
							<div class="scene {c.scene}" aria-hidden="true"></div>
						{/if}
					</div>
					<h4>{p.name}</h4>
					<p>{p.description}</p>
					<div class="price">{p.price} / {p.unit}</div>
				</div>
			{/each}
		</div>

		<p class="price-note">
			Prices are indicative starting rates and settle with design, quality and quantity — we
			will always quote the room, not the brochure. Samples and measurement at your doorstep,
			without charge.
		</p>

		<div style="margin-top:70px;">
			<a href="{base}/enquire" class="btn btn-ink">{$t('nav.enquire', 'Enquire')}</a>
		</div>
	</div>
</section>

<section class="section tight">
	<div class="wrap">
		<span class="eyebrow" style="display:block;margin-bottom:34px;">The other layers</span>
		<div style="display:flex; gap:40px 56px; flex-wrap:wrap;">
			{#each others as o}
				<a href="{base}/collections/{o.slug}" class="link-more">
					<span>{o.layerNo} — {$t(`col.${o.slug}.title`, o.title)}</span>
					<span class="ln"></span>
				</a>
			{/each}
		</div>
	</div>
</section>
