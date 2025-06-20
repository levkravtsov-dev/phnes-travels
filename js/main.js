// fade for the each section
const fade = document.querySelectorAll('.section');

const fadeObserver = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				fadeObserver.unobserve(entry.target);
			}
		});
	},
	{
		threshold: 0.1, // срабатывает, когда 10% блока видно
	}
);

fade.forEach(section => fadeObserver.observe(section));

// burger menu
const burger = document.getElementById('burger');
const menu = document.querySelector('.header__list');
const overlay = document.getElementById('overlay');
const cross = document.getElementById('cross');

burger.addEventListener('click', () => {
	menu.classList.toggle('show');
	overlay.classList.toggle('show');
	cross.classList.toggle('show');
});

cross.addEventListener('click', () => {
	cross.classList.remove('show');
	menu.classList.remove('show');
	overlay.classList.remove('show');
});

// counter
const counters = document.querySelectorAll('.counter');
let countersStarted = false;

function animateCounter(el, target, duration = 2000) {
	const start = 0;
	const increment = target / (duration / 20);
	let current = start;

	const counterInterval = setInterval(() => {
		current += increment;
		if (current >= target) {
			el.textContent = target;
			clearInterval(counterInterval);
		} else {
			el.textContent = Math.ceil(current);
		}
	}, 20);
}

const counterObserver = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting && !countersStarted) {
				counters.forEach(counter => {
					const target = +counter.getAttribute('data-target');
					animateCounter(counter, target);
				});
				countersStarted = true; // Чтобы не запускалось снова
			}
		});
	},
	{
		threshold: 0.3,
	}
);

counters.forEach(counter => {
	counterObserver.observe(counter);
});
