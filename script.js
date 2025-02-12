document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  if (burger && nav) {
      burger.addEventListener('click', (event) => {
          event.stopPropagation(); // Prevent immediate closing
          nav.classList.toggle('nav-active');
          burger.classList.toggle('active'); // Toggle burger animation
      });

      // Close menu when clicking outside the navigation but not on the header or burger
      document.addEventListener('click', (event) => {
          if (!nav.contains(event.target) && !burger.contains(event.target)) {
              nav.classList.remove('nav-active');
              burger.classList.remove('active');
          }
      });
  
      // Prevent closing when clicking inside the menu
      nav.addEventListener('click', (event) => {
          event.stopPropagation();
      });

      // Close menu when clicking a menu link
      document.querySelectorAll('.nav-links a').forEach(link => {
          link.addEventListener('click', () => {
              nav.classList.remove('nav-active');
              burger.classList.remove('active');
          });
      });
  } else {
      console.error("Burger menu or nav-links not found.");
  }
});