document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("myModal");
  const openModalBtn = document.getElementById("openModalBtn");
  const registerNowBtn = document.getElementById("registerNowBtn");
  const closeModal = document.getElementById("closeModal");
  const closeBtn = document.getElementById("closeBtn");
  const body = document.body;

  
  const openModal = () => {
    modal.classList.add("display-block"); 
    body.style.overflow = "hidden"; 
  };

  
  const closeModalFunction = () => {
    modal.classList.remove("display-block"); 
    body.style.overflow = ""; 
  };

  
  openModalBtn.addEventListener("click", openModal);
  registerNowBtn.addEventListener("click", openModal);
  closeModal.addEventListener("click", closeModalFunction);
  closeBtn.addEventListener("click", closeModalFunction);


  
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModalFunction();
    }
  });


  const navBurger = document.getElementById("nav_burger");
  const navList = document.getElementById("mobile_nav_list");
  navBurger.addEventListener("click", () => {
    navBurger.classList.toggle("active");
    navList.classList.toggle("show_mobile_nav");
  });
  const navbar = document.querySelector(".nav");
  let lastScrollY = window.scrollY;
  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
      navbar.style.top = "-8rem"; 
    } else {
      navbar.style.top = "0"; 
    }
    lastScrollY = window.scrollY;
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(entry.target.dataset.animation);
        observer.unobserve(entry.target); 
      }
    });
  });
  document.querySelectorAll(".animate-on-scroll").forEach((element) => {
    observer.observe(element);
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
});
