const cardTextInput = document.getElementById('cardText');
const cardElement = document.getElementById('card');
const cardColorSelect = document.getElementById('cardColor');

cardTextInput.addEventListener('input', function() {
    cardElement.textContent = cardTextInput.value || 'Это ваша карта';
});

cardTextInput.addEventListener('focus', function() {
    cardTextInput.style.border = '2px solid blue';
    cardTextInput.style.backgroundColor = '#f0f8ff';
});

cardTextInput.addEventListener('blur', function() {
    cardTextInput.style.border = '';
    cardTextInput.style.backgroundColor = '';
});

cardColorSelect.addEventListener('change', function() {
    cardElement.style.backgroundColor = cardColorSelect.value;
});