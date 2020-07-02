'use strict';
// SLIDER

var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
// all sliders
var sliders = document.querySelectorAll(".coach");
// var sliderWrapper = document.querySelector(".coachs__list");
var btnPrev = document.querySelector(".coachs__btn--prev");
var btnNext = document.querySelector(".coachs__btn--next");

var maxDesktop = 4;
var maxTabllet = 2;
var maxMobile = 1;

if (viewportWidth > 1199) {

  for (var i = 0; i < 4; i++) {
    sliders[i].classList.remove("visually-hidden");
  }

  for (var i = 4; i < sliders.length; i++) {
    sliders[i].classList.add("visually-hidden");
  }

} else if (viewportWidth < 1199 && viewportWidth > 767) {

  for (var i = 2; i < sliders.length; i++) {
    sliders[i].classList.add("visually-hidden");
  }
} else {
  for (var i = 1; i < sliders.length; i++) {
    sliders[i].classList.add("visually-hidden");
  }
}

window.addEventListener("resize", function() {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  if (viewportWidth > 1199) {
    for (var i = 0; i < 4; i++) {
      sliders[i].classList.remove("visually-hidden");
    }

    for (var i = 4; i < sliders.length; i++) {
      sliders[i].classList.add("visually-hidden");
    }
  } else if (viewportWidth < 1199 && viewportWidth > 767) {

    for (var i = 0; i < 2; i++) {
      sliders[i].classList.remove("visually-hidden");
    }
    for (var i = 2; i < sliders.length; i++) {
      sliders[i].classList.add("visually-hidden");
    }
  } else {
    for (var i = 1; i < sliders.length; i++) {
      sliders[i].classList.add("visually-hidden");
    }
  }
}, false);

function sliderNext() {
  for (var i = 0; i < sliders.length; i++) {
    sliders[i].classList.toggle("visually-hidden");
  }
}

function sliderPrev() {
  for (var i = 0; i < sliders.length; i++) {
    sliders[i].classList.toggle("visually-hidden");
  }
}

btnPrev.addEventListener("click", sliderPrev);
btnNext.addEventListener("click", sliderNext);
