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


const tabs = document.querySelectorAll('.tab');
const homeTab = document.querySelector('.home-tab');

document.addEventListener('DOMContentLoaded', () => {
  homeTab.classList.add('active-tab');
});


tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelector('.tab.active-tab').classList.remove('active-tab');
    tab.classList.toggle('active-tab');
  });
});