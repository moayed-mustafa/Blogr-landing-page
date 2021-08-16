
let openNav = document.querySelector(".nav-icon-open");
let closeNav = document.querySelector(".nav-icon-close");
let mobileMenu = document.querySelector(".inner-mobile-menu");
let hoverIcons = document.querySelectorAll(".hover-icon");
openNav.addEventListener(("click"), () => {
    console.log("clicking on this icon thingy...");
    closeNav.style.display = "block";
    openNav.style.display = "none";
    mobileMenu.style.display = "block";
});
closeNav.addEventListener(("click"), () => {
    closeNav.style.display = "none";
    openNav.style.display = "block";
    mobileMenu.style.display = "none";

});
hoverIcons.forEach((icon) => {
    icon.addEventListener(("click"), (e) => {
        e.target.nextElementSibling.style.display = "block";
        console.log(e.target.nextElementSibling.children)
        e.target.nextElementSibling.children[0].display = "block"
    })
})

