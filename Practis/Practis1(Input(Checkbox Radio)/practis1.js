// function funChbox() {
//   let chbox = document.getElementById("one");

//   if (chbox.checked) {
//     alert("Выбран");
//   } else {
//     alert("Не выбран");
//   }
// }
function funRad() {
  let rad = document.getElementsByName("r1");
  for (let i = 0; i < rad.length; i++) {
    if (rad[i].checked) {
      alert("Выбран " + (i + 1) + " элемент");
    }
  }
}
