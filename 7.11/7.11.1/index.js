const books = ["1984", "Месть", "Убик"];

const booksList = document.querySelector('.books');
const addBookButton = document.querySelector('.add-book');
const searchBookButton = document.querySelector('.search-book');

function renderBooks() {
    booksList.innerHTML = '';
    books.forEach(book => {
        const li = document.createElement('li');
        li.textContent = book;
        booksList.appendChild(li);
    });
}

addBookButton.addEventListener('click', () => {
    const newBook = prompt("Введите название книги:");
    if (newBook) {
        books.push(newBook);
        renderBooks();
    } else {
        alert("Название книги не введено!");
    }
});

searchBookButton.addEventListener('click', () => {
    const searchTerm = prompt("Введите название книги для поиска:");
    if (searchTerm) {
        const foundIndex = books.findIndex(book => book.toLowerCase() === searchTerm.toLowerCase());
        if (foundIndex !== -1) {
            const liList = booksList.children;
            liList[foundIndex].style.backgroundColor = 'yellow';
        } else {
            alert("Книга не найдена!");
        }
    }
});

renderBooks();