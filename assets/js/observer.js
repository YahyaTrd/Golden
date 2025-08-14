const observer = new IntersectionObserver(
  (entries) => {
    const intersected = Array.from(entries).find(
      (entry) => entry.isIntersecting
    );
    if (intersected) {
      if (intersected.target.id !== "home") {
        header.classList.add("onscroll");
      }
      const navLink = Array.from(navLinks).find(
        (link) => link.getAttribute("href") === "#" + intersected.target.id
      );
      if (navLink) {
        navLinks.forEach((navLink) => navLink.classList.remove("active"));
        navLink.classList.add("active");
      }
    }
  },
  {
    threshold: 0.5,
  }
);

sections.forEach((section) => observer.observe(section));
