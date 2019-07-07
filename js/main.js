import AOS from 'aos';

//scroll animation
AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-in-out',
});

//cursor
const c = document.querySelector("[data-custom-cursor]");
const r = document.getElementsByClassName("expand");

window.addEventListener('mousemove', function(e){
  let x = e.clientX;
  let y = e.clientY;
  let pos = '1, 0, 0, 1, ' + x + ',' + y;
  c.setAttribute('style', "transform: matrix(" + pos + ")");
});

for(let i=0; i<r.length; i++) {
    r[i].onmouseover = function() {
      c.classList.add("custom-cursor-active");
    };
      
    r[i].onmouseleave = function() {
      c.classList.remove("custom-cursor-active");
    };
}

import MicroModal from 'micromodal'; 
MicroModal.init({
  awaitCloseAnimation: true,
});