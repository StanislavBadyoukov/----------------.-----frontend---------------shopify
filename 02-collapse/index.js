const hideSpan = document.querySelector('.collapsible .collapsible__action--visible');
const showSpan = document.querySelector('.collapsible .collapsible__action--hidden');
const content = document.querySelector('.collapsible__content');
const collapsibleButton = document.querySelector('.collapsible__button');

hideSpan.setAttribute('style', 'display: none');
content.setAttribute('style', 'display: none');

let animateSettings = {
  duration: 500
};

let hideItems = [{
    transform: 'translateY(0px)',
    opacity: 1
  },
  {
    transform: 'translateY(-15px)',
    opacity: 0
  }
];

let showItems = [{
    transform: 'translateY(-15px)',
    opacity: 0
  },
  {
    transform: 'translateY(0px)',
    opacity: 1
  }
];

collapsibleButton.onclick = (e) => {

  if (e.target.classList.contains('collapsible__action--visible')) {
    showSpan.setAttribute('style', 'display: block');
    hideSpan.setAttribute('style', 'display: none');
    content.animate(hideItems, animateSettings).onfinish = () => {
      content.setAttribute('style', 'display: none');
    };
  }

  if (e.target.classList.contains('collapsible__action--hidden')) {
    showSpan.setAttribute('style', 'display: none');
    hideSpan.setAttribute('style', 'display: block');
    content.setAttribute('style', 'display: block');
    content.animate(showItems, animateSettings);
  }
}