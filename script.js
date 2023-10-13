let header = document.querySelector(".navigation");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY);
});
