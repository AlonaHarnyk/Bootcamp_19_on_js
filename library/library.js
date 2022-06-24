let initialData = [
  {
    id: "1",
    title: `Apple. Эволюция компьютера`,
    author: `Владимир Невзоров`,
    img: `https://bukva.ua/img/products/449/449532_200.jpg`,
    plot: `Богато иллюстрированный хронологический справочник по истории компьютеров, в котором увлекательно 
    и в структурированном виде изложена информация о создании и развитии техники Apple на фоне истории 
    персональных компьютеров в целом.
    В книге даны описания десятков наиболее значимых моделей устройств как Apple, так и других производителей, 
    сопровождающиеся большим количеством оригинальных студийных фотографий.
    Книга предназначена для широкого круга читателей, интересующихся историей электроники. 
    Она также может послужить источником вдохновения для дизайнеров, маркетологов и предпринимателей.`,
  },
  {
    id: "2",
    title: `Как объяснить ребенку информатику`,
    author: `Кэрол Вордерман`,
    img: `https://bukva.ua/img/products/480/480030_200.jpg`,
    plot: `Иллюстрированная энциклопедия в формате инфографики о технических, социальных и культурных аспектах 
    в информатике. Пошагово объясняет, как детям максимально эффективно использовать компьютеры и интернет-сервисы, 
    оставаясь в безопасности. 
    Книга рассказывает обо всем: от хранения данных до жизни в интернет-пространстве, 
    от программирования до компьютерных атак. О том, как компьютеры функционируют, о современном программном 
    обеспечении, устройстве Интернета и цифровом этикете. Все концепты - от хакера до биткоина - 
    объясняются наглядно с помощью иллюстраций и схем.`,
  },
  {
    id: "3",
    title: `Путь скрам-мастера. #ScrumMasterWay`,
    author: `Зузана Шохова`,
    img: `https://bukva.ua/img/products/480/480090_200.jpg`,
    plot: `Эта книга поможет вам стать выдающимся скрам-мастером и добиться отличных результатов с вашей командой. 
    Она иллюстрированная и легкая для восприятия - вы сможете прочитать ее за выходные, а пользоваться полученными 
    знаниями будете в течение всей карьеры.
    Основываясь на 15-летнем опыте, Зузана Шохова рассказывает, какие роли и обязанности есть у скрам-мастера, 
    как ему решать повседневные задачи, какие компетенции нужны, чтобы стать выдающимся скрам-мастером, 
    какими инструментами ему нужно пользоваться.`,
  },
];

// const dataFromLS = localStorage.getItem("books")
// console.log(dataFromLS)
// if (dataFromLS === null) {
//   localStorage.setItem("books", JSON.stringify(books));
// }

if (!localStorage.getItem("books")) {
  localStorage.setItem("books", JSON.stringify(initialData));
}

const root = document.querySelector("#root");
const leftDiv = document.createElement("div");
const rightDiv = document.createElement("div");
root.append(leftDiv, rightDiv);
leftDiv.classList.add("leftDiv");
rightDiv.classList.add("rightDiv");
const mainTitle = document.createElement("h1");
mainTitle.textContent = "LIBRARY";
const booksList = document.createElement("ul");
const addButton = document.createElement("button");
addButton.textContent = "ADD BOOK";
leftDiv.append(mainTitle, booksList, addButton);

function renderBooksList() {
  const books = JSON.parse(localStorage.getItem("books"));
  const markup = books
    .map(
      ({ title, id }) =>
        `<li id=${id}><p class='title'>${title}</p><button class='delete'>Delete</button><button class='edit'>Edit</button></li>`
    )
    .join("");
  booksList.insertAdjacentHTML("afterbegin", markup);
  const bookTitles = document.querySelectorAll(".title");
  bookTitles.forEach((elem) => elem.addEventListener("click", renderPreview));
  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((elem) => elem.addEventListener("click", deleteBook));
  const editButtons = document.querySelectorAll(".edit");
  editButtons.forEach((elem) => elem.addEventListener("click", editBook));
}

renderBooksList();

function renderPreview(event) {
  const books = JSON.parse(localStorage.getItem("books"));
  const book = books.find(({ title }) => title === event.target.textContent);
  const markup = createPreviewMarkup(book);
  rightDiv.innerHTML = "";
  rightDiv.insertAdjacentHTML("afterbegin", markup);
}

function createPreviewMarkup({ title, author, img, plot, id }) {
  return `<div id=${id}><h2>${title}</h2><p>${author}</p><img src="${img}" alt='${title}'><p>${plot}</p></div>`;
}

addButton.addEventListener("click", addBook);

function addBook() {
  const markup = createFormMarkup();
  rightDiv.innerHTML = "";
  rightDiv.insertAdjacentHTML("afterbegin", markup);
  const newBook = {
    id: `${Date.now()}`,
  };
  const form = document.querySelector("form");
  fillObject(newBook, form);
  form.addEventListener("submit", saveBook);

  function saveBook(event) {
    event.preventDefault();
    if (
      Object.keys(newBook).length !== 5 ||
      Object.values(newBook).some((value) => value.trim() === "")
    ) {
      alert("Fill all inputs, please");
      return;
    }
    form.reset();
    const books = JSON.parse(localStorage.getItem("books"));
    books.push(newBook);
    localStorage.setItem("books", JSON.stringify(books));
    booksList.innerHTML = "";
    renderBooksList();
    const markup = createPreviewMarkup(newBook);
    rightDiv.innerHTML = "";
    rightDiv.insertAdjacentHTML("afterbegin", markup);
  }
}

function createFormMarkup() {
  return `<form>
  <label>Title<input type="text" name="title"></label>
  <label>Author<input  type="text" name="author"></label>
  <label>Image<input  type="text" name="img"></label>
  <label>Plot<input  type="text" name="plot"></label>
  <button class="save">Save</button>
</form>`;
}

function fillObject(book, form) {
  const data = [...form.elements];
  data.forEach((input) =>
    input.addEventListener("change", (event) => {
      book[event.target.name] = event.target.value;
    })
  );
}

function deleteBook(event) {
  const books = JSON.parse(localStorage.getItem("books"));
  const filteredBooks = books.filter(
    (elem) => elem.id !== event.target.parentNode.id
  );
  localStorage.setItem("books", JSON.stringify(filteredBooks));
  booksList.innerHTML = "";
  renderBooksList();
  if (
    rightDiv.firstElementChild &&
    event.target.parentNode.id === rightDiv.firstElementChild.id
  ) {
    rightDiv.innerHTML = "";
  }
}

function editBook(event) {
  const books = JSON.parse(localStorage.getItem('books'));
  const book = books.find(book => book.id === event.target.parentNode.id)
  console.log(book)
}
