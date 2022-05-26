// Intersection Observers
const fadeIn = document.querySelectorAll('.fade-in');

const observerOptions = {
  threshold: .6,
  rootMargin: "0px 0px -40px 0px"
};

const scrollsIn = new IntersectionObserver
(function(
  entries, 
  scrollsIn
) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      scrollsIn.unobserve(entry.target);
    }
  });
},
observerOptions);

fadeIn.forEach(element => {
  scrollsIn.observe(element);
});


// Mobile menu
const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');
const menu = document.querySelector('.mobile-menu-page');

menuBtn.addEventListener('click', () => {
  menuBtn.style.visibility = 'hidden';
  menuBtn.style.transform = 'translateY(20px)';
  menuBtn.style.transition = 'transform 600ms 300ms ease, visibility 600ms ease';
  closeBtn.style.visibility = 'visible';
  closeBtn.style.transform = 'translateY(0)';
  closeBtn.style.transition = 'transform 600ms 900ms ease, visibility 800ms 1s ease';
  menu.style.opacity = '1';
  menu.style.visibility = 'visible';
  menu.style.transform = 'translateX(0)';
});

closeBtn.addEventListener('click', () => {
  menuBtn.style.visibility = 'visible';
  menuBtn.style.transform = 'translateY(0)';
  menuBtn.style.transition = 'transform 600ms 900ms ease, visibility 600ms 1s ease';
  closeBtn.style.visibility = 'hidden';
  closeBtn.style.transform = 'translateY(-20px)';
  closeBtn.style.transition = 'transform 600ms 300ms ease, visibility 600ms ease';
  menu.style.opacity = '0';
  menu.style.visibility = 'hidden';
  menu.style.transform = 'translateX(500px)';
})