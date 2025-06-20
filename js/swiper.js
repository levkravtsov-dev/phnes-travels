const swiper = new Swiper('.testimonials__swiper', {
	slidesPerView: 1,
	loop: true,
	spaceBetween: 30,
	initialSlide: 2,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	speed: 1500,
	autoplay: {
		delay: 3000,
		disableOnInteraction: true,
	},
});

const thumbs = document.querySelectorAll('.testimonials__thumbnails img');

swiper.on('slideChange', () => {
	const index = swiper.realIndex;

	thumbs.forEach((img, i) => {
		img.classList.toggle('active', i === index);
	});
});
