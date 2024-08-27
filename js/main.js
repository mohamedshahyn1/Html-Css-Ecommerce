
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("scroll-down");
    } else {
      header.classList.remove("scroll-down");
    }
});
