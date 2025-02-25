const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav')

burger.addEventListener('click', () => {
	burger.classList.toggle('active')
	nav.classList.toggle('active')
})

const navLinks = document.querySelectorAll('.nav__link')

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		burger.classList.remove('active')
		nav.classList.remove('active')
	})
})
