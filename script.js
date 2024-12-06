let inputBox = document.querySelector("input");
let add = document.querySelector(".add-btn");
let list = document.querySelector(".list-items");
let currentDate = document.querySelector(".date");

// Display current date
const displayDate = () => {
  let date = new Date();
  date = date.toDateString();
  currentDate.textContent = date;
};
// On window reload or refresh displayDate function called
window.onload = () => {
  displayDate();
};

// Add event listener on add task button
add.addEventListener("click", (e) => {
  e.preventDefault();
  let li = document.createElement("li");
  let divTag = document.createElement("div");
  divTag.id = "dtag";
  // let checkBox = document.createElement("input");
  // checkBox.type = "checkbox";
  // checkBox.id="box"
  // divTag.appendChild(checkBox)
  // li.appendChild(divTag);
  let span = document.createElement("span");
  span.textContent = inputBox.value;
  divTag.appendChild(span);
  li.appendChild(divTag);

  let div = document.createElement("div");

  let editBtn = document.createElement("button");
  editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
  div.appendChild(editBtn);

  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  div.appendChild(deleteBtn);
  li.appendChild(div);
  list.appendChild(li);
  inputBox.value = "";

  let inputField = document.createElement("input");

  let saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";

  let cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Cancel";

  // Add event listener on edit button
  editBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let temp = span.textContent;
    li.textContent = "";
    li.appendChild(inputField);
    inputField.value = temp;
    inputField.focus();
    li.appendChild(saveBtn);
    li.appendChild(cancelBtn);
  });

  // Add event listener on save button
  saveBtn.addEventListener("click", (e) => {
    e.preventDefault();
    li.textContent = "";
    span.textContent = inputField.value;
    li.appendChild(span);
    div.appendChild(editBtn);
    div.appendChild(deleteBtn);
    li.appendChild(div);
  });

  // Add event listener on cancel button
  cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let temp = inputField.value;
    li.textContent = "";
    span.textContent = temp;
    li.appendChild(span);
    div.appendChild(editBtn);
    div.appendChild(deleteBtn);
    li.appendChild(div);
  });

  // Add event listner on delete button
  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let msg = confirm("Do you want to delete!");
    if (msg == true) {
      li.remove();
    }
  });
});
