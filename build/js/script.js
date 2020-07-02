'use strict';

var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
// all sliders
var sliders = document.querySelectorAll(".coach");
var sliderWrapper = document.querySelector(".coachs__list");

// console.log(sliderWrapper);


if (viewportWidth > 1199) {
  for (var i = 4; i < sliders.length; i++) {
    // console.log("Элемент " + sliders[i]);
    sliders[i].classList.add("visually-hidden");
  }
} else if (viewportWidth < 1199 || viewportWidth > 767) {

  console.log("< 1199 > 767");
  for (var i = 2; i < sliders.length; i++) {
    // console.log("Элемент " + sliders[i]);
    sliders[i].classList.add("visually-hidden");
  }
} else {
  console.log("< 767");
  for (var i = 1; i < sliders.length; i++) {
    // console.log("Элемент " + sliders[i]);
    sliders[i].classList.add("visually-hidden");
  }
}

window.addEventListener("resize", function() {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  if (viewportWidth > 1199) {
    for (var i = 0; i < 4; i++) {
      // console.log("Элемент " + sliders[i]);
      sliders[i].classList.remove("visually-hidden");
    }

    for (var i = 4; i < sliders.length; i++) {
      // console.log("Элемент " + sliders[i]);
      sliders[i].classList.add("visually-hidden");
    }
  } else if (viewportWidth < 1199 && viewportWidth > 767) {

    // console.log("< 1199 > 767");
    for (var i = 2; i < sliders.length; i++) {
      // console.log("Элемент " + sliders[i]);
      sliders[i].classList.add("visually-hidden");
    }
  } else {
    console.log("< 767");
    for (var i = 1; i < sliders.length; i++) {
      // console.log("Элемент " + sliders[i]);
      sliders[i].classList.add("visually-hidden");
    }
  }
}, false);
