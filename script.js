// responsive menu
const mobileMenu = document.querySelector('.header button')
mobileMenu.addEventListener("click", () => {
	const menu = document.querySelector('.header ul');
	const btn = document.querySelector('.header button');

	if(btn.innerText === 'MENU') {
		menu.style.display = 'block';
		btn.innerText = 'CLOSE';
	} else {
		menu.style.display = 'none';
		btn.innerText = 'MENU'
	}
});

// galerija
const rightBtn = document.querySelector('#right-btn');
const leftBtn = document.querySelector('#left-btn');
const pictures = document.querySelectorAll('.slider-images img');

let imgNum = 0;

rightBtn.addEventListener("click", () => {
	displayNone();
	imgNum++;

	if(imgNum === pictures.length) {
		imgNum = 0;
	}

	pictures[imgNum].style.display = 'block';

});

leftBtn.addEventListener("click", () => {
	displayNone();
	imgNum--;

	if(imgNum === -1) {
		imgNum = pictures.length - 1;
	}

	pictures[imgNum].style.display = 'block';
});

// Ova funkcija sakriva sve slike
const displayNone = () => {
	pictures.forEach((img) => {
		img.style.display = 'none';
	});
}

// portfolio
const portfolioSort = (button) => {
	const category = button.getAttribute('data-category');
	const portfolioItems = document.querySelectorAll('.portfolio-single-item');


	portfolioItems.forEach((item) => {
		item.style.display = 'none';
	});

	if(category === 'sve') {
		portfolioItems.forEach((item) => {
			item.style.display = 'block';
		});
	}

	portfolioItems.forEach((item) => {
		if(item.getAttribute('data-category').includes(category)) {
			item.style.display = 'block';
		}
	});
}

// otvaramo modal

const openModal = () => {
	const modalWindow = document.querySelector('.popup-modal');
	const overlay = document.querySelector('.overlay');

	modalWindow.style.display = 'block';
	overlay.style.display = 'block';
}

// zatvaramo modal

const closeModal = () => {
	const modalWindow = document.querySelector('.popup-modal');
	const overlay = document.querySelector('.overlay');

	modalWindow.style.display = 'none';
	overlay.style.display = 'none';
}