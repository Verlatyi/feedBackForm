"use strict";

let fieldName = document.querySelectorAll("input")[0],
  fieldPhone = document.querySelectorAll("input")[1],
  fieldEmail = document.querySelectorAll("input")[2],
  fieldRadioBtn = document.querySelectorAll("input")[3],
  btnSubmit = document.querySelector("button"),
  numberPhone;

function btnNoActive() {
  btnSubmit.style.background = "grey";
  btnSubmit.disabled = true;
}

btnNoActive();

function btnActive() {
  btnSubmit.style.background = "lightgreen";
  btnSubmit.disabled = false;
}

fieldRadioBtn.addEventListener("click", (e) => {
  numberPhone = /^\d+$/.test(fieldPhone.value);

  if (fieldRadioBtn.checked == true) {
    if (
      fieldName.value.length < 2 ||
      fieldPhone.value.length < 9 ||
      fieldPhone.value.length > 12 ||
      fieldName.value.length > 20 ||
      fieldEmail.value.length < 5 ||
      fieldEmail.value.length > 30 ||
      numberPhone == false
    ) {
      alert("Поля заполненны некоректно! Внесите пожалуйста исправления.");
      fieldRadioBtn.checked = false;
    } else {
      btnActive();
    }
  }
});
