let input = document.querySelector(".input");
let render = document.querySelector(".render");
let checkedStatus = true;
let checked = `<img src="./checked.svg"  alt="" class="checked">`;
let unchecked = `<img src="./unchecked.svg" alt=""  class="unchecked">`;

function addTodo() {
  render.innerHTML += `<div class="task"><div>${
    checkedStatus ? checked : unchecked
  }</div>
          <div class="todo">${input.value}</div>
          <div><img src="./del.svg" class="delete" alt=""></div></div>`;
  input.value = "";
}


checked.addEve