console.log('this is the parallax module');

const parallaxes = document.querySelectorAll('.parallax-container');

for (let parallax of parallaxes) {
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
}
