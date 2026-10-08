const backButton = document.getElementById("back");
const nextButton = document.getElementById("next");

const banner = document.getElementById("banner");
const banner_1 = "./images/banner_1.png";
const banner_2 = "./images/banner_2.png";

backButton.addEventListener("click", () => {
        banner.src = banner_1;
    }
) 

nextButton.addEventListener("click", () => {
        banner.src = banner_2;
    }
) 
