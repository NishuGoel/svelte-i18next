import { error } from '@sveltejs/kit';
import { productCategories } from '$lib/data/company';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const category = productCategories.find((c) => c.slug === params.slug);
	if (!category) {
		error(404, 'Product category not found');
	}
	return { category };
};

export const entries = () => productCategories.map((c) => ({ slug: c.slug }));

export const prerender = true;
