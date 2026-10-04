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
const form = document.querySelector("#book-form");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const category = document.querySelector("#category");
const year = document.querySelector("#year");
const price = document.querySelector("#price");

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

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (
        title.value.trim() === "" ||
        author.value.trim() === "" ||
        category.value === "" ||
        year.value === "" ||
        price.value === ""
    ) {
        alert("Please fill in all fields.");
        return;
    }

    if (title.value.trim().length < 2) {
        alert("Title must be at least 2 characters.");
        title.focus();
        return;
    }

    if (Number(price.value) <= 0) {
        alert("Price must be greater than 0.");
        price.focus();
        return;
    }

    if (Number(year.value) < 1400 || Number(year.value) > 2100) {
        alert("Year must be between 1400 and 2100.");
        year.focus();
        return;
    }


    const book = {
        title: title.value.trim(),
        author: author.value.trim(),
        category: category.value,
        year: Number(year.value),
        price: Number(price.value)
    };

        books.push(book);

    form.reset();
    render();
});

render();

