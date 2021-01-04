//Date
function showDate(date) {
  let dates = date.getDate();
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let year = date.getFullYear();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thusday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[date.getMonth()];

  return `${day}, ${dates} ${month} ${year}, ${hours}:${minutes}`;
}

let currentDate = document.querySelector("h2.date");
let now = new Date();

currentDate.innerHTML = showDate(now);

//Task list

document.querySelector("form").addEventListener("submit", handleSubmitForm);

function handleSubmitForm(event) {
  event.preventDefault();
  let input = document.querySelector("input");

  if (input.value != "") addToDo(input.value);

  input.value = "";
}
function addToDo(todo) {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");

  li.innerHTML = `
    <span class="todo-item">${todo}</span>
    <button name="checkButton"><i class="fas fa-check-circle"></i></button>
    <button name="deleteButton"><i class="fas fa-trash"></i></button>
    
    `;

  li.classList.add("todo-list-item");
  ul.appendChild(li);
}

//Check & Remove buttons

document
  .querySelector("ul")
  .addEventListener("click", handleClickDeleteOrCheck);

function handleClickDeleteOrCheck(event) {
  if (event.target.name == "checkButton") checkTodo(event);
  if (event.target.name == "deleteButton") deleteTodo(event);
}

function checkTodo(event) {
  let item = event.target.parentNode;
  if (item.style.textDecoration == "line-through")
    item.style.textDecoration = "none";
  else item.style.textDecoration = "line-through";
}

function deleteTodo(event) {
  let item = event.target.parentNode;
  item.addEventListener("transitionend", function () {
    item.remove();
  });
  item.classList.add("todo-list-item-fall");
}

// Clear All Link

document.getElementById("clearAll").addEventListener("click", handleClearAll);

function handleClearAll(event) {
  document.querySelector("ul").innerHTML = "";
}
