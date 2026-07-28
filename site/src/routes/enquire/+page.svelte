<script lang="ts">
	import { company, collections } from '$lib/data/company';
	import { t, lang } from '$lib/i18n';

	let name = $state('');
	let phone = $state('');
	let email = $state('');
	let region = $state('India');
	let interest = $state('');
	let message = $state('');
	let sent = $state('');

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		if (!name.trim() || !email.trim()) {
			sent = $t('msg.validate', 'Please add your name and email so we can reply.');
			return;
		}
		// Static site: hand the enquiry to the visitor's email client.
		const subject = encodeURIComponent(`Enquiry: ${interest || 'General'} — ${name}`);
		const body = encodeURIComponent(
			`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nLocation: ${region}\nInterested in: ${interest}\n\n${message}`
		);
		window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
		sent = $t('msg.thanks', 'Thank you, {name}. We’ll be in touch within two working days.').replace(
			'{name}',
			name.split(' ')[0]
		);
	}
</script>

<svelte:head>
	<title>Enquire — The Interior Aura</title>
	<meta
		name="description"
		content="Begin with a conversation — samples, guidance and an honest estimate for flooring, walls, ceilings, light and soft layers."
	/>
</svelte:head>

<section class="page-hero">
	<div class="aura" aria-hidden="true"></div>
	<div class="wrap">
		<span class="eyebrow">{$t('enq.eyebrow', 'Enquire')}</span>
		<h1>{$t('enq.h2', 'Begin with a conversation.')}</h1>
		<p class="lede">
			{$t(
				'enq.intro',
				"Tell us about the room and the feeling you're after. We'll come back with samples, guidance and an honest estimate — whether it's a single wall or a whole home."
			)}
		</p>
	</div>
</section>

<section class="section plaster tight">
	<div class="wrap">
		<div class="enquire-grid">
			<div>
				<div class="contact-card" style="margin-top:0;">
					<span class="role">{$t('enq.role1', 'India · Atelier & orders')}</span>
					<h3>{company.contactPerson}</h3>
					<p>{$t('enq.addr1', company.address.full)}</p>
					<p style="margin-top:6px;"><a href={company.phoneHref}>{company.phone}</a></p>
				</div>
				<div class="contact-card">
					<span class="role">{$t('enq.role2', 'Projects & international enquiries')}</span>
					<h3>{$t('enq.studio', 'The studio')}</h3>
					<p>{$t('enq.studiodesc', 'For trade, larger projects and delivery beyond India.')}</p>
					<p style="margin-top:6px;"><a href="mailto:{company.email}">{company.email}</a></p>
				</div>
				<div class="contact-card">
					<span class="role">Hours</span>
					<h3 style="font-size:18px;">{company.hours}</h3>
					<p>Doorstep sampling across {company.serviceAreas.join(', ')} — without charge.</p>
				</div>
			</div>
			<div>
				<form class="enquiry" onsubmit={handleSubmit} novalidate>
					<div class="two">
						<div class="field">
							<label for="name">{$t('form.name', 'Name')}</label>
							<input id="name" name="name" type="text" bind:value={name} required />
						</div>
						<div class="field">
							<label for="phone">{$t('form.phone', 'Phone (optional)')}</label>
							<input id="phone" name="phone" type="tel" bind:value={phone} />
						</div>
					</div>
					<div class="two">
						<div class="field">
							<label for="email">{$t('form.email', 'Email')}</label>
							<input id="email" name="email" type="email" bind:value={email} required />
						</div>
						<div class="field">
							<label for="region">{$t('form.location', 'Location')}</label>
							<select id="region" name="region" bind:value={region}>
								<option value="India">{$t('form.loc1', 'India')}</option>
								<option value="Europe">{$t('form.loc2', 'Europe')}</option>
								<option value="Elsewhere">{$t('form.loc3', 'Elsewhere')}</option>
							</select>
						</div>
					</div>
					<div class="field">
						<label for="interest">{$t('form.interest', 'Interested in')}</label>
						<select id="interest" name="interest" bind:value={interest}>
							{#each collections as c}
								<option value={c.title}>{$t(`col.${c.slug}.title`, c.title)}</option>
							{/each}
							<option value="Heritage / bespoke">{$t('form.int.heritage', 'The Heritage Edit / bespoke')}</option>
							<option value="Trade & projects">{$t('form.int.trade', 'Trade & projects')}</option>
						</select>
					</div>
					<div class="field">
						<label for="msg">{$t('form.about', 'About the room')}</label>
						<textarea
							id="msg"
							name="msg"
							rows="4"
							bind:value={message}
							placeholder={$t('form.ph', "Room, rough size, the feeling you're after, any deadline…")}
						></textarea>
					</div>
					<button type="submit" class="btn btn-ink" style="justify-self:start;">
						{$t('form.send', 'Send enquiry')}
					</button>
					<p class="sent" role="status" aria-live="polite">{sent}</p>
					<p class="form-note">{$t('form.note', 'We reply within two working days.')}</p>
				</form>
			</div>
		</div>
	</div>
</section>
