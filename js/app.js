let burger = document.querySelector('.burger');
let navLinksWrapper = document.querySelector('.nav-wrapper');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav a');
let mainSections = document.querySelectorAll('section');

[burger, navLinksWrapper].forEach((item) => {
	item.addEventListener('click', () => {
		burger.classList.toggle('open');
		navLinksWrapper.classList.toggle('hidden');
		sections.forEach((section) => section.classList.toggle('blurred-bg'));
	});
});

window.addEventListener('scroll', () => {
	if (burger.classList.contains('open')) {
		burger.classList.remove('open');
		navLinksWrapper.classList.add('hidden');
		sections.forEach((section) => section.classList.remove('blurred-bg'));
	}
});

window.addEventListener('click', (event) => {
	if (!event.target.matches('.open')) {
		burger.classList.remove('open');
		navLinksWrapper.classList.add('hidden');
		sections.forEach((section) => section.classList.remove('blurred-bg'));
	}
});

let lastId;
let cur = [];

window.addEventListener('scroll', () => {
	let fromTop = window.scrollY;

	navLinks.forEach((link) => {
		let section = document.querySelector(link.hash);

		if (
			section.offsetTop <= fromTop &&
			section.offsetTop + section.offsetHeight > fromTop
		) {
			link.classList.add('current');
		} else {
			link.classList.remove('current');
		}
	});
});

const swiper = new Swiper('.swiper-container', {
	loop: true,
	speed: 400,
	slidesPerView: 2,
	grabCursor: true,
	centeredSlides: true,
	spaceBetween: 20,
	observer: true,
	observeParents: true,

	breakpoints: {
		1200: { slidesPerView: 5 },
	},

	// If we need pagination
	// pagination: {
	// 	el: '.swiper-pagination',
	// },

	// Navigation arrows
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev',
	// },
});
