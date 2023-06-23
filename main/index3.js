const toggle = document.getElementById("toggle");
const mainImage = document.querySelector(".abs img");

toggle.addEventListener("change", function() {
  if (this.checked) {
    mainImage.src = "../img/hover/에에올4.png";

  } else {
    mainImage.src = "../img/hover/타이타닉2.png";
  }
});

const toggle1 = document.getElementById("toggle1");
const absImage = document.querySelector(".abs img");

toggle1.addEventListener("change", function() {
  if (this.checked) {
    absImage.src = "../img/hover/이터널선샤인2.png";
  } else {
    absImage.src = "../img/hover/타이타닉2.png";
  }
});

const toggle2 = document.getElementById("toggle2");
const absImage1 = document.querySelector(".abs img");

toggle2.addEventListener("change", function() {
  if (this.checked) {
    absImage1.src = "../img/hover/타이타닉2.png";
  } else {
    absImage1.src = "../img/hover/타이타닉2.png";
  }
});

const toggle3 = document.getElementById("toggle3");
const absImage2 = document.querySelector(".abs img");

toggle3.addEventListener("change", function() {
  if (this.checked) {
    absImage2.src = "../img/hover/헤어질 결심 이미지.png";
  } else {
    absImage2.src = "../img/hover/타이타닉2.png";
  }
});
