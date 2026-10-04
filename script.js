let books = [
    {
        title: "On the Origin of Species",
        author: "Charles Darwin",
        category: "Science",
        year: 1859,
        price: 15000
    },

    {
        title: "A Brief History of Time ",
        author: "Stephen Hawking",
        category: "Science",
        year: 1988,
        price: 23000
    },

    {
        title: "Hamlet",
        author: "William Shakespeare",
        category: "Literature",
        year: 1601,
        price: 26000
    }
];

const list = document.querySelector("#book-list");

function render() {
    list.innerHTML = "";

    books.forEach(function (book, index) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.category}</td>
            <td>${book.year}</td>
            <td>${book.price}</td>
            <td>
                <button class="btn btn-sm btn-warning edit"
                    data-index="${index}">
                    Edit
                </button>

                <button class="btn btn-sm btn-danger delete"
                    data-index="${index}">
                    Delete
                </button>
            </td>
        `;
        list.appendChild(tr);
    });
}

render();