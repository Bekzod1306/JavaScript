//№1
// const userInfo = {
//   name: "Bek",
//   age: 21,}
//№2
// const userInfo = {
//   name: "Bek",
//   age: 21,
// "58":'Значение",
//}
//№3
// const userInfo = {
//   name: "Bek",
//   age: 21,}
// let user = userInfo;
// user.age = 45;
// console.log(userInfo.age);
//№4
// const userInfo = {
//   name: "Bek",
//   age: 21,
//   showInfo() {
//     console.log(`${this.name}`);
//   },
// };
// let user = userInfo;
// userInfo = null;
// user.showInfo();
//№5
//const userInfo = {
//   name: "Bek",
//   age: 21,
//   address: {
//     city: "Toshkent",
//   },
// };
// for(const key in userInfo.address){
//     console.log(userInfo.address[key]);
// }
//№6
// const userInfo = {
//   name: "Bek",
//   age: 21,
//   "likes JS": true,
// };
// console.log(userInfo["likes JS"]);
// const userInfo = {
//     name: "Bek",
//     age: 21,
//     "likes JS": true,
//   };
//   console.log(userInfo."likes JS");
//№8
// let userInfo = {};
// userInfo.name = "Bek";
// console.log(userInfo);
// userInfo.age = 21;
// console.log(userInfo);
// userInfo.name = "Dil";
// console.log(userInfo);
// delete userInfo.name;
// console.log(userInfo);

let mass = [
  (arr1 = {
    age: 20,
    name: "Bek",
    read: true,
  }),
  (arr2 = {
    age: 19,
    name: "Asad",
    read: true,
  }),
  (arr3 = {
    age: 23,
    name: "Jas",
    read: false,
  }),
];

for (let i = 0; i < mass.length; i++) {
    if (mass[i].read === true) {
      console.log(mass[i].name);
    }
  }
