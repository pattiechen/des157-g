'use strict';

var imgw = document.querySelector("#imgw");
var overlayw = document.querySelector("#overlayw");
var closew = document.querySelector("#closew");

var imgp = document.querySelector("#imgp");
var overlayp = document.querySelector("#overlayp");
var closep = document.querySelector("#closep");

var imgl = document.querySelector("#imgl");
var overlayl = document.querySelector("#overlayl");
var closel = document.querySelector("#closel");

imgw.addEventListener("click", function() {
  overlayw.style.display = "block";
});
closew.addEventListener("click", function() {
  overlayw.style.display = "none";
});

imgp.addEventListener("click", function() {
  overlayp.style.display = "block";
});
closep.addEventListener("click", function() {
  overlayp.style.display = "none";
});

imgl.addEventListener("click", function() {
  overlayl.style.display = "block";
});
closel.addEventListener("click", function() {
  overlayl.style.display = "none";
});
