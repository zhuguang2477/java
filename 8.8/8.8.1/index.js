const countVowels = (word) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowerCaseWord = word.toLowerCase();
    const vowelCount = lowerCaseWord.split('').filter(letter => vowels.includes(letter)).length;
    return vowelCount;
};

document.getElementById('countButton').addEventListener('click', () => {
    const word = document.getElementById('wordInput').value;
    const vowelCount = countVowels(word);
    document.getElementById('result').textContent = `Количество гласных: ${vowelCount}`;
});