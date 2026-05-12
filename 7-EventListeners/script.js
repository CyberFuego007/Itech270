const image = document.getElementById("forest-image");
const blogTitle = document.getElementById("blog-title");
const mysteryLink = document.getElementById("mystery-link");

image.addEventListener("click", changeImage);
blogTitle.addEventListener("click", changeTitle);
mysteryLink.addEventListener("click", changeLinkStyle);

function changeImage() {
    image.src = "images/bigfoot.png";
    image.alt = "Bigfoot standing in the forest";
}

function changeTitle() {
    blogTitle.textContent = "Bigfoot Was Definitely Here";
}

function changeLinkStyle(event) {
    event.preventDefault();

    mysteryLink.style.color = "darkred";
    mysteryLink.style.fontSize = "28px";
}