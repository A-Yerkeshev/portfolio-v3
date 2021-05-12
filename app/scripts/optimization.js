document.addEventListener('DOMContentLoaded', function() {

  // Animate welcome heading
  let heading = document.querySelectorAll('.w-char');
  let par = document.querySelector('.w-par');

  heading.forEach((char, i) => {
    // Move each character from the bottom
    setTimeout(() => {
      char.classList.remove('hidden');
    }, i*200)
  })

  // Appear welcome paragraph
  setTimeout(() => {
    par.classList.remove('hidden');
  }, 2200)
})
