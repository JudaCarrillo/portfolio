// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  // sticky header
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// scroll reveal
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .home-sci, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .education-column, .about-img, .about-content, .skills-column, .portfolio-box, .contact form",
  { origin: "bottom" }
);

// mostrar más información
const button = document.getElementById("hideTextBtn");
const textElement = document.getElementById("hiddenContent");

button.addEventListener("click", () => {
  textElement.classList.toggle("showText");
  if (textElement.classList.toggle("show")) {
    button.innerHTML = "Leer menos";
  } else {
    button.innerHTML = "Leer más";
  }
});

