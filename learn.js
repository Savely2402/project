let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DDD");
let a1 = prompt("Введите обязательную статью расходов в этом месяце", "");
let a2 = prompt("Во сколько обойдется?", ""); 

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        a1: a2
    },
    optionalExpenses: {},
    income: [],
    saving: false
};

alert(money / 30);