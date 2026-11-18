// Prism agency landing page interactions
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.innerHTML = isOpen
        ? '<span class="iconify" data-icon="ph:x-bold"></span>'
        : '<span class="iconify" data-icon="ph:list-bold"></span>';
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.innerHTML = '<span class="iconify" data-icon="ph:list-bold"></span>';
      });
    });
  }

  // Highlight the navigation item for the section currently in view.
  const sections = document.querySelectorAll("main section[id]");
  const links = document.querySelectorAll(".nav-links a");
  if ("IntersectionObserver" in window && sections.length && links.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      });
    }, { rootMargin: "-35% 0px -55% 0px" });

    sections.forEach((section) => observer.observe(section));
  }
});


///
  


  /* Hero slider */
  (function () {
    const slides = $$('.hs'); if (!slides.length) return;
    const box = $('.hs-dots'); let i = 0, timer;
    slides.forEach((_, n) => {
      const d = document.createElement('button');
      d.setAttribute('aria-label', 'Go to slide ' + (n + 1));
      d.onclick = () => { go(n); play(); };
      box.appendChild(d);
    });
    const dots = [...box.children];
    function go(n) {
      slides[i].classList.remove('active'); dots[i].classList.remove('on');
      i = (n + slides.length) % slides.length;
      slides[i].classList.add('active'); dots[i].classList.add('on');
    }
    function play() {
      clearInterval(timer);
      if (!matchMedia('(prefers-reduced-motion: reduce)').matches) timer = setInterval(() => go(i + 1), 5500);
    }
    $('.hs-btn.next').onclick = () => { go(i + 1); play(); };
    $('.hs-btn.prev').onclick = () => { go(i - 1); play(); };
    const hero = $('.hslider');
    hero.addEventListener('mouseenter', () => clearInterval(timer));
    hero.addEventListener('mouseleave', play);
    go(0); play();
  })();

  
 

////
