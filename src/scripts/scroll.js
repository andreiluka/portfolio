console.log('this is the scroll module');

function scrollSmooth(section) {
   document.querySelector(section).scrollIntoView({
      behavior: 'smooth'
   });
}

let heroScroll = document.querySelector('.hero__scroll');
heroScroll.addEventListener('click', (e) => {
   e.preventDefault();
   scrollSmooth('.about');
});

let sections = ['hero', 'about', 'skills', 'portfolio', 'reviews', 'write-me'];
for (let section of sections) {
   
   for (let sel of document.querySelectorAll("a[href='#"+section+"']")) {
      sel.addEventListener('click', (e) => {
         e.preventDefault();
         scrollSmooth('#'+section);
      });
   }
}