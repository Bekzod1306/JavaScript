// function funSel() {
//   let sel = document.getElementById("mySelect").selectedIndex;
//   let options = document.getElementById("mySelect").options;
//   alert("Выбрана опция " + options[sel].text);
// }

// function funRang() {
//   let rang = document.getElementById("r1");
//   let p = document.getElementById("one");
//   p.innerHTML = rang.value;
// }

// function funRang() {
//   let rang = document.getElementById("r1");
//   let i = document.getElementById("i1");
//   i.value = rang.value;
// }

function funRang() {
  let rang = document.getElementById("r1");
  let div = document.getElementById("text");
  div.style.width = rang.value + "px";
}
