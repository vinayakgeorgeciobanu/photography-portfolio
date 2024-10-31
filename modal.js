
var modal = document.getElementById("myModal");
var imgs = document.querySelectorAll(".column img"); 
var modalImg = document.getElementById("img01");

imgs.forEach((img) => {
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}
