const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
const header = document.querySelector('.site-header');
const themeToggle = document.querySelector('.theme-toggle');

menuToggle.addEventListener('click', () => {
	const open = menuToggle.getAttribute('aria-expanded') === 'true';
	menuToggle.setAttribute('aria-expanded', String(!open));
	navigation.classList.toggle('is-open', !open);
});

const setTheme = (theme) => {
	document.body.dataset.theme = theme;
	themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
	themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
	localStorage.setItem('northstar-theme', theme);
};

themeToggle.addEventListener('click', () => {
	setTheme(document.body.dataset.theme === 'dark' ? 'light' : 'dark');
});

setTheme(localStorage.getItem('northstar-theme') || 'light');

const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 20);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const revealObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('is-visible');
			revealObserver.unobserve(entry.target);
		}
	});
}, { threshold: 0.12 });

document.querySelectorAll('section:not(.hero), .project, .service-row, .journal article').forEach((element) => {
	element.classList.add('reveal');
	revealObserver.observe(element);
});