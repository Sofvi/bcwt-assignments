'use strict';

let dots = [];
for (let i = 0; i < 12; i++) {
  let node = document.createElement('div');
  node.className = 'trail';
  document.body.appendChild(node);
  dots.push(node);
}
let thisDot = 0;

window.addEventListener('mousemove', (event) => {
  let dot = dots[thisDot];
  dot.style.left = (event.pageX - 4) + 'px';
  dot.style.top = (event.pageY - 4) + 'px';
  thisDot = (thisDot + 1) % dots.length;
});