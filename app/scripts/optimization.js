document.addEventListener('DOMContentLoaded', function() {

  // Animate welcome heading
  let heading = document.querySelectorAll('.w-char');

  heading.forEach((char, i) => {
    // Move each characted from the bottom
    setTimeout(() => {
      char.classList.remove('hidden');
    }, i*200)
  })
})
