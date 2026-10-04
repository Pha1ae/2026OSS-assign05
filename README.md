# Weekly Review

## Deployment

- Vercel URL: `https://2026oss-assign05-mu.vercel.app/`

The project was deployed using Vercel and can be accessed through the URL above.

---

## Key Learning

This week, I learned three main topics:

1. How to use JavaScript DOM methods to read and modify HTML elements.
2. How to use events such as `submit` and `click` to make a web page interactive.
3. How to use a JavaScript Array as a simple data store and implement CRUD operations.

---

## CRUD Service

### Service Theme

I created a **Book Management Service**.

### Data Fields

Each book contains the following fields:

- Title
- Author
- Category
- Year
- Price

### Create

The user enters book information in the form.

After validation, the new book is added to the `books` Array using:

```javascript
books.push(book);
```

The form is then cleared and `render()` updates the table.

### Read

The `render()` function reads all books from the `books` Array and displays them in the table.

```javascript
books.forEach(function (book, index) {
    ...
});
```

`render()` is called when the page first loads and after Create, Update, and Delete operations.

### Update

When the Edit button is clicked, the selected book data is copied into the form.

The index of the selected book is stored in `editingIndex`.

After editing and validation, the book in the Array is replaced:

```javascript
books[editingIndex] = book;
```

Then the table is updated with `render()`.

### Delete

Each book has a Delete button.

Before deleting, `confirm()` asks the user for confirmation.

```javascript
confirm("Are you sure you want to delete this book?");
```

If the user confirms, the selected book is removed from the Array using:

```javascript
books.splice(index, 1);
```

Then `render()` updates the table.

---

## JavaScript

The main JavaScript features used in this assignment were:

- `querySelector()` to select HTML elements
- `addEventListener()` to handle user events
- `createElement()` to create table rows
- `appendChild()` to add elements to the page
- JavaScript `Array` to store book data
- `forEach()` to display Array data
- `push()` to add new data
- `splice()` to delete data
- `confirm()` to confirm deletion
- `render()` to update the table
- Form validation using `if` statements
- `trim()` and `Number()` to process input values

---

## AI / Search Usage

AI was used in many parts of this assignment.

It helped me understand how each function should be designed, which features should be grouped into the same function, and which parts should be separated.

AI was also helpful when organizing the JavaScript file after all CRUD functions had been implemented. Instead of only generating code, I mainly used it to check the structure of my solution and understand how different functions should work together.

---

## Problem & Solution

While writing the code, I sometimes made small mistakes such as spelling errors, incorrect variable names, or missing code.

These problems were often difficult to notice immediately because the overall logic looked correct.

I used AI to help check the code and locate these small errors. After finding the problem, I corrected the code and tested it again in the browser.

---

## Reflection

JavaScript is difficult not only because of its syntax, but also because it requires planning the program structure before writing the code.

During this assignment, I found that it was important to clearly decide what each function should do and how different functions should work together.

For example, the `render()` function only displays the current Array data, while the event handlers are responsible for Create, Update, and Delete operations.

I think learning how to organize this logic clearly is one of the most important parts of learning JavaScript.