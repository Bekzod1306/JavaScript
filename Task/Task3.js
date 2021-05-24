let money = prompt("Ваш бюджет на месяц?", "1000$");

let time = prompt("Введите дату в формате YYYY-MM-DD", "2021-05-20");

let appDate = {
  budjet: money,
  time: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: false,
};

// for (let i = 0; i < 2; i++) {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     b = prompt("Во сколько обойдется?", "");
//   if (
//     typeof a === "string" &&
//     typeof a != null &&
//     typeof a != null &&
//     a != "" &&
//     b != "" &&
//     a.length < 50
//   ) {
//     console.log("done");
//     appDate.expenses[a] = b;
//   } else {
//   }
// }
// appDate.moneyPerDay = appDate.budjet / 30;
// alert("Ежедневний бюджет:" + appDate.moneyPerDay);

// if (appDate.moneyPerDay < 100) {
//   console.log("Минималний уравень доставкa");
// } else if (appDate.moneyPerDay > 100 && appDate.moneyPerDay < 2000) {
//   console.log("Средний уровень достатка");
// } else if (appDate.moneyPerDay > 2000) {
//   console.log("Высокий уравен доставка");
// } else {
//   console.log("Призашло ошибка");
// }

// i = 0;
// while (i < 2) {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     b = prompt("Во сколько обойдется?", "");
//   if (
//     typeof a === "string" &&
//     typeof a != null &&
//     typeof a != null &&
//     a != "" &&
//     b != "" &&
//     a.length < 50
//   ) {
//     console.log("done");
//     appDate.expenses[a] = b;
//   } else {
//   }
//   i++;
// }
// appDate.moneyPerDay = appDate.budjet / 30;
// alert("Ежедневний бюджет:" + appDate.moneyPerDay);

// if (appDate.moneyPerDay < 100) {
//   console.log("Минималний уравень доставкa");
// } else if (appDate.moneyPerDay > 100 && appDate.moneyPerDay < 2000) {
//   console.log("Средний уровень достатка");
// } else if (appDate.moneyPerDay > 2000) {
//   console.log("Высокий уравен доставка");
// } else {
//   console.log("Призашло ошибка");
// }

// i = 0;
// do {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     b = prompt("Во сколько обойдется?", "");
//   if (
//     typeof a === "string" &&
//     typeof a != null &&
//     typeof a != null &&
//     a != "" &&
//     b != "" &&
//     a.length < 50
//   ) {
//     console.log("done");
//     appDate.expenses[a] = b;
//   } else {
//   }
//   i++;
// } while (i < 2);

// appDate.moneyPerDay = appDate.budjet / 30;
// alert("Ежедневний бюджет:" + appDate.moneyPerDay);

// if (appDate.moneyPerDay < 100) {
//   console.log("Минималний уравень доставкa");
// } else if (appDate.moneyPerDay > 100 && appDate.moneyPerDay < 2000) {
//   console.log("Средний уровень достатка");
// } else if (appDate.moneyPerDay > 2000) {
//   console.log("Высокий уравен доставка");
// } else {
//   console.log("Призашло ошибка");
// }
