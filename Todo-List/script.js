/* let render = document.querySelector(".render");
let input = document.querySelector(".input");

function addTodo() {
  let todo = `<div class="task">
  <div>
    <img src="./unchecked.svg"  alt="" class="checked">
  </div>
  <div class="todo">${input.value}</div>
  <div><img src="./del.svg" alt="" class="delete"></div>
</div>`;
  render.innerHTML += todo;
  input.value = "";

  let checkedStatus = document.querySelector(".checked");

  checkedStatus.addEventListener("click", function () {
  if (checkedStatus.src === "./checked.svg") {
    checkedStatus.src = "./unchecked.svg";
  } else if ((checkedStatus.src = "./unchecked.svg")) {
    checkedStatus.src = "./checked.svg";
  }
});
} */


let render = document.querySelector(".render");
let input = document.querySelector(".input");

function addTodo(){


  let task = document.createElement("div")
  task.classList.add("task")
  render.append(task)

  
  let checkBox = document.createElement("div")
  checkBox.classList.add("checkBox")
  task.append(checkBox)

  let boxImage = document.createElement("img")
  boxImage.src = "./unchecked.svg";
  boxImage.classList.add("unchecked")
  checkBox.append(boxImage)

  let todo = document.createElement("div")
  todo.classList.add("todo")
  task.append(todo)

  let del = document.createElement("div")
  del.classList.add("delete")
  task.append(del)

  let delImage = document.createElement("img")
  delImage.src = "./del.svg";
  delImage.classList.add("delete")
  del.append(delImage)
  

  todo.innerText += input.value
  input.value = ""

  boxImage.addEventListener("click", function(){
    if(boxImage.src.endsWith("unchecked.svg")){
      boxImage.src = "./checked.svg";
      boxImage.classList.remove("unchecked")
      boxImage.classList.add("checked")
      console.log("unchecked");
      
    }else if(boxImage.src.endsWith("checked.svg")){
      boxImage.src = "./unchecked.svg";
      boxImage.classList.remove("checked")
      boxImage.classList.add("unchecked")
      console.log("checked");
      
    }
    
  })

  delImage.addEventListener("click", function(){
    task.remove()
  })
}

function handleKeyDown(event){
  if(event.key === "Enter"){
    addTodo()
  }
}

