window.onscroll = () => {
  if (!window.scrollY) {
    header.classList.remove("onscroll");
  }
};

document.querySelector(".fa-bars").onclick = () =>
  navBar.classList.add("active");

document.querySelector(".fa-close").onclick = () =>
  navBar.classList.remove("active");
