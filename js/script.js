const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')
	document.body.classList.toggle('sticky-body')
}

navBtn.addEventListener('click', handleNav)

const handleNavLinks = () => {
	navBtn.classList.remove('is-active')
	navMobile.classList.remove('nav-mobile--active')
    document.body.classList.remove('sticky-body')
}

navMobile.addEventListener('click', handleNavLinks)

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()
