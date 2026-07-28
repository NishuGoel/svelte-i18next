import { error } from '@sveltejs/kit';
import { collections } from '$lib/data/company';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const collection = collections.find((c) => c.slug === params.slug);
	if (!collection) {
		error(404, 'Collection not found');
	}
	return { collection };
};

export const entries = () => collections.map((c) => ({ slug: c.slug }));

export const prerender = true;
