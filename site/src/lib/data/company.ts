// Pricing note: the ₹40/sq ft carpet rate is confirmed from the company's public
// IndiaMART listing. All other prices are indicative Gurgaon-market starting rates
// ("Starting ₹X") — adjust them here as the business confirms its actual price list.

export const company = {
	name: 'The Interior Aura',
	tagline: 'Transforming Spaces, Elevating Living',
	description:
		'Established in 2022, The Interior Aura is a premier Wholesale Trader and Retailer of Wooden Flooring, Flooring Carpet, Wall Panels, Wallpapers, Blinds and more. We bring quality interior solutions to your doorstep.',
	established: 2022,
	address: {
		line1: '820/28, Jyoti Park, Gali No. 13',
		line2: 'Sector 7 Extension, Gurugram',
		state: 'Haryana',
		pincode: '122006',
		full: '820/28, Jyoti Park, Gali No. 13, Sector 7 Extension, Gurugram, Haryana – 122006'
	},
	gst: '06CENPG0052F2ZV',
	serviceAreas: ['Gurgaon', 'Faridabad', 'Manesar', 'Sohna', 'Delhi NCR'],
	phone: '+91-XXXXXXXXXX',
	email: 'info@theinterioraura.com',
	hours: 'Mon – Sat: 10:00 AM – 7:00 PM',
	highlights: [
		'Premium Quality Materials',
		'Doorstep Service with Physical Sampling',
		'Competitive Wholesale Pricing',
		'Expert Installation Services',
		'Wide Range of Designs & Patterns',
		'Serving Delhi NCR Since 2022'
	]
};

export interface Product {
	name: string;
	description: string;
	image: string;
	price: string;
	unit: string;
}

export interface ProductCategory {
	slug: string;
	title: string;
	subtitle: string;
	description: string;
	icon: string;
	products: Product[];
	features: string[];
}

export const productCategories: ProductCategory[] = [
	{
		slug: 'vinyl-flooring',
		title: 'Vinyl & SPC Flooring',
		subtitle: '100% Waterproof Flooring Solutions',
		description:
			'Our SPC (Stone Plastic Composite) and PVC Vinyl Flooring is 100% waterproof with easy click-lock installation. Available in wood, stone, and tile patterns, it offers a premium look at nominal charges — perfect for homes, offices, and commercial spaces.',
		icon: '🏠',
		products: [
			{
				name: 'SPC Wooden Flooring',
				description:
					'100% waterproof SPC flooring with click-lock system. Warm feel in winters, easy installation. Available in 4mm-8mm thickness.',
				image: '/images/spc-wooden.jpg',
				price: 'Starting ₹90',
				unit: 'per sq ft'
			},
			{
				name: 'PVC Vinyl Flooring',
				description:
					'Durable PVC vinyl in plank and roll formats with realistic wood and stone textures. Ideal for high-traffic areas.',
				image: '/images/pvc-vinyl.jpg',
				price: 'Starting ₹35',
				unit: 'per sq ft'
			},
			{
				name: 'PVC Flooring Planks',
				description:
					'Easy-to-install PVC planks with self-adhesive or click-lock options. Perfect for quick renovations.',
				image: '/images/pvc-planks.jpg',
				price: 'Starting ₹45',
				unit: 'per sq ft'
			},
			{
				name: 'Luxury Vinyl Tiles',
				description:
					'Premium luxury vinyl tiles that mimic natural stone and ceramic at a fraction of the cost.',
				image: '/images/lvt.jpg',
				price: 'Starting ₹65',
				unit: 'per sq ft'
			}
		],
		features: [
			'100% Waterproof',
			'Easy Click-Lock Installation',
			'Scratch & Stain Resistant',
			'Low Maintenance',
			'Available in 4mm to 8mm',
			'Wood, Stone & Tile Patterns'
		]
	},
	{
		slug: 'wooden-flooring',
		title: 'Wooden Flooring',
		subtitle: 'Premium Laminate & Engineered Wood',
		description:
			'We deal in high ranges of wooden flooring starting from 8mm to 12mm, in different patterns such as straight planks, herringbones, and chevron with high density and quality. It gives a premium and luxury look at very nominal charges.',
		icon: '🪵',
		products: [
			{
				name: 'Laminated Wooden Flooring',
				description:
					'High-density laminate flooring in 8mm to 12mm thickness. Available in oak, walnut, maple, and teak finishes.',
				image: '/images/laminate.jpg',
				price: 'Starting ₹75',
				unit: 'per sq ft'
			},
			{
				name: 'Herringbone Pattern Flooring',
				description: 'Classic herringbone pattern that adds elegance and character to any room.',
				image: '/images/herringbone.jpg',
				price: 'Starting ₹120',
				unit: 'per sq ft'
			},
			{
				name: 'Chevron Pattern Flooring',
				description: 'Sophisticated chevron pattern flooring for a modern, high-end look.',
				image: '/images/chevron.jpg',
				price: 'Starting ₹120',
				unit: 'per sq ft'
			},
			{
				name: 'Wooden Deck Flooring',
				description:
					'Weather-resistant deck flooring for balconies, terraces, and outdoor spaces.',
				image: '/images/deck.jpg',
				price: 'Starting ₹180',
				unit: 'per sq ft'
			}
		],
		features: [
			'8mm to 12mm Thickness',
			'High Density & Durability',
			'Planks, Herringbone & Chevron',
			'Premium Oak, Walnut & Teak Finishes',
			'AC3 to AC5 Wear Rating',
			'Professional Installation Available'
		]
	},
	{
		slug: 'wall-decor',
		title: 'Wall Panels & Wallpaper',
		subtitle: 'Complete Wall Transformation Solutions',
		description:
			'Transform your walls with our premium range of PVC and WPC wall panels, plus wallpapers in multiple qualities and designs at reasonable prices — brand, non-brand, and fully customised options in PVC, vinyl backing, and HD.',
		icon: '🎨',
		products: [
			{
				name: 'PVC & WPC Wall Panels',
				description:
					'Lightweight, waterproof panels in wood-grain, fluted, and 3D designs. Ideal for feature walls, bathrooms, and kitchens.',
				image: '/images/pvc-panels.jpg',
				price: 'Starting ₹60',
				unit: 'per sq ft'
			},
			{
				name: 'PVC Designer Wallpaper',
				description:
					'Premium PVC wallpapers in floral, geometric, and abstract patterns. Washable and long-lasting.',
				image: '/images/pvc-wallpaper.jpg',
				price: 'Starting ₹1,500',
				unit: 'per roll'
			},
			{
				name: 'HD & Vinyl Wallpaper',
				description:
					'High-definition printed and heavy-duty vinyl-backed wallpapers, ideal for homes and commercial spaces alike.',
				image: '/images/hd-wallpaper.jpg',
				price: 'Starting ₹2,200',
				unit: 'per roll'
			},
			{
				name: 'Customized Wallpaper',
				description:
					'Get wallpapers printed with your own designs, photos, or branding. Perfect for offices and feature walls.',
				image: '/images/custom-wallpaper.jpg',
				price: 'Starting ₹80',
				unit: 'per sq ft'
			}
		],
		features: [
			'Water & Moisture Resistant Panels',
			'Brand & Non-Brand Wallpapers',
			'Custom Design Printing',
			'Washable & Stain Resistant',
			'Termite & Insect Proof Panels',
			'Professional Installation'
		]
	},
	{
		slug: 'carpets',
		title: 'Carpets & Mats',
		subtitle: 'Designer Carpets, Tiles & Rolls',
		description:
			'We offer different types of carpet tiles and rolls for commercial and residential usage at reasonable prices. Our range includes nylon, polypropylene, and printed floor carpets — with both material and installation provided.',
		icon: '🧶',
		products: [
			{
				name: 'Nylon Floor Carpet',
				description:
					'Matte-finish nylon carpet for homes and offices — our most popular everyday option.',
				image: '/images/carpet-mats.jpg',
				price: '₹40',
				unit: 'per sq ft'
			},
			{
				name: 'Polypropylene Floor Carpet',
				description:
					'Stain-resistant polypropylene carpets ideal for high-traffic commercial spaces.',
				image: '/images/polypropylene.jpg',
				price: 'Starting ₹45',
				unit: 'per sq ft'
			},
			{
				name: 'Designer Printed Carpet',
				description:
					'Beautiful printed carpets with floral, geometric, and contemporary patterns.',
				image: '/images/printed-carpet.jpg',
				price: 'Starting ₹55',
				unit: 'per sq ft'
			},
			{
				name: 'Carpet Tiles',
				description:
					'Modular carpet tiles for offices and commercial spaces. Easy to install and replace individual tiles.',
				image: '/images/carpet-tiles.jpg',
				price: 'Starting ₹55',
				unit: 'per sq ft'
			}
		],
		features: [
			'Tiles & Roll Options',
			'Commercial & Residential Use',
			'Stain Resistant Materials',
			'Wide Pattern Selection',
			'Material + Installation',
			'Reasonable Pricing'
		]
	},
	{
		slug: 'blinds',
		title: 'Window Blinds',
		subtitle: 'Roller, Vertical, Venetian & Zebra Blinds',
		description:
			'We deal in every type of window blinds — roller blinds, vertical blinds, roman blinds, wooden blinds, venetian blinds, and zebra blinds — with custom sizing for a perfect fit in any window.',
		icon: '🪟',
		products: [
			{
				name: 'Window Roller Blinds',
				description:
					'Classic roller blinds in blackout, sunscreen, and translucent fabrics. Custom sizes available.',
				image: '/images/roller-blinds.jpg',
				price: 'Starting ₹90',
				unit: 'per sq ft'
			},
			{
				name: 'Vertical Blinds',
				description:
					'Vertical blinds perfect for large windows and sliding doors. Available in fabric and PVC.',
				image: '/images/vertical-blinds.jpg',
				price: 'Starting ₹85',
				unit: 'per sq ft'
			},
			{
				name: 'Venetian & Wooden Blinds',
				description:
					'Aluminium and wooden venetian blinds for precise light control and privacy.',
				image: '/images/venetian-blinds.jpg',
				price: 'Starting ₹150',
				unit: 'per sq ft'
			},
			{
				name: 'Zebra / Dual Blinds',
				description:
					'Modern zebra blinds with alternating sheer and opaque stripes for stylish light control.',
				image: '/images/zebra-blinds.jpg',
				price: 'Starting ₹140',
				unit: 'per sq ft'
			}
		],
		features: [
			'Custom Sizing Available',
			'Blackout & Sunscreen Options',
			'Roller, Roman, Wooden & Zebra',
			'Motorized Options Available',
			'UV Protection',
			'Easy Maintenance'
		]
	}
];

export const installationServices = [
	{
		name: 'Flooring Installation',
		description: 'Professional installation of vinyl, laminate, wooden, and SPC flooring.'
	},
	{
		name: 'Wallpaper Installation',
		description: 'Expert wallpaper contractors for residential and commercial spaces.'
	},
	{
		name: 'Glass Film Installation',
		description:
			'Frosted, decorative, and sun control glass film installation for offices and homes.'
	},
	{
		name: 'Vinyl Printing & Stickers',
		description: 'Custom vinyl printing and sticker application for branding and decoration.'
	},
	{
		name: 'Blind Installation',
		description: 'Professional measurement and installation of all types of window blinds.'
	},
	{
		name: 'Wall Panel Installation',
		description: 'Expert fitting of PVC and WPC wall panels for walls and ceilings.'
	}
];
