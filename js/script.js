const API_BASE_URL = 'https://railway-express-production-5e55.up.railway.app';

async function fetchBooks() {
  const bookList = document.getElementById('books-list');
  try {
    const response = await fetch(`${API_BASE_URL}/books`)
    const books = await response.json();
    const bookListElement = books.map((book) => {
      return `
        <li>${book.title} by ${book.author}</li>
      `;
    });

    bookList.innerHTML = bookListElement
  } catch (err) {
    console.error(err);
  }
};

fetchBooks();

async function addBook() {
  const title = document.getElementById('book-title').value;
  const author = document.getElementById('book-author').value;

  try {
    await fetch(`${API_BASE_URL}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, author })
    });
  } catch(err) {
    console.error(err);
  } finally {
    fetchBooks();
  }
}