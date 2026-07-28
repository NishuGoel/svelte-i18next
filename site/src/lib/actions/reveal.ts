// Scroll-reveal: adds .in when the element enters the viewport (once).
export function reveal(node: HTMLElement) {
	node.classList.add('reveal');
	if (typeof IntersectionObserver === 'undefined') {
		node.classList.add('in');
		return;
	}
	const io = new IntersectionObserver(
		(entries) => {
			for (const e of entries) {
				if (e.isIntersecting) {
					node.classList.add('in');
					io.unobserve(node);
				}
			}
		},
		{ threshold: 0.14 }
	);
	io.observe(node);
	return {
		destroy() {
			io.disconnect();
		}
	};
}
