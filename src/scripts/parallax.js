console.log('this is the parallax module');

const parallax = document.querySelector('.bg-mountains');
const layers = parallax.children;

function moveLayers(wScroll) {

   Array.from(layers).forEach(layer => {
      const divider = layer.dataset.speed;
      const strafe = wScroll * divider / 10;

      layer.style.transform = `translateY(-${strafe}%)`;
   });
}

window.addEventListener('scroll', e => {
   const wScroll = window.pageYOffset;
   moveLayers(wScroll);
});