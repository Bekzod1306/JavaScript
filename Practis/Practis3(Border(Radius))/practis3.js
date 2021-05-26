// function ran1() {
//   let ra1 = document.getElementById("r1");
//   let in1 = document.getElementById("i1");
//   let bor1 = document.getElementById("bord");
//   in1.value = ra1.value;
//   bor1.style.borderTopLeftRadius = ra1.value + "px";
// }
// function ran2() {
//   let ra2 = document.getElementById("r2");
//   let in2 = document.getElementById("i2");
//   let bor2 = document.getElementById("bord");
//   in2.value = ra2.value;
//   bor2.style.borderTopRightRadius = ra2.value + "px";
// }
// function ran3() {
//   let ra3 = document.getElementById("r3");
//   let in3 = document.getElementById("i3");
//   let bor3 = document.getElementById("bord");
//   in3.value = ra3.value;
//   bor3.style.borderBottomRightRadius = ra3.value + "px";
// }
// function ran4() {
//   let ra4 = document.getElementById("r4");
//   let in4 = document.getElementById("i4");
//   let bor4 = document.getElementById("bord");
//   in4.value = ra4.value;
//   bor4.style.borderBottomLeftRadius = ra4.value + "px";
// }

function funRan() {
  let ra1 = document.getElementById("r1").value;
  let in1 = document.getElementById("i1");
  let ra2 = document.getElementById("r2").value;
  let in2 = document.getElementById("i2");
  let ra3 = document.getElementById("r3").value;
  let in3 = document.getElementById("i3");
  let ra4 = document.getElementById("r4").value;
  let in4 = document.getElementById("i4");

  in1.value = ra1;
  in2.value = ra2;
  in3.value = ra3;
  in4.value = ra4;

  let bordd = document.getElementById("bord");

  bordd.style.borderRadius =
    ra1 + "px " + ra2 + "px " + ra3 + "px " + ra4 + "px ";
}
