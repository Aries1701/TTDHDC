let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("shop");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 3000); // Thay đổi slide mỗi 3 giây
}

function plusSlides(n) {
    slideIndex += n - 1; // Điều chỉnh chỉ số slide
    showSlides();
}