// Show and Hide The Nav
let navButton = document.querySelector(".header .links");
let nav = document.querySelector(".header .links ul");

navButton.onclick = function () {
    nav.classList.toggle("show");
}

// Add Scroll to Top Button
let scrollToTop = document.querySelector(".scroll-to-top");

window.onscroll = function () {
    if (window.scrollY >= 100) {
        scrollToTop.style.display = "block";
    } else {
        scrollToTop.style.display = "none";
    }
};

scrollToTop.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};

// Add Scroll Progress
let el = document.querySelector(".scroll-progress");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    el.style.width = `${(scrollTop / height) * 100}%`;
});