"use strict";

let fieldName = document.querySelectorAll("input")[0],
  fieldPhone = document.querySelectorAll("input")[1],
  fieldEmail = document.querySelectorAll("input")[2],
  btnSubmit = document.querySelector("button");

function btnNoActive() {
  btnSubmit.style.background = "grey";
  btnSubmit.disabled = true;
}

function btnActive() {
  btnSubmit.style.background = "lightgreen";
  btnSubmit.disabled = false;
}

btnSubmit.addEventListener("click", (e) => {
  if (fieldName.value.length < 5) {
    alert(fieldName.value.length);
  } else {
    btnActive();
  }
});

console.log(fieldName.placeholder);
