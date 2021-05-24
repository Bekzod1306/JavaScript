let money, time;
function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "2021-05-20");
  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}

start();

let appDate = {
  budjet: money,
  time: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: false,
};

function chooseExpensive() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
      b = prompt("Во сколько обойдется?", "");
    if (
      typeof a === "string" &&
      typeof a != null &&
      typeof a != null &&
      a != "" &&
      b != "" &&
      a.length < 50
    ) {
      console.log("done");
      appDate.expenses[a] = b;
    } else {
    }
  }
}

chooseExpensive();

appDate.moneyPerDay = Number((appDate.budjet / 30).toFixed(2));
alert("Ежедневний бюджет:" + appDate.moneyPerDay);

if (appDate.moneyPerDay < 100) {
  console.log("Минималний уравень доставкa");
} else if (appDate.moneyPerDay > 100 && appDate.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appDate.moneyPerDay > 2000) {
  console.log("Высокий уравен доставка");
} else {
  console.log("Призашло ошибка");
}

function cheskSavings() {
  if (appDate.savings == true) {
    let save = +prompt("Сумма нокаплени?"),
      pracent = +prompt("Под какой процент?");

    appDate.monthIncome = (save / 100 / 12) * pracent;
    alert("Даход с вашого депозита" + appDate.monthIncome);
  }
}
cheskSavings();
