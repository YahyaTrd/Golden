const header = document.querySelector("header");
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav a");
const links = Array.from(document.querySelectorAll("a")).filter(
  (link) => links.getAttribute("href")[0] === "#"
);

const section = Array.from(navLinks).map((link) =>
  document.querySelector(link.getAttribute("href"))
);
links.forEach((link) => {
  link.onclick = (e) => {
    e.preventDefault();
    navBar.classList.remove("active");
    const section = document.querySelector(link.getAttribute("href"));
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };
});
