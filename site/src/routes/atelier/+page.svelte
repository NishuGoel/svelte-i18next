<script lang="ts">
	import { base } from '$app/paths';
	import { company, services } from '$lib/data/company';
	import { t } from '$lib/i18n';
	import { reveal } from '$lib/actions/reveal';
</script>

<svelte:head>
	<title>The Atelier — The Interior Aura</title>
	<meta
		name="description"
		content="The Interior Aura atelier in Gurugram, India — where interior surfaces are sourced, finished and quality-checked by hand."
	/>
</svelte:head>

<section class="page-hero">
	<div class="aura" aria-hidden="true"></div>
	<div class="wrap">
		<span class="eyebrow">{$t('at.eyebrow', 'The Atelier · Gurugram, India')}</span>
		<h1>The <em>atelier</em>.</h1>
		<p class="lede">
			{$t(
				'at.p1',
				'Our workshop in Gurugram holds the knowledge that machines and marketplaces flatten — how a finish wears, how a pattern sits on a wall, how to make the ornate feel effortless. It is the freedom to make something considered, and the discipline to make it well.'
			)}
		</p>
	</div>
</section>

<!-- Story -->
<section class="section atelier tight">
	<div class="wrap">
		<div class="atelier-grid">
			<div use:reveal>
				<div class="plate">
					<div class="scene scene-warm" aria-hidden="true"></div>
					<span class="plno">{$t('at.pl', 'Pl. 07 — The Atelier, Gurugram')}</span>
					<span class="cap">{$t('at.cap', 'Where surfaces are sourced and finished by hand.')}</span>
				</div>
			</div>
			<div use:reveal>
				<h2>{$t('at.h2.1', 'Made by hand,')}<br />{$t('at.h2.2', 'by people who know the material.')}</h2>
				<p>
					{$t(
						'at.p2',
						'From that single atelier we source, finish and quality-check every surface before it leaves — for homes across India, and ready for the world beyond.'
					)}
				</p>
				<p>
					Established in {company.established} as a wholesale house for flooring, walls, ceilings,
					light and soft layers, we serve {company.serviceAreas.join(', ')} — with samples brought
					to your door, and every fit finished by our own hands.
				</p>
				<div class="marks">
					<div class="m"><div class="k">2022</div><div class="l">{$t('at.m1', 'Atelier established')}</div></div>
					<div class="m"><div class="k">5</div><div class="l">{$t('at.m2', 'Surface collections')}</div></div>
					<div class="m"><div class="k">∞</div><div class="l">{$t('at.m3', 'Bespoke, on request')}</div></div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- The way we work -->
<section class="section plaster tight">
	<div class="wrap">
		<div class="layers-head" style="margin-bottom:80px;" use:reveal>
			<div class="statement">
				<span class="eyebrow dim" style="display:block;margin-bottom:18px;">The way we work</span>
				<h2 style="font-size:clamp(32px,4vw,56px);">Delivered &amp; fitted, with care.</h2>
			</div>
			<p class="intro-p">
				A surface is only as good as its fit. Every commission moves through the same hands —
				from the first doorstep sample to the final finished edge.
			</p>
		</div>
		<div class="pieces" style="grid-template-columns:repeat(3,1fr); gap:44px 28px;">
			{#each services as s, i}
				<div class="piece" use:reveal>
					<span class="layer-no" style="font-family:var(--serif);font-style:italic;color:var(--bronze-d);font-size:15px;">
						{['i', 'ii', 'iii', 'iv', 'v', 'vi'][i]}.
					</span>
					<h4 style="margin-top:8px;">{s.name}</h4>
					<p>{s.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- House facts -->
<section class="section tight">
	<div class="wrap">
		<span class="eyebrow" style="display:block;margin-bottom:34px;">The house, on record</span>
		<div style="max-width:720px;">
			<div style="display:grid;grid-template-columns:200px 1fr;gap:14px 28px;font-size:14px;color:var(--ivory-dim);border-top:1px solid var(--line-soft);padding-top:24px;">
				<span style="letter-spacing:.18em;text-transform:uppercase;font-size:11px;color:var(--bronze);">Nature</span>
				<span>Wholesale house &amp; retailer of interior surfaces</span>
				<span style="letter-spacing:.18em;text-transform:uppercase;font-size:11px;color:var(--bronze);">Established</span>
				<span>{company.established}</span>
				<span style="letter-spacing:.18em;text-transform:uppercase;font-size:11px;color:var(--bronze);">Atelier</span>
				<span>{company.address.full}</span>
				<span style="letter-spacing:.18em;text-transform:uppercase;font-size:11px;color:var(--bronze);">GST</span>
				<span>{company.gst}</span>
				<span style="letter-spacing:.18em;text-transform:uppercase;font-size:11px;color:var(--bronze);">Serving</span>
				<span>{company.serviceAreas.join(' · ')}</span>
			</div>
		</div>
		<div style="margin-top:60px;">
			<a href="{base}/enquire" class="btn btn-solid">{$t('enq.h2', 'Begin with a conversation.')}</a>
		</div>
	</div>
</section>
