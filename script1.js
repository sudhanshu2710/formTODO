"use strict";

// const account1 = {
//     name:play,
//     id:--,
//     status:true;
//   };

const accounts = [];

// Elements   movements__row__input
const labelWelcome = document.querySelector(".welcome");
const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements__row__input"); //containerMovements
const containerMovements_ = document.querySelector(".movements");
const btnDetails = document.querySelector(".form__btn--details");

const inputName = document.querySelector(".form__input--name");

const formData = document.querySelector(".form--transfer");

const displayUI = function (acc) {
  containerMovements.innerHTML = "";

  for (let i = 0; i < acc.length; i++) {
    const ob = acc[i];
    const type = acc[i].status ? "movements__type--done" : "";
    const check_type = acc[i].status ? "checked" : "";
    console.log(check_type);
    const details = document.createElement("div");
    details.classList.add("movements__row");
    const html = `
    <input type="checkbox" class="form form--check" onClick='check(${i})' ${check_type}/>
    <div class="movements__type movements__type--name ${type}">${ob.name}</div>
    <button class="form__btn--del" onClick='deletion(${i})'>del</button>
    `;
    details.innerHTML = html;
    containerMovements.append(details);
  }
};
formData.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = inputName.value;

  const ob = {
    name: name,
    status: false,
  };

  inputName.value = ``;
  accounts.push(ob);
  displayUI(accounts);
});

function deletion(index) {
  accounts.splice(index, 1);
  displayUI(accounts);
}
// inputCheck.addEventListener("click", function (e) {
//   console.log(e.target.value);
// });

function check(val) {
  accounts[val].status = true;

  displayUI(accounts);
  console.log(this);
}
