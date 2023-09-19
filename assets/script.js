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
activeDot() // dot selected at first

/* Function, dots */
function activeDot() {
	dots.forEach((dot, index) => {
	/* "forEach", calls a function for each element in an array -
	goes through each bullet point and removes the "dot_selected" class. */ 
		dot.classList.remove("dot_selected");
		if (index === currentSlide) {
			dot.classList.add("dot_selected");
			/* "changes the class of the bullet point corresponding
			to the current slide to "dot_selected" */
		}
	});
}

/* EventListener +, arrows */
leftArrow.addEventListener('click', showPrev);
rightArrow.addEventListener('click', showNext);

function showNext() {
	currentSlide = (currentSlide + 1) % slides.length; //"%" used to manage the carousel loop
	bannerText.innerHTML = slides[currentSlide].tagLine;
	bannerSlide.src = "./assets/images/slideshow/" + slides[currentSlide].image;
	activeDot();
}
  
function showPrev() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  bannerText.innerHTML = slides[currentSlide].tagLine;
  bannerSlide.src = "./assets/images/slideshow/" + slides[currentSlide].image;
  activeDot();
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

