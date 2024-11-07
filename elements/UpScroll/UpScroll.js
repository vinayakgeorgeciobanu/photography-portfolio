let upButton = document.getElementById("upButton");

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scroll > 400 || document.documentElement.scrollTop > 400) {
        upButton.style.display = "block";
    } else {
        upButton.style.display = "none";
    }
}

upButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}