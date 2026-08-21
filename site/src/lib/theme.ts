import { writable } from 'svelte/store';

export type Theme = 'dark' | 'light';

// The atelier design is dark-first; 'light' is the visitor's opt-in.
// app.html applies the stored choice before first paint to avoid a flash.
function initial(): Theme {
	if (typeof document !== 'undefined') {
		return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
	}
	return 'dark';
}

export const theme = writable<Theme>(initial());

export function setTheme(value: Theme) {
	theme.set(value);
	if (typeof document !== 'undefined') {
		if (value === 'light') {
			document.documentElement.dataset.theme = 'light';
		} else {
			delete document.documentElement.dataset.theme;
		}
		try {
			localStorage.setItem('theme', value);
		} catch {
			// storage unavailable (private mode etc.) — the choice just won't persist
		}
	}
}
