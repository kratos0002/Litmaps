document.addEventListener('DOMContentLoaded', () => {
    const books = [
        { title: 'Book One', author: 'Author A' },
        { title: 'Book Two', author: 'Author B' },
        { title: 'Book Three', author: 'Author C' }
    ];

    const bookGrid = document.getElementById('book-grid');

    books.forEach(book => {
        const div = document.createElement('div');
        div.className = 'book-item';
        div.innerHTML = `<h3>${book.title}</h3><p>by ${book.author}</p>`;
        bookGrid.appendChild(div);
    });
});
