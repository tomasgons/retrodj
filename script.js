let slideIndex = 0;


const carousel = () => {
  let i;
  const x = document.querySelectorAll(".mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "inline";
  setTimeout(carousel, 3000); // Change image every 3 seconds
}
carousel();
var slideIndex2 = 0;

const carousel2 = () => {
  let i;
  const x = document.getElementsByClassName("mySlides2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > x.length) {
    slideIndex2 = 1;
  }
  x[slideIndex2 - 1].style.display = "inline";
  setTimeout(carousel2, 3000); // Change image every 3 seconds
}

carousel2();
