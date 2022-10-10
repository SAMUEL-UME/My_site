let icon = document.querySelector(".icon-one");

icon.addEventListener("click", () => {
  let navLinks = document.querySelector(".nav-links");

  icon.classList.toggle("active-one");
  navLinks.classList.toggle("active");
});
