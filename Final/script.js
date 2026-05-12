const profileImage = document.getElementById("profile-image");

if (profileImage) {
    profileImage.addEventListener("click", changePicture);
}

function changePicture() {
    if (profileImage.src.includes("me1.png")) {
        profileImage.src = "images/me2.png";
        profileImage.alt = "Second meme image representing Lee";
    } else {
        profileImage.src = "images/me1.png";
        profileImage.alt = "First meme image representing Lee";
    }
}