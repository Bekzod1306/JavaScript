let money = prompt("Ваш бюджет на месяц?", "1000$");

let time = prompt("Введите дату в формате YYYY-MM-DD", "2021-05-20");

let appDate = {
  budjet: money,
  time: time,
  expenses: {
    answerE: prompt(
      "Введите обязательную статью расходов в этом месяце?",
      "300$"
    ),
  },
  optionalExpenses: {
    answerO: prompt("Во сколько обойдется?", "600$"),
  },
  income: [],
  timeData: time,
  savings: false,
};


let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?", '');

appData.expenses[a1] = a2;
appData.expenses[a3] = a4;

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
