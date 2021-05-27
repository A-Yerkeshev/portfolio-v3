document.addEventListener('DOMContentLoaded', function() {
  let spinner = document.querySelector('.spinner');
  let continueBtn = document.querySelector('#continue-btn');

  spinner.style.opacity = 0;
  setTimeout(() => {
    spinner.style.display = 'none';
    continueBtn.style.display = 'inline-block';
  }, 1000)
  setTimeout(() => {
    continueBtn.style.opacity = 1;
  }, 1200)
})

