/* Elements */
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const dots = document.querySelectorAll(".dot");
const bannerText = banner.querySelector("p");
const bannerSlide = document.getElementById("banner-slide");

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

let currentSlide = 0; 


/* Functions, arrows */
leftArrow.addEventListener('click', showNext);
rightArrow.addEventListener('click', showPrev);


/* EventListener, arrows */
function showNext() {
	currentSlide = (currentSlide + 1) % slides.length; //"%" is used to manage the carousel loop
	bannerText.innerHTML = slides[currentSlide].tagLine;
}
  
function showPrev() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  bannerText.innerHTML = slides[currentSlide].tagLine;
}

  console.log(showNext)
  

  
/* 



function show next : 
	bannerSlide.src = "./assets/images/slideshow/" + slides[currentSlide].image;
function show prev : 
 bannerSlide.src = "./assets/images/slideshow/" + slides[currentSlide].image;



	///

function reset() {
  for (let i = 0; i < slides.length; i++) {
    slides[i];
  }
}

function startSlide() {
  reset();
  slides[0];
}

leftArrow.addEventListener("click", function() {
  if (currentSlide === 0) {
    currentSlide = slides.length;
  }
  showPrev;
});

rightArrow.addEventListener("click", function() {
  if (currentSlide === slides.length - 1) {
    currentSlide = -1;
  }
  showNext();
});

function showPrev() {
	reset();
	slides[currentSlide - 1];
	currentSlide--;
  }
  
  function showNext() {
	reset();
	slides[currentSlide + 1];
	currentSlide++;
  }
  
*/ 

