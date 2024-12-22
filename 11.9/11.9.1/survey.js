document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const rating = document.getElementById('rating').value;
    const interests = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(checkbox => checkbox.value);
    const comments = document.getElementById('comments').value;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Результаты:</h2>
        <p>Имя: ${username}</p>
        <p>Email: ${email}</p>
        <p>Пол: ${gender}</p>
        <p>Оценка: ${rating}</p>
        <p>Интересы: ${interests.join(', ')}</p>
        <p>Комментарии: ${comments}</p>
    `;
});