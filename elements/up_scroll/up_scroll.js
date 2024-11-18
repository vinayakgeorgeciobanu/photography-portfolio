let upButton = document.getElementById("upButton");

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scroll > 500 || document.documentElement.scrollTop > 500) {
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