let day = prompt("Введіть день тижня (наприклад, 'понеділок'):").toLowerCase();

switch (day) {
    case "понеділок":
        alert("Початок робочого тижня.");
        break;
    case "вівторок":
        alert("Другий день тижня.");
        break;
    case "середа":
        alert("Середина тижня.");
        break;
    case "четвер":
        alert("Ще трохи до вихідних!");
        break;
    case "п'ятниця":
        alert("Останній робочий день! 🎉");
        break;
    case "субота":
    case "неділя":
        alert("Вихідний день! 😎");
        break;
    default:
        alert("Некоректний день тижня.");
}
