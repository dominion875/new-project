let currentIndex = 0;
const slider1 = document.querySelector(".slide1");
const slider2 = document.querySelector(".slide2");
const slider3 = document.querySelector(".slide3");
const prevBtn = document.querySelector("#left");
const nextBtn = document.querySelector(".right");

// function to show the selected slides
function showSlides(index) {
    slider1.forEach((slider1, i) => {
        slider1.classList.toggle('active', i === index)
    });
    slider2.forEach((slider2, i) => {
        slider2.classList.toggle('active', i === index)
    });
    slider3.forEach((slider3, i) => {
        slider3.classList.toggle('active', i === index)
    });
    currentIndex = index;
}

// Event Listeners for Buttons
prevBtn.addEventListener('click', () => {
    clearInterval(interval);
    let newIndex = (currentIndex - 1 + slider1.length) % slider1.length;
    showSlide(newIndex);
});
prevBtn.addEventListener('click', () => {
    clearInterval(interval);
    let newIndex = (currentIndex - 1 + slider2.length) % slider2.length;
    showSlide(newIndex);
});
prevBtn.addEventListener('click', () => {
    clearInterval(interval);
    let newIndex = (currentIndex - 1 + slider2.length) % slider2.length;
    showSlide(newIndex);
});

nextBtn.addEventListener('click', () => {
    let newIndex = (currentIndex + 1) % slides.length;
    showSlide(newIndex);
    console.log(interval)
});

// Auto-slide every 5 seconds
let interval =  setInterval(() => {
    let newIndex = (currentIndex + 1) % swipe.length;
    showSlide(newIndex);
  }, 5000);