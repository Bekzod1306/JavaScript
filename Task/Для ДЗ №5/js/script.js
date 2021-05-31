let menu = document.querySelector(".menu");
let list = document.getElementsByClassName("menu");
let newlist = document.createElement("li");

newlist.innerHTML = "Beshinchi";
let title = document.querySelector(".title");
title.innerHTML = "Мы продаем только подлинную технику Apple";

let abv = document.querySelector(".adv");

abv.style.display = "none";

let user = document.querySelector(".prompt");

let text = prompt("Oтношение к технике apple?", "");

user.innerHTML = text;
