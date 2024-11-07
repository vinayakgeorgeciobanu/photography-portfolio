var modal = document.getElementById("myModal");
var imgs = document.querySelectorAll(".column img"); 
var modalImg = document.getElementById("img01");

imgs.forEach((img) => {
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

modal.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && modal.style.display === "block") {
        modal.style.display = "none";
    }
});