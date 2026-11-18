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
