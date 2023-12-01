// Example of dynamically loading book data
document.addEventListener('DOMContentLoaded', function() {
    const books = [
        {
            title: "14 Peaks",
            image: "https://upload.wikimedia.org/wikipedia/en/e/ed/14_Peaks-_Nothing_Is_Impossible.jpg",
            author: "Nirmal Purja"
        },
        {
            title: "On the Road",
            image: "https://upload.wikimedia.org/wikipedia/en/8/8a/OnTheRoad.jpg",
            author: "Jack Kerouac"
        },
        {
            title: "Zen and the Art of Motorcycle Maintenance",
            image: "https://upload.wikimedia.org/wikipedia/en/8/85/Zen_motorcycle.jpg",
            author: "Robert M. Pirsig"
        }
    ];

    const container = document.getElementById('book-container');
    container.innerHTML = '';

    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';
        bookDiv.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
        `;
        container.appendChild(bookDiv);
    });
});
