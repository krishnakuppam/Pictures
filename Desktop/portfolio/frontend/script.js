document.addEventListener('DOMContentLoaded', () => {
	// --- Words duplication + dynamic timing ---
	const inner = document.querySelector('.words-inner');
	if (inner) {
		const items = Array.from(inner.children);
		const count = items.length;
		if (count > 0 && !inner.dataset.duplicated) {
			items.forEach(i => inner.appendChild(i.cloneNode(true)));
			inner.dataset.duplicated = 'true';
		}

		// default seconds per unique word (smaller = faster)
		let secondsPerWord = 0.6;
		const parent = inner.closest('.words');
		if (parent && parent.dataset.secondsPerWord) {
			const spw = parseFloat(parent.dataset.secondsPerWord);
			if (!Number.isNaN(spw) && spw > 0) secondsPerWord = spw;
		}

		const duration = ((items.length || 1) * secondsPerWord).toFixed(2) + 's';
		inner.style.animationDuration = duration;
		inner.style.animationTimingFunction = inner.classList.contains('pause') ? ('steps(' + (items.length || 1) + ')') : 'linear';
	}

	// --- Mobile hamburger toggle ---
	const burger = document.querySelector('.burger');
	const navLinks = document.querySelector('.nav-links');
	if (burger && navLinks) {
		burger.addEventListener('click', (e) => {
			const isOpen = navLinks.classList.toggle('open');
			burger.classList.toggle('open', isOpen);
			burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
			e.stopPropagation();
		});

		// Close menu when clicking outside on small screens
		document.addEventListener('click', (e) => {
			if (window.innerWidth <= 700 && navLinks.classList.contains('open')) {
				if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
					navLinks.classList.remove('open');
					burger.classList.remove('open');
					burger.setAttribute('aria-expanded', 'false');
				}
			}
		});

		// Close on resize to larger screens
		window.addEventListener('resize', () => {
			if (window.innerWidth > 700 && navLinks.classList.contains('open')) {
				navLinks.classList.remove('open');
				burger.classList.remove('open');
				burger.setAttribute('aria-expanded', 'false');
			}
		});
	}
});
