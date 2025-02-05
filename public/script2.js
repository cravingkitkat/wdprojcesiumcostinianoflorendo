const slider = document.getElementById('sliding') // Get nation container

addEventListener('scroll', slide) // Applies function upon scrolling
function slide () {
	let slidx
  let slidy
  	slidx = scrollY / (window.innerWidth + 70) * 100 // Find amount to translate on x-axis
    slidy = scrollY / window.innerHeight * 100 // Find amount to translate on y-axis
  
	slider.style.transform = `translate(-${slidx}vw,${slidy}vh)` // Translate container
}
addEventListener('scroll', invis) // Applies function upon scrolling
function invis () { 
  let elementHeight = 80 * window.innerHeight / 100
  let invisible = (elementHeight - scrollY) / elementHeight
  slider.style.opacity = invisible // lowers opacity upon scrolling
}

const glider = document.getElementById('wheee') // Get archon container

addEventListener('scroll', fire) // Applies function upon scrolling
function fire () {
	let slidex
  let slidey
  	slidex = scrollY  / (window.innerWidth + 70) * 100 // Find amount to translate on x-axis
    slidey = scrollY / window.innerHeight * 100 // Find amount to translate on y-axis
  
	glider.style.transform = `translate(-${slidex}vw,${slidey}vh)` // Translate container
} 

addEventListener('scroll', noSee) // Applies function upon scrolling
function noSee () {
  let eGrow = 80 * window.innerHeight / 100
  let cantSee = 1 - (eGrow - scrollY) / eGrow
  glider.style.opacity = cantSee // raises opacity upon scrolling
}

const gleader = document.getElementById('see') // Get archon image container

addEventListener('scroll', seeNo) // Applies function upon scrolling
function seeNo () {
  let eGrow = 80 * window.innerHeight / 100
  let cantSee = 1 - (eGrow - scrollY) / eGrow
  gleader.style.opacity = cantSee // raises opacity upon scrolling
}
