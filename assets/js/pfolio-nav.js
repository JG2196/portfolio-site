document.addEventListener("DOMContentLoaded", function() {
  const themeBtn = document.getElementById("theme-toggle");
  const scrollBtn = document.getElementById("scroll-top");

  // When toggled
  themeBtn.addEventListener("click", function() {
    const newTheme = document.documentElement.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-bs-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  });

  scrollBtn.addEventListener("click", function() {
    window.scrollTo(0, 0);
  });
});