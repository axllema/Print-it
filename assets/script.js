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

/* Elements */
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const dots = document.querySelectorAll(".dot");
const bannerText = banner.querySelector("p");


/* Functions, arrows provisoires */
leftArrow.addEventListener('click', myFunction);
rightArrow.addEventListener('click', myFunction);

/* EventListener, arrows, provisoire */
function myFunction() {
	alert ("Hello World!");
  }

  console.log(myFunction)
  

  
/* 
  leftArrow.addEventListener('click', showNextSlides);
  rightArrow.addEventListener('click', showLastSlides);
  
  function showNextSlides() {
	  currentSlide = (currentSlide + 1) % slides.length; //"%" is used to manage the carousel loop
	  bannerSlide.src = "./assets/images/slideshow/" + slides[currentSlide].image;
	  bannerText.innerHTML = slides[currentSlide].tagLine;
  }
	
function showLastSlides() {
	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	bannerSlide.src = "./assets/images/slideshow/" + slides[currentSlide].image;
	bannerText.innerHTML = slides[currentSlide].tagLine;
  }

}
*/ 

