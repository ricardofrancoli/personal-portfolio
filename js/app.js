let mainNavLinks = document.querySelectorAll('nav a');
let mainSections = document.querySelectorAll('section');

let lastId;
let cur = [];

window.addEventListener('scroll', (event) => {
	let fromTop = window.scrollY;

	mainNavLinks.forEach((link) => {
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
