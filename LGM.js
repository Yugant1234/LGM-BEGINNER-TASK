var Slide = 0;

function showSlidesauto() {
  var i;
  var slides = document.getElementsByClassName("slideshows");
  var sliders = document.getElementsByClassName("abc");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  Slide++;
  if (Slide > slides.length) {Slide = 1}
  for (i = 0; i < sliders.length; i++) {
    sliders[i].className = sliders[i].className.replace(" active", "");
  }
  sliders[Slide - 1].className += " active";
  slides[Slide-1].style.display = "block";
  setTimeout(showSlidesauto, 10000);
}


function plusSlides(n) {
  showSlides((Slide += n));
}

function currentSlide(n) {
  showSlides((Slide = n));
}

function showSlides(n) {
  Slide=1;  
  var i;
  var slides = document.getElementsByClassName("slideshows");
  var sliders = document.getElementsByClassName("abc");
  if (n > slides.length) {
    Slide = 1;
  }
  if (n < 1) {
    Slide = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < sliders.length; i++) {
    sliders[i].className = sliders[i].className.replace(" active", "");
  }
  slides[Slide - 1].style.display = "block";
  sliders[Slide - 1].className += " active";
  showSlidesauto();
}


function currentSlideGallary(n) {
  showSlidesGallary((Slide = n));
}

function plusSlidesGallary(n) {
  showSlidesGallary((Slide += n));
}

function showSlidesGallary(n) {
  var i;
  var slides = document.getElementsByClassName("imageslide");
  var sliders = document.getElementsByClassName("team");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {Slide = 1}
  if (n < 1) {Slide = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < sliders.length; i++) {
    sliders[i].className = sliders[i].className.replace(" active", "");
  }
  slides[Slide-1].style.display = "block";
  sliders[Slide-1].className += " active";
  captionText.innerHTML = sliders[Slide-1].alt;
}

SlideVideo=1;

function currentVideoSlide(n){
  videoSlide((SlideVideo=n));
}

function plusVideoSlide(n){
  videoSlide((SlideVideo+=n));
}

function videoSlide(n){
  var i;
  var videos = document.getElementsByClassName("video");
  if (n>videos.length){SlideVideo=1}
  if (n<1){SlideVideo=videos.length}
  for(i=0;i<videos.length;i++){
    videos[i].style.display="none";
  }
  videos[SlideVideo-1].style.display="block";
}




