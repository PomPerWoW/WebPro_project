let header = document.querySelector(".navigation");

// Navigation Bar Scroll Fixed
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY);
});
