
document.addEventListener("DOMContentLoaded", () => {
  const navBurger = document.getElementById("nav_burger");
  const navList = document.getElementById("mobile_nav_list");

  navBurger.addEventListener("click", () => {
    // Toggle the active class for the burger animation
    navBurger.classList.toggle("active");

    // Toggle the visibility of the mobile menu
    navList.classList.toggle("show_mobile_nav");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".nav");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling Down
      navbar.style.top = "-8rem"; // Hides navbar
    } else {
      // Scrolling Up
      navbar.style.top = "0"; // Shows navbar
    }
    lastScrollY = window.scrollY;
  });
});
let currentIndex = 0;
  const slides = document.querySelector('.slides');
  const dots = document.querySelectorAll('.dot');

  function showSlide(index) {
    const slideWidth = document.querySelector('.slideshow-container').offsetWidth;
    slides.style.transform = `translateX(-${index * slideWidth}px)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }
  function startSlideshow() {
    setInterval(() => {
      currentIndex = (currentIndex + 1) % dots.length;
      showSlide(currentIndex);
    }, 3000);
  }
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      showSlide(index);
    });
  });
  showSlide(currentIndex);
  startSlideshow();

  
