//Типов данных
var number = 5;
var string = "hello!";
var sym = Symbol();
var boolean = true;
//null
//underfined
var obj = {};

console.log(4 / 0); //Infinity
console.log(string / 5); //NaN
//Number to String
console.log(typeof String(null));
console.log(typeof ("www" + false));
//StringNumbers to Number
//1 Number
console.log(Number("155"));
console.log(typeof Number("155"));
//2 +
console.log(55 + +"15");
console.log(typeof (55 + +"15"));
//3 parseInt()
console.log(typeof parseInt("15px", 10));

//false (0, '', null, underfined, NaN)
//true  ([],String,.....)

//boolean
//1 Boolean()
console.log(typeof Boolean("5"));
//2 !!
console.log(typeof !!"5");
