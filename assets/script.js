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

/* Elements */
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const dots = document.querySelectorAll(".dot");

const bannerText = banner.querySelector("p");


/* Functions, arrows */
leftArrow.addEventListener('click', myFunction);
rightArrow.addEventListener('click', myFunction);

/* EventListener, arrows, provisoire */
function myFunction() {
	alert ("Hello World!");
  }



  
/*
leftArrow.addEventListener("click", (event) => {});
rightArrow.addEventListener("click", (event) => {});

function ///() {
  /// ;
}
*/ 

