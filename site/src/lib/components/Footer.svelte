<script lang="ts">
	import { base } from '$app/paths';
	import { company, collections } from '$lib/data/company';
	import { t } from '$lib/i18n';
</script>

<footer class="site-footer">
	<div class="wrap">
		<div class="foot-top">
			<div class="foot-brand">
				<div class="mark">The Interior <b>Aura</b></div>
				<p>
					{$t(
						'foot.brandp',
						'Interior surfaces, considered — sourced and crafted by hand in India.'
					)}
				</p>
			</div>
			<div class="foot-cols">
				<div class="foot-col">
					<h4>{$t('foot.col1h', 'Collections')}</h4>
					{#each collections as c}
						<a href="{base}/collections/{c.slug}">{$t(`col.${c.slug}.title`, c.shortTitle)}</a>
					{/each}
				</div>
				<div class="foot-col">
					<h4>{$t('foot.col2h', 'House')}</h4>
					<a href="{base}/atelier">{$t('nav.atelier', 'The Atelier')}</a>
					<a href="{base}/#heritage">{$t('ft.eyebrow', 'The Heritage Edit')}</a>
					<a href="{base}/enquire">{$t('nav.enquire', 'Enquire')}</a>
					<a href="{base}/enquire">{$t('foot.trade', 'Trade & projects')}</a>
				</div>
				<div class="foot-col">
					<h4>{$t('foot.col3h', 'Reach us')}</h4>
					<span>{$t('foot.city', 'Gurugram, India')}</span>
					<a href={company.phoneHref}>{company.phone}</a>
					<a href="mailto:{company.email}">{company.email}</a>
				</div>
			</div>
		</div>
		<div class="foot-bottom">
			<span
				>© {new Date().getFullYear()} The Interior Aura.
				{$t('foot.rights', 'All rights reserved.')}</span
			>
			<span>GST {company.gst}</span>
		</div>
	</div>
</footer>
