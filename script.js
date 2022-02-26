window.addEventListener('keydown', (e) => {
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  key.classList.add('pressed');
})

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeClass));

function removeClass() {
  this.classList.remove('pressed');
}