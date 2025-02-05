const slider = document.getElementById('sliding')

addEventListener('scroll', slide)
function slide () {
	let slidx
  let slidy
  	slidx = scrollY / (window.innerWidth + 70) * 100
    slidy = scrollY / window.innerHeight * 100
  
	slider.style.transform = `translate(-${slidx}vw,${slidy}vh)`
}
addEventListener('scroll', invis)
function invis () {
  let elementHeight = 80 * window.innerHeight / 100
  let invisible = (elementHeight - scrollY) / elementHeight
  slider.style.opacity = invisible
}

const glider = document.getElementById('wheee')

addEventListener('scroll', fire)
function fire () {
	let slidex
  let slidey
  	slidex = scrollY  / (window.innerWidth + 70) * 100
    slidey = scrollY / window.innerHeight * 100
  
	glider.style.transform = `translate(-${slidex}vw,${slidey}vh)`
} 

addEventListener('scroll', noSee)
function noSee () {
  let eGrow = 80 * window.innerHeight / 100
  let cantSee = 1 - (eGrow - scrollY) / eGrow
  glider.style.opacity = cantSee
}

const gleader = document.getElementById('see')

addEventListener('scroll', seeNo)
function seeNo () {
  let eGrow = 80 * window.innerHeight / 100
  let cantSee = 1 - (eGrow - scrollY) / eGrow
  gleader.style.opacity = cantSee
}
