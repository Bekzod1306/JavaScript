// let btn = document.getElementsByTagName("button");
let wrapper = document.querySelector(".wrapper");
// btn[0].onclick = function () {
//   alert("Вы нажали на кнопку на 1");
// };
// btn[0].onclick = function () {
//   alert("Вы нажали на кнопку на 2");
// };

// btn[0].addEventListener("click", function () {
//   alert("Вы нажали на кнопку на 1");
//   alert("Вы нажали на кнопку на 2");
// });

// btn[0].addEventListener("click", function () {
//   alert("Вы нажали на кнопку на 1");
// });
// btn[0].addEventListener("click", function () {
//   alert("Вы нажали на кнопку на 2");
// });
// btn[0].addEventListener("mouseenter", function () {
//     alert("Вы навели на кнопку на 1");
//   });
// btn[0].addEventListener("click", function (event) {
//   console.log(
//     "Произашло событие: " + event.type + " на элементе " + event.target
//   );
// });
// btn[1].addEventListener("click", function (event) {
//   console.log(
//     "Произашло событие: " + event.type + " на элементе " + event.target
//   );
// });
// wrapper.addEventListener("click", function (event) {
//   console.log(
//     "Произашло событие: " + event.type + " на элементе " + event.target
//   );
// });
let link = document.querySelector("a");
let btnall = document.querySelectorAll("button");
link.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(
    "Произашло событие: " + event.type + " на элементе " + event.target
  );
});

btnall.forEach((item) => {
  item.addEventListener("mouseleave", function () {
    console.log("Вышли!");
  });
});
