<script lang="ts">
	import { base } from '$app/paths';
	import { collections } from '$lib/data/company';
	import { t } from '$lib/i18n';
	import { reveal } from '$lib/actions/reveal';
</script>

<svelte:head>
	<title>The Interior Aura — Surfaces, considered</title>
	<meta
		name="description"
		content="The Interior Aura — interior surfaces, considered. Flooring, walls, ceilings, light and soft layers, sourced and crafted by hand in India."
	/>
</svelte:head>

<!-- Hero -->
<section class="hero">
	<div class="aura" aria-hidden="true"></div>
	<div class="wrap">
		<div class="grid">
			<div>
				<span class="eyebrow">{$t('hero.eyebrow', 'Interior surfaces · Atelier since 2022')}</span>
				{#if $t('hero.h1.pre', 'Every room') === 'Every room'}
					<h1>Every room<br />has an <em>aura</em>.</h1>
				{:else}
					<h1>{$t('hero.h1.pre', 'Every room')}<br /><em>{$t('hero.h1.em', 'has an aura.')}</em></h1>
				{/if}
				<p class="lede">
					{$t(
						'hero.lede',
						"We make the surfaces that hold it — flooring, walls, ceilings, light and the soft layer — sourced and crafted by hand in India, finished to the standard of the world's most considered interiors."
					)}
				</p>
				<div class="hero-actions">
					<a href="{base}/collections" class="btn btn-solid">{$t('hero.cta1', 'View the collections')}</a>
					<a href="{base}/enquire" class="btn btn-line">{$t('hero.cta2', 'Book a consultation')}</a>
				</div>
			</div>
			<div use:reveal>
				<div class="plate">
					<div class="scene scene-hero" aria-hidden="true"></div>
					<span class="plno">Pl. 01</span>
					<span class="cap">{$t('hero.cap', 'A room composed in full — floor to ceiling.')}</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Provenance strip -->
<div class="prov">
	<div class="wrap">
		<div class="row">
			<span>{$t('prov.1.pre', 'Sourced & crafted in')} <b>{$t('prov.1.b', 'India')}</b></span>
			<span>{$t('prov.2.pre', 'Made & finished')} <b>{$t('prov.2.b', 'by hand')}</b></span>
			<span>{$t('prov.3.pre', 'Delivered & fitted')} <b>{$t('prov.3.b', 'with care')}</b></span>
			<span>{$t('prov.4.pre', 'Made')} <b>{$t('prov.4.b', 'to travel')}</b></span>
		</div>
	</div>
</div>

<!-- Collections directory — everything the house makes, one glance -->
<nav class="directory" aria-label={$t('dir.eyebrow', 'Go straight to')}>
	<div class="wrap" style="padding:0;">
		<div class="cells">
			{#each collections as c}
				<a href="{base}/collections/{c.slug}">
					<div class="no">{c.layerNo}</div>
					<div class="nm">{$t(`col.${c.slug}.title`, c.title)}</div>
					<div class="tm">{$t(`col.${c.slug}.term`, c.term).replace('— ', '')}</div>
				</a>
			{/each}
		</div>
	</div>
</nav>

<!-- Collections / the layers -->
<section class="section plaster" id="collections">
	<div class="wrap">
		<div class="layers-head" use:reveal>
			<div class="statement">
				<span class="eyebrow dim" style="display:block;margin-bottom:18px;"
					>{$t('rooms.eyebrow', 'The anatomy of a room')}</span
				>
				<h2>{$t('rooms.h2', 'A room is composed, not decorated.')}</h2>
			</div>
			<p class="intro-p">
				{$t(
					'rooms.intro',
					'A considered interior is built outward in layers — the plane underfoot, the walls that frame it, the ceiling few think to dress, the light that moves through it, and the softness that makes it a home. We make each one, so the layers meet rather than merely coexist.'
				)}
			</p>
		</div>

		{#each collections as c, i}
			<article class="entry {i % 2 === 1 ? 'flip' : ''}" use:reveal>
				<div class="entry-media">
					<div class="plate">
						<div class="scene {c.scene}" aria-hidden="true"></div>
						<span class="plno {c.darkPlate ? '' : 'on-light'}">{c.plate}</span>
					</div>
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

<!-- Choosing, made simple -->
<section class="section plaster tight" id="compare" style="border-top:1px solid var(--line-dark);">
	<div class="wrap">
		<div class="layers-head" style="margin-bottom:0;" use:reveal>
			<div class="statement">
				<span class="eyebrow dim" style="display:block;margin-bottom:18px;"
					>{$t('cmp.eyebrow', 'Choosing, made simple')}</span
				>
				<h2 style="font-size:clamp(32px,4.2vw,58px);">{$t('cmp.h2', 'Which floor suits your room?')}</h2>
			</div>
			<p class="intro-p">
				{$t(
					'cmp.intro',
					'Four ways to a beautiful floor — set side by side, so you know what to ask for within a minute. The rest we settle with samples, in your home.'
				)}
			</p>
		</div>
		<div class="compare-wrap" use:reveal>
			<table class="compare">
				<thead>
					<tr>
						<th></th>
						<th>{$t('cmp.lam', 'Laminate wood')}</th>
						<th>{$t('cmp.spc', 'SPC stone-composite')}</th>
						<th>{$t('cmp.lvt', 'Luxury vinyl')}</th>
						<th>{$t('cmp.pat', 'Herringbone & chevron')}</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>{$t('cmp.r1', 'Waterproof')}</th>
						<td>{$t('cmp.lam.1', 'Splash-resistant')}</td>
						<td><b>{$t('cmp.spc.1', 'Fully waterproof')}</b></td>
						<td><b>{$t('cmp.lvt.1', 'Fully waterproof')}</b></td>
						<td>{$t('cmp.pat.1', 'Splash-resistant')}</td>
					</tr>
					<tr>
						<th>{$t('cmp.r2', 'Feel underfoot')}</th>
						<td>{$t('cmp.lam.2', 'Warm, like wood')}</td>
						<td>{$t('cmp.spc.2', 'Firm and quiet')}</td>
						<td>{$t('cmp.lvt.2', 'Soft and silent')}</td>
						<td>{$t('cmp.pat.2', 'Warm, like wood')}</td>
					</tr>
					<tr>
						<th>{$t('cmp.r3', 'Best for')}</th>
						<td>{$t('cmp.lam.3', 'Bedrooms, living rooms')}</td>
						<td>{$t('cmp.spc.3', 'Kitchens, baths, rentals')}</td>
						<td>{$t('cmp.lvt.3', "Children's rooms, offices")}</td>
						<td>{$t('cmp.pat.3', 'Formal, considered rooms')}</td>
					</tr>
					<tr>
						<th>{$t('cmp.r4', 'From')}</th>
						<td class="from">₹75 / sq ft</td>
						<td class="from">₹90 / sq ft</td>
						<td class="from">₹35 / sq ft</td>
						<td class="from">₹120 / sq ft</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div style="margin-top:50px;" use:reveal>
			<a href="{base}/collections/flooring" class="link-more">
				<span>{$t('col.flooring.more', 'Discover flooring')}</span>
				<span class="ln"></span>
			</a>
		</div>
	</div>
</section>

<!-- The Atelier -->
<section class="section atelier" id="atelier">
	<div class="aura" aria-hidden="true" style="opacity:.6;"></div>
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
				<span class="eyebrow" style="display:block;margin-bottom:20px;"
					>{$t('at.eyebrow', 'The Atelier · Gurugram, India')}</span
				>
				<h2>{$t('at.h2.1', 'Made by hand,')}<br />{$t('at.h2.2', 'by people who know the material.')}</h2>
				<p>
					{$t(
						'at.p1',
						'Our workshop in Gurugram holds the knowledge that machines and marketplaces flatten — how a finish wears, how a pattern sits on a wall, how to make the ornate feel effortless. It is the freedom to make something considered, and the discipline to make it well.'
					)}
				</p>
				<p>
					{$t(
						'at.p2',
						'From that single atelier we source, finish and quality-check every surface before it leaves — for homes across India, and ready for the world beyond.'
					)}
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

<!-- The Heritage Edit -->
<section class="feature" id="heritage">
	<div class="scene-fill" aria-hidden="true"></div>
	<div class="wrap">
		<div class="inner" use:reveal>
			<span class="eyebrow">{$t('ft.eyebrow', 'The Heritage Edit')}</span>
			<h2 style="margin-top:18px;">
				{$t('ft.h2.pre', 'Ornament, made')} <em>{$t('ft.h2.em', 'livable')}</em>{$t('ft.h2.post', '.')}
			</h2>
			<p>
				{$t(
					'ft.p',
					"Hand-finished panelling, jewel-toned papers and gilded detail drawn from India's decorative traditions — re-cut for the proportion and restraint a modern room asks for. Opulence you can actually live in."
				)}
			</p>
			<a href="{base}/enquire" class="btn btn-solid">{$t('ft.cta', 'Request the lookbook')}</a>
		</div>
	</div>
</section>

<!-- Questions, answered -->
<section class="section plaster tight" id="faq">
	<div class="wrap">
		<div use:reveal>
			<span class="eyebrow dim" style="display:block;margin-bottom:18px;"
				>{$t('faq.eyebrow', 'Good to know')}</span
			>
			<h2 style="font-size:clamp(32px,4.2vw,58px); max-width:16ch;">
				{$t('faq.h2', 'Questions, answered honestly.')}
			</h2>
		</div>
		<div class="faq" style="margin-top:60px;" use:reveal>
			<details>
				<summary>{$t('faq.q1', 'Where do you deliver and install?')}<span class="ind">+</span></summary>
				<p class="ans">
					{$t(
						'faq.a1',
						'Across Gurgaon, Faridabad, Manesar, Sohna and the wider Delhi NCR — material and installation from one hand. For projects beyond India, write to hello@theinterioraura.com.'
					)}
				</p>
			</details>
			<details>
				<summary>{$t('faq.q2', 'Is doorstep sampling really free?')}<span class="ind">+</span></summary>
				<p class="ans">
					{$t(
						'faq.a2',
						'Yes. We bring physical samples to your home or office, so you judge the material in the room it will live in. No charge, no obligation.'
					)}
				</p>
			</details>
			<details>
				<summary>{$t('faq.q3', 'Do prices include installation?')}<span class="ind">+</span></summary>
				<p class="ans">
					{$t(
						'faq.a3',
						'Our quotes are all-inclusive for the room — material, fitting and finishing. The "from" rates you see are starting material rates; we will always quote the room, not the brochure.'
					)}
				</p>
			</details>
			<details>
				<summary>{$t('faq.q4', 'How long does fitting take?')}<span class="ind">+</span></summary>
				<p class="ans">
					{$t(
						'faq.a4',
						'Most single rooms are finished in a day; whole homes take two to five days depending on the layers involved. We confirm the schedule with your estimate.'
					)}
				</p>
			</details>
			<details>
				<summary>{$t('faq.q5', 'Can you make something bespoke?')}<span class="ind">+</span></summary>
				<p class="ans">
					{$t(
						'faq.a5',
						'Yes — wallpaper printed from your artwork, feature ceilings, heritage panelling. A photograph or a sketch is enough to begin.'
					)}
				</p>
			</details>
			<details>
				<summary>{$t('faq.q6', 'Do you work with trade and projects?')}<span class="ind">+</span></summary>
				<p class="ans">
					{$t(
						'faq.a6',
						'Yes — we supply and fit for builders, designers and commercial projects. Write to hello@theinterioraura.com; we reply within two working days.'
					)}
				</p>
			</details>
		</div>
		<div style="margin-top:56px;" use:reveal>
			<a href="{base}/enquire" class="btn btn-ink">{$t('nav.enquire', 'Enquire')}</a>
		</div>
	</div>
</section>
