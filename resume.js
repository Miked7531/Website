// These functions open and close the contact form 
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  // this.close(); FIX
}


// // This function covers the slide show
// var slideIndex = 1;
//   showSlides(slideIndex);
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
// 	if (n > slides.length) {slideIndex = 1}    
// 	if (n < 1) {slideIndex = slides.length}
// 	  for (i = 0; i < slides.length; i++) {
// 	  slides[i].style.display = "none";  
// 	  }
// 	  for (i = 0; i < dots.length; i++) {
// 		dots[i].className = dots[i].className.replace(" active", "");
// 	  }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }
//this function calculates my age, keeps it up to date

var dob = '19921008';
var year = Number(dob.substr(0, 4));
var month = Number(dob.substr(4, 2)) - 1;
var day = Number(dob.substr(6, 2));
var today = new Date();
var age = today.getFullYear() - year;
if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
  age--;
}
document.getElementById("j").innerHTML = age;
