import { derived, writable } from 'svelte/store';

export type Lang = 'en' | 'de';

// English is the source text written directly in the markup; the dictionary
// only carries overrides. Keys missing from a dictionary fall back to the
// English default passed at the call site.
const dict: Record<Lang, Record<string, string>> = {
	en: {},
	de: {
		'nav.collections': 'Kollektionen',
		'nav.atelier': 'Das Atelier',
		'nav.heritage': 'Erbe',
		'nav.enquire': 'Anfragen',
		'hero.eyebrow': 'Oberflächen für Innenräume · Atelier seit 2022',
		'hero.h1.pre': 'Jeder Raum hat',
		'hero.h1.em': 'eine Aura.',
		'hero.lede':
			'Wir fertigen die Oberflächen, die sie tragen — Boden, Wände, Decken, Licht und die weiche Schicht. Von Hand in Indien gefertigt, veredelt nach dem Maßstab der durchdachtesten Interieurs der Welt.',
		'hero.cta1': 'Kollektionen ansehen',
		'hero.cta2': 'Beratung vereinbaren',
		'hero.cap': 'Ein Raum, ganz komponiert — vom Boden bis zur Decke.',
		'prov.1.pre': 'Gefertigt in',
		'prov.1.b': 'Indien',
		'prov.2.pre': 'Veredelt',
		'prov.2.b': 'von Hand',
		'prov.3.pre': 'Geliefert & verlegt',
		'prov.3.b': 'mit Sorgfalt',
		'prov.4.pre': 'Bereit',
		'prov.4.b': 'für die Welt',
		'rooms.eyebrow': 'Die Anatomie eines Raumes',
		'rooms.h2': 'Ein Raum wird komponiert, nicht dekoriert.',
		'rooms.intro':
			'Ein durchdachtes Interieur entsteht in Schichten — die Fläche unter den Füßen, die Wände, die sie rahmen, die Decke, an die kaum jemand denkt, das Licht, das ihn durchquert, und die Weichheit, die ihn zum Zuhause macht. Wir fertigen jede einzelne — damit die Schichten sich treffen, statt nur nebeneinander zu bestehen.',
		'col.flooring.title': 'Böden',
		'col.flooring.term': '— unter den Füßen',
		'col.flooring.desc':
			'Die Fläche, auf der Sie leben — und die, nach der ein Raum zuerst beurteilt wird. Warm, ruhig und gemacht für eine Generation.',
		'col.flooring.kinds':
			'Mehrschicht- & Laminatparkett · SPC-Steinverbund · Luxus-Vinyl in Fliese & Diele · wasserfeste, matte Oberflächen',
		'col.flooring.more': 'Böden entdecken',
		'col.walls.title': 'Wände',
		'col.walls.term': '— die vertikale Ebene',
		'col.walls.desc':
			'Wo ein Raum seinen Charakter findet. Vom kaum Sichtbaren bis zum unverkennbar Opulenten — gefertigt für Ihre Wand und Ihre Stimmung.',
		'col.walls.kinds':
			'Designer- & Importtapeten · PVC- & WPC-Paneele · Charcoal- & Lamellenpaneele · individuelle und royale Muster',
		'col.walls.more': 'Wände entdecken',
		'col.ceilings.title': 'Decken',
		'col.ceilings.term': '— die fünfte Wand',
		'col.ceilings.desc':
			'Die Oberfläche, die die meisten Räume vergessen. Gut gestaltet, ist sie der Unterschied zwischen einem Raum und einer Inszenierung.',
		'col.ceilings.kinds':
			'PVC- & WPC-Deckenpaneele · dekorative abgehängte Decken · Rastersysteme · gestaltete Deckenarbeiten',
		'col.ceilings.more': 'Decken entdecken',
		'col.light-glass.title': 'Licht & Glas',
		'col.light-glass.term': '— gefiltertes Licht',
		'col.light-glass.desc':
			'Wie ein Raum atmet. Wir formen das Tageslicht — wir mildern, beschatten und rahmen es — damit die Oberflächen darunter im besten Licht erscheinen.',
		'col.light-glass.kinds':
			'Roll-, Zebra-, Jalousie- & Holzrollos · Sonnenschutz-, Milchglas- & Dekorfolien · Fensterfolien',
		'col.light-glass.more': 'Licht & Glas entdecken',
		'col.carpets.title': 'Teppiche & Textilien',
		'col.carpets.short': 'Teppiche',
		'col.carpets.term': '— die weiche Schicht',
		'col.carpets.desc':
			'Die letzte Schicht — und die, die man spürt. Wärme, Ruhe und Textur, die aus einem fertigen Raum ein bewohntes Zuhause machen.',
		'col.carpets.kinds':
			'Designer- & bedruckte Teppiche · modulare Teppichfliesen · Auslegeware · handgewebte Bodenstücke',
		'col.carpets.more': 'Teppiche entdecken',
		'at.pl': 'Pl. 07 — Das Atelier, Gurugram',
		'at.cap': 'Wo Oberflächen von Hand beschafft und veredelt werden.',
		'at.eyebrow': 'Das Atelier · Gurugram, Indien',
		'at.h2.1': 'Von Hand gefertigt —',
		'at.h2.2': 'von Menschen, die das Material kennen.',
		'at.p1':
			'Unsere Werkstatt in Gurugram bewahrt das Wissen, das Maschinen und Marktplätze einebnen — wie eine Oberfläche altert, wie ein Muster auf einer Wand sitzt, wie man das Opulente mühelos wirken lässt. Es ist die Freiheit, etwas Durchdachtes zu schaffen, und die Disziplin, es gut zu machen.',
		'at.p2':
			'Aus diesem einen Atelier beschaffen, veredeln und prüfen wir jede Oberfläche, bevor sie das Haus verlässt — für Zuhause in ganz Indien und bereit für die Welt darüber hinaus.',
		'at.m1': 'Atelier gegründet',
		'at.m2': 'Oberflächen-Kollektionen',
		'at.m3': 'Maßanfertigung auf Anfrage',
		'ft.eyebrow': 'Die Heritage-Edition',
		'ft.h2.pre': 'Ornament,',
		'ft.h2.em': 'bewohnbar',
		'ft.h2.post': 'gemacht.',
		'ft.p':
			'Von Hand veredelte Paneele, juwelenfarbene Tapeten und vergoldete Details aus Indiens dekorativen Traditionen — neu geschnitten für die Proportion und Zurückhaltung, die ein moderner Raum verlangt. Opulenz, in der man wirklich leben kann.',
		'ft.cta': 'Lookbook anfordern',
		'enq.eyebrow': 'Anfrage',
		'enq.h2': 'Beginnen Sie mit einem Gespräch.',
		'enq.intro':
			'Erzählen Sie uns vom Raum und vom Gefühl, das Sie suchen. Wir melden uns mit Mustern, Beratung und einer ehrlichen Einschätzung — ob für eine einzelne Wand oder ein ganzes Zuhause.',
		'enq.role1': 'Indien · Atelier & Bestellungen',
		'enq.addr1': 'The Interior Aura, Sector 7 Extension, Gurugram, Haryana 122006, Indien',
		'enq.role2': 'Projekte & internationale Anfragen',
		'enq.studio': 'Das Studio',
		'enq.studiodesc': 'Für Handel, größere Projekte und Lieferung über Indien hinaus.',
		'form.name': 'Name',
		'form.phone': 'Telefon (optional)',
		'form.email': 'E-Mail',
		'form.location': 'Standort',
		'form.loc1': 'Indien',
		'form.loc2': 'Europa',
		'form.loc3': 'Anderswo',
		'form.interest': 'Interesse an',
		'form.int.heritage': 'Heritage-Edition / Maßanfertigung',
		'form.int.trade': 'Handel & Projekte',
		'form.about': 'Über den Raum',
		'form.ph': 'Raum, ungefähre Größe, das gewünschte Gefühl, ein etwaiger Termin …',
		'form.send': 'Anfrage senden',
		'form.note': 'Wir antworten innerhalb von zwei Werktagen.',
		'foot.brandp': 'Oberflächen für Innenräume, mit Bedacht — von Hand in Indien gefertigt.',
		'foot.col1h': 'Kollektionen',
		'foot.col2h': 'Das Haus',
		'foot.trade': 'Handel & Projekte',
		'foot.col3h': 'Kontakt',
		'foot.city': 'Gurugram, Indien',
		'foot.rights': 'Alle Rechte vorbehalten.',
		'msg.thanks': 'Vielen Dank, {name}. Wir melden uns innerhalb von zwei Werktagen.',
		'msg.validate': 'Bitte geben Sie Namen und E-Mail an, damit wir antworten können.',
		'quick.wa': 'Per WhatsApp schreiben',
		'quick.call': 'Anrufen',
		'dir.eyebrow': 'Direkt zum Ziel',
		'cmp.eyebrow': 'Die Wahl, leicht gemacht',
		'cmp.h2': 'Welcher Boden passt zu Ihrem Raum?',
		'cmp.intro':
			'Vier Wege zu einem schönen Boden — nebeneinander gestellt, damit Sie in einer Minute wissen, wonach Sie fragen möchten. Den Rest klären wir mit Mustern bei Ihnen zu Hause.',
		'cmp.r1': 'Wasserfest',
		'cmp.r2': 'Gefühl unter den Füßen',
		'cmp.r3': 'Ideal für',
		'cmp.r4': 'Ab',
		'cmp.lam': 'Laminatparkett',
		'cmp.spc': 'SPC-Steinverbund',
		'cmp.lvt': 'Luxus-Vinyl',
		'cmp.pat': 'Fischgrät & Chevron',
		'cmp.lam.1': 'Spritzwassergeschützt',
		'cmp.lam.2': 'Warm, wie Holz',
		'cmp.lam.3': 'Schlaf- und Wohnräume',
		'cmp.spc.1': 'Vollständig wasserfest',
		'cmp.spc.2': 'Fest und ruhig',
		'cmp.spc.3': 'Küchen, Bäder, Vermietung',
		'cmp.lvt.1': 'Vollständig wasserfest',
		'cmp.lvt.2': 'Weich und leise',
		'cmp.lvt.3': 'Kinderzimmer, Büros',
		'cmp.pat.1': 'Spritzwassergeschützt',
		'cmp.pat.2': 'Warm, wie Holz',
		'cmp.pat.3': 'Repräsentative Räume',
		'faq.eyebrow': 'Gut zu wissen',
		'faq.h2': 'Fragen, ehrlich beantwortet.',
		'faq.q1': 'Wo liefern und verlegen Sie?',
		'faq.a1':
			'In Gurgaon, Faridabad, Manesar, Sohna und im gesamten Raum Delhi NCR — Material und Verlegung aus einer Hand. Für Projekte außerhalb Indiens schreiben Sie an hello@theinterioraura.com.',
		'faq.q2': 'Ist die Musterberatung wirklich kostenlos?',
		'faq.a2':
			'Ja. Wir kommen mit physischen Mustern zu Ihnen nach Hause oder ins Büro — Sie beurteilen das Material im Raum, in dem es leben wird. Ohne Kosten, ohne Verpflichtung.',
		'faq.q3': 'Enthalten die Preise die Verlegung?',
		'faq.a3':
			'Unsere Angebote sind Komplettpreise für den Raum — Material, Verlegung und Abschlussarbeiten. Die genannten „ab“-Preise sind Startpreise für das Material; das Angebot gilt dem Raum, nicht der Broschüre.',
		'faq.q4': 'Wie lange dauert die Verlegung?',
		'faq.a4':
			'Ein einzelner Raum ist meist an einem Tag fertig; ganze Wohnungen brauchen je nach Schichten zwei bis fünf Tage. Den genauen Zeitplan nennen wir mit dem Angebot.',
		'faq.q5': 'Fertigen Sie auch nach Maß?',
		'faq.a5':
			'Ja — bedruckte Tapeten nach Ihrem Motiv, gestaltete Decken, Heritage-Paneele. Ein Foto oder eine Skizze genügt als Anfang.',
		'faq.q6': 'Arbeiten Sie mit Händlern und Projekten?',
		'faq.a6':
			'Ja, wir beliefern Bauträger, Innenarchitekten und Gewerbeprojekte. Schreiben Sie an hello@theinterioraura.com — wir antworten innerhalb von zwei Werktagen.'
	}
};

const MSG_EN: Record<string, string> = {
	'msg.thanks': 'Thank you, {name}. We’ll be in touch within two working days.',
	'msg.validate': 'Please add your name and email so we can reply.'
};

export const lang = writable<Lang>('en');

/** `$t('key', 'English default')` — returns the active language's string. */
export const t = derived(
	lang,
	(l) =>
		(key: string, fallback: string): string =>
			l === 'en' ? (MSG_EN[key] ?? fallback) : (dict.de[key] ?? MSG_EN[key] ?? fallback)
);
