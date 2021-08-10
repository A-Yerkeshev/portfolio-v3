"use strict";

function expandImage(event) {
  const imageNode = event.currentTarget;
  const oldPath = imageNode.src;
  const newPath = '/images/main/'.concat(oldPath.substring(oldPath.lastIndexOf('/')+1));

  imageNode.removeAttribute('onload');
  imageNode.src = newPath;
}

document.addEventListener('DOMContentLoaded', (event) => {
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
  }, 1000);
  setTimeout(() => {
    continueBtn.style.opacity = 1;
  }, 1200);

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
    }, 2000);
  });
});


window.addEventListener('hashchange', (event) => {
  // Add touch scroll event to carousel on mobile devices
  const defRoutes = ['', 'projects', 'education', 'contacts'];
  let hash;

  // Strip last slash charachter if present;
  if (event.newURL.endsWith('/')) {
    hash = event.newURL.slice(0, -1);
  } else {
    hash = event.newURL;
  }

  hash = hash.substring(event.newURL.lastIndexOf('/')+1);

  if (!defRoutes.includes(hash)) {
    const carousel = document.querySelector('.ui-carousel');
    let startPos = null;

    // Track first position where the touch occured
    carousel.addEventListener('touchstart', (event) => {
      startPos = event.touches[0].clientX;
    })

    carousel.addEventListener('touchmove', (event) => {
      const x = event.touches[0].clientX;

      if (x-startPos >= 100) {
        console.log('swap');
      }

      // Clear touch path after 1 sec;
      setTimeout(() => {
        startPos = null;
      }, 1000);
    })
  }

})
