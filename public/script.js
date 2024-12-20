const buttons = document.querySelectorAll('.circle-btn');

// Function to pause animations
function pauseAnimations() {
  buttons.forEach(button => {
    button.style.animationPlayState = 'paused'; // Pause animation
  });
}

// Function to resume animations
function resumeAnimations() {
  buttons.forEach(button => {
    button.style.animationPlayState = 'running'; // Resume animation
  });
}

// Add event listeners for hover effect
buttons.forEach(button => {
  button.addEventListener('mouseover', pauseAnimations); // Pause when hovering over a button
  button.addEventListener('mouseout', resumeAnimations); // Resume when mouse leaves the button
});