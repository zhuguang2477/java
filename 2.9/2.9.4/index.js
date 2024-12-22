// Функция для получения имени и года рождения пользователя
function getUserData(index) {
    const name = prompt(`Введите имя пользователя ${index}:`);
    const birthYear = prompt(`Введите год рождения пользователя ${index}:`);
    return { name, birthYear: Number(birthYear) };
}

// Массив для хранения данных пользователей
const users = [];

// Получаем данные для трех пользователей
for (let i = 1; i <= 3; i++) {
    users.push(getUserData(i));
}

// Выводим данные пользователей в консоль с автоматической нумерацией
let totalAge = 0;
users.forEach((user, index) => {
    const age = new Date().getFullYear() - user.birthYear; // Вычисляем возраст
    totalAge += age; // Суммируем возраст
    console.log(`${index + 1} '${user.name}' ${age}`);
});

// Вычисляем и выводим средний возраст
const averageAge = totalAge / users.length;
console.log(`Средний возраст пользователей: ${averageAge}`);