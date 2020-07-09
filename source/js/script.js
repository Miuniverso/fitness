"use strict";
// SLIDER

var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

// all sliders
var sliders = document.querySelectorAll(".coach");
var btnPrev = document.querySelector(".coachs__btn--prev");
var btnNext = document.querySelector(".coachs__btn--next");

var sliderTrack = document.querySelector(".coachs__list");

// var maxDesktop = 4;
// var maxTabllet = 2;
// var maxMobile = 1;

var stepNext = "translateX(-105%)";
var stepPrev = "translateX(0)";

if (viewportWidth < 1199 && viewportWidth > 767) {
  stepNext = "translateX(-110%)";
}

if (viewportWidth < 767) {
  stepNext = "translateX(-113%)";
}

function sliderPrev() {
  console.log("Prev");

  if (sliderTrack.style.transform === "translateX(-330%)") {
    console.log("-330");
    stepPrev = "translateX(-220%)";
  }

  if (sliderTrack.style.transform === "translateX(-220%)") {
    console.log("-220");
    stepPrev = "translateX(-110%)";
  }

  if (sliderTrack.style.transform === "translateX(-110%)") {
    stepPrev = "translateX(0%)";
  }

  sliderTrack.style.transform = stepPrev;
}

function sliderNext() {
  console.log("Next");

  // tablet

  if (sliderTrack.style.transform === "translateX(-110%)") {
    stepNext = "translateX(-220%)";
  }

  if (sliderTrack.style.transform === "translateX(-220%)") {
    stepNext = "translateX(-330%)";
  }

  //mobile

  if (sliderTrack.style.transform === "translateX(-113%)") {
    stepNext = "translateX(-223%)";
  }

  if (sliderTrack.style.transform === "translateX(-223%)") {
    stepNext = "translateX(-333%)";
  }

  if (sliderTrack.style.transform === "translateX(-333%)") {
    stepNext = "translateX(-443%)";
  }

  if (sliderTrack.style.transform === "translateX(-443%)") {
    stepNext = "translateX(-553%)";
  }


  sliderTrack.style.transform = stepNext;
}


btnPrev.addEventListener("click", sliderPrev);
btnNext.addEventListener("click", sliderNext);
