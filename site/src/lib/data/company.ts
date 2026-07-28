// Pricing note: the ₹40/sq ft nylon carpet rate is confirmed from the company's
// public IndiaMART listing. All other prices are indicative Gurgaon-market
// starting rates ("from ₹X") — adjust here as the business confirms its list.

export const company = {
	name: 'The Interior Aura',
	tagline: 'Surfaces, considered',
	description:
		'Interior surfaces, considered — flooring, walls, ceilings, light and soft layers, sourced and crafted by hand in India.',
	established: 2022,
	address: {
		line1: '820/28, Jyoti Park, Gali No. 13',
		line2: 'Sector 7 Extension, Gurugram',
		state: 'Haryana',
		pincode: '122006',
		full: 'The Interior Aura, Sector 7 Extension, Gurugram, Haryana 122006, India'
	},
	gst: '06CENPG0052F2ZV',
	serviceAreas: ['Gurgaon', 'Faridabad', 'Manesar', 'Sohna', 'Delhi NCR'],
	contactPerson: 'Saksham Goel',
	phone: '+91 80477 92861',
	phoneHref: 'tel:+918047792861',
	email: 'hello@theinterioraura.com',
	hours: 'Mon – Sat: 10:00 AM – 7:00 PM'
};

export interface Product {
	name: string;
	description: string;
	image: string;
	price: string;
	unit: string;
}

export interface Collection {
	slug: string;
	title: string;
	shortTitle: string;
	layerNo: string;
	plate: string;
	term: string;
	description: string;
	kinds: string;
	scene: 'scene-warm' | 'scene-clay' | 'scene-green' | 'scene-stone' | 'scene-soft';
	darkPlate: boolean;
	products: Product[];
}

export const collections: Collection[] = [
	{
		slug: 'flooring',
		title: 'Flooring',
		shortTitle: 'Flooring',
		layerNo: 'Layer i',
		plate: 'Pl. 02 — Flooring',
		term: '— underfoot',
		description:
			'The plane you live on, and the one a room is judged by first. Warm, quiet, and built to last a generation.',
		kinds:
			'Engineered & laminate wood · SPC stone-composite · luxury vinyl tile & plank · waterproof matte finishes',
		scene: 'scene-warm',
		darkPlate: true,
		products: [
			{
				name: 'Laminate wood',
				description:
					'High-density laminate in 8–12 mm — oak, walnut, maple and teak, in straight plank.',
				image: '/images/laminate.jpg',
				price: 'from ₹75',
				unit: 'sq ft'
			},
			{
				name: 'Herringbone & chevron',
				description: 'Patterned wood flooring, cut and laid for rooms that deserve ceremony.',
				image: '/images/herringbone.jpg',
				price: 'from ₹120',
				unit: 'sq ft'
			},
			{
				name: 'SPC stone-composite',
				description:
					'Fully waterproof stone-polymer planks with a click-lock fit. Warm underfoot, calm to live with.',
				image: '/images/spc-wooden.jpg',
				price: 'from ₹90',
				unit: 'sq ft'
			},
			{
				name: 'Luxury vinyl tile & plank',
				description:
					'Quiet, resilient vinyl in wood and stone readings — for hardworking rooms.',
				image: '/images/lvt.jpg',
				price: 'from ₹35',
				unit: 'sq ft'
			},
			{
				name: 'Deck flooring',
				description: 'Weathered-in wood decking for balconies, terraces and open air.',
				image: '/images/deck.jpg',
				price: 'from ₹180',
				unit: 'sq ft'
			}
		]
	},
	{
		slug: 'walls',
		title: 'Walls',
		shortTitle: 'Walls & wallpaper',
		layerNo: 'Layer ii',
		plate: 'Pl. 03 — Walls',
		term: '— the vertical plane',
		description:
			'Where a room finds its character. From the barely-there to the unmistakably ornate, made to your wall and your mood.',
		kinds:
			'Designer & imported wallpaper · PVC & WPC panelling · charcoal & louvered panels · custom and royal patterns',
		scene: 'scene-clay',
		darkPlate: false,
		products: [
			{
				name: 'Designer wallpaper',
				description:
					'Brand and imported papers — floral, geometric, jewel-toned. Washable, long-lived.',
				image: '/images/pvc-wallpaper.jpg',
				price: 'from ₹1,500',
				unit: 'roll'
			},
			{
				name: 'Custom-printed wallpaper',
				description: 'Your artwork, photograph or pattern, printed to the exact wall.',
				image: '/images/custom-wallpaper.jpg',
				price: 'from ₹80',
				unit: 'sq ft'
			},
			{
				name: 'PVC & WPC panelling',
				description:
					'Fluted, louvered and wood-grain panels — moisture-proof and made to meet cleanly.',
				image: '/images/pvc-panels.jpg',
				price: 'from ₹60',
				unit: 'sq ft'
			},
			{
				name: 'HD & vinyl-backed paper',
				description: 'Heavy-duty papers for commercial walls and high-touch rooms.',
				image: '/images/hd-wallpaper.jpg',
				price: 'from ₹2,200',
				unit: 'roll'
			}
		]
	},
	{
		slug: 'ceilings',
		title: 'Ceilings',
		shortTitle: 'Ceilings',
		layerNo: 'Layer iii',
		plate: 'Pl. 04 — Ceilings',
		term: '— the fifth wall',
		description:
			'The surface most rooms forget. Dressed well, it is the difference between a space and a setting.',
		kinds: 'PVC & WPC ceiling panels · decorative false ceilings · grid systems · feature ceiling work',
		scene: 'scene-green',
		darkPlate: true,
		products: [
			{
				name: 'PVC ceiling panels',
				description: 'Clean-lined, moisture-proof panels for kitchens, baths and verandas.',
				image: '/images/pvc-ceiling.jpg',
				price: 'from ₹65',
				unit: 'sq ft'
			},
			{
				name: 'WPC ceiling panels',
				description: 'Warm wood-composite ceilings with the depth of timber.',
				image: '/images/wpc-ceiling.jpg',
				price: 'from ₹150',
				unit: 'sq ft'
			},
			{
				name: 'Decorative false ceilings',
				description: 'Coves, trays and shadow lines — the quiet architecture overhead.',
				image: '/images/false-ceiling.jpg',
				price: 'from ₹85',
				unit: 'sq ft'
			},
			{
				name: 'Grid systems',
				description: 'Practical grid and tile ceilings for offices and commercial rooms.',
				image: '/images/ceiling-grid.jpg',
				price: 'from ₹55',
				unit: 'sq ft'
			}
		]
	},
	{
		slug: 'light-glass',
		title: 'Light & Glass',
		shortTitle: 'Light & glass',
		layerNo: 'Layer iv',
		plate: 'Pl. 05 — Light & Glass',
		term: '— light, filtered',
		description:
			'How a room breathes. We shape the daylight — softening, screening, framing it — so the surfaces beneath are seen at their best.',
		kinds:
			'Roller, zebra, venetian & wooden blinds · sun-control, frosted & decorative glass film · window films',
		scene: 'scene-stone',
		darkPlate: false,
		products: [
			{
				name: 'Roller blinds',
				description: 'Blackout, sunscreen and translucent fabrics, cut to the window.',
				image: '/images/roller-blinds.jpg',
				price: 'from ₹90',
				unit: 'sq ft'
			},
			{
				name: 'Zebra & dual blinds',
				description: 'Alternating sheer and opaque bands — light you can tune by hand.',
				image: '/images/zebra-blinds.jpg',
				price: 'from ₹140',
				unit: 'sq ft'
			},
			{
				name: 'Venetian & wooden blinds',
				description: 'Aluminium and timber slats for precise, warm light control.',
				image: '/images/venetian-blinds.jpg',
				price: 'from ₹150',
				unit: 'sq ft'
			},
			{
				name: 'Sun-control & frosted film',
				description: 'Garware sun films, frosted and decorative glass films, fitted in place.',
				image: '/images/glass-film.jpg',
				price: 'from ₹45',
				unit: 'sq ft'
			}
		]
	},
	{
		slug: 'carpets',
		title: 'Carpets & Textiles',
		shortTitle: 'Carpets',
		layerNo: 'Layer v',
		plate: 'Pl. 06 — Carpets & Textiles',
		term: '— the soft layer',
		description:
			'The final layer, and the one you feel. Warmth, hush and texture that turn a finished room into a lived-in one.',
		kinds:
			'Designer & printed carpets · modular carpet tiles · wall-to-wall · hand-loom floor pieces',
		scene: 'scene-soft',
		darkPlate: true,
		products: [
			{
				name: 'Nylon carpet, matte',
				description: 'The house staple — soft, even, everyday. Material and fitting included.',
				image: '/images/carpet-mats.jpg',
				price: '₹40',
				unit: 'sq ft'
			},
			{
				name: 'Designer printed carpet',
				description: 'Floral, geometric and contemporary patterns, printed deep.',
				image: '/images/printed-carpet.jpg',
				price: 'from ₹55',
				unit: 'sq ft'
			},
			{
				name: 'Carpet tiles',
				description: 'Modular tiles for offices — replace one, not the room.',
				image: '/images/carpet-tiles.jpg',
				price: 'from ₹55',
				unit: 'sq ft'
			},
			{
				name: 'Wall-to-wall & polypropylene',
				description: 'Full-room rolls in hardwearing fibres for busy floors.',
				image: '/images/polypropylene.jpg',
				price: 'from ₹45',
				unit: 'sq ft'
			}
		]
	}
];

export const services = [
	{
		name: 'Doorstep sampling',
		description:
			'We bring physical samples to your home or office, so you judge the material in the room it will live in.'
	},
	{
		name: 'Measurement & estimate',
		description: 'Precise measurement and an honest, all-inclusive estimate before any work begins.'
	},
	{
		name: 'Fitting & installation',
		description:
			'Flooring, wallpaper, panelling, ceilings, blinds and films — laid and finished by our own hands.'
	},
	{
		name: 'Custom & bespoke work',
		description:
			'Printed wallpaper from your artwork, feature ceilings, heritage panelling — made to the room.'
	},
	{
		name: 'Trade & projects',
		description:
			'Supply and fit-out for builders, designers and commercial projects across Delhi NCR.'
	},
	{
		name: 'Aftercare',
		description: 'Guidance on living with each surface, and repair or refit when you need us again.'
	}
];
