const users = [
    ["Alice", 25, true],
    ["Bob", 30, false],
    ["Charlie", 22, true],
    ["David", 27, true],
    ["Eve", 20, false]
];

const filterAndSortUsers = (users) => {
    return users
        .filter(user => user[1] > 25 && user[2])
        .sort((a, b) => a[1] - b[1])
        .map(user => user[0]);
}

document.getElementById('filterButton').addEventListener('click', () => {
    const sportUsersOver25 = filterAndSortUsers(users);
    document.getElementById('result').textContent = `Пользователи, занимающиеся спортом и старше 25 лет: ${sportUsersOver25.join(', ')}`;
});
