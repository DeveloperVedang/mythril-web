// Typed
var typed = new Typed('.typed span', {
    strings: ["We Preffer Playing With Friends", "Want A Best Minecraft Server?", "Want A Discord Bot Hosting?", "Mythril is Always There For You!"],
    loop: true,
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 2000
});

// Reveal
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);