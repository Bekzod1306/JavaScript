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
};
alert("Брать месяц за 30 дней " + appDate.budjet);
