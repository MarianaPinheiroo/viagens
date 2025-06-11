const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let index = 0;

function showSlide(i) {
    slides.forEach(slide => slide.style.display = "none");
    slides[i].style.display = "block";
    slides[i].querySelector("video").currentTime = 0;
    slides[i].querySelector("video").play();
}

nextButton.addEventListener("click", () => {
    slides[index].querySelector("video").pause();
    index = (index + 1) % slides.length;
    showSlide(index);
});

prevButton.addEventListener("click", () => {
    slides[index].querySelector("video").pause();
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
});

showSlide(index);
