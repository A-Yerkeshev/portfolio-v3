document.addEventListener('DOMContentLoaded', function() {
  const body = document.querySelector('body');
  const welcome = document.querySelector('.welcome');
  const spinner = document.querySelector('.spinner');
  const continueBtn = document.querySelector('#continue-btn');
  const view = document.querySelector('.view');

  // Replace spinner with continue button
  spinner.style.opacity = 0;
  setTimeout(() => {
    spinner.style.display = 'none';
    continueBtn.style.display = 'inline-block';
  }, 1000)
  setTimeout(() => {
    continueBtn.style.opacity = 1;
  }, 1200)

  // Remove welcome block on continue button click
  continueBtn.addEventListener('click', () => {
    view.classList.add('ng-enter');
    welcome.classList.add('ng-leave', 'ng-leave-active');
    view.classList.add('ng-enter-active');

    setTimeout(() => {
      welcome.classList.remove('ng-leave', 'ng-leave-active');
      view.classList.remove('ng-enter', 'ng-enter-active');
      body.style.overflowY = 'scroll';
      welcome.style.display = 'none';
    }, 2000)
  })
})

