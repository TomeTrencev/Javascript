const todoInput = document.querySelector(".todo-input");
const todobtn= document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");



todobtn.addEventListener("click",addTodo);
todoList.addEventListener("click", deleteCheck);




function addTodo(event){
    event.preventDefault();
    
    //create div for todo
    const todoDiv = document.createElement ("div");
    todoDiv.classList.add("todo");
    //create li
    const newTodo= document.createElement("li");
    newTodo.innerText=todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //completed button
    const checkButton= document.createElement("button");
    checkButton.innerHTML= '<i class= "fas fa-check" ></i>';
    checkButton.classList.add("check-button");
    todoDiv.appendChild(checkButton);
    //delete button
    const deleteButton= document.createElement("button");
    deleteButton.innerHTML= '<i class= "fas fa-trash" ></i>';
    deleteButton.classList.add("delete-button");
    todoDiv.appendChild(deleteButton);
    //appent to list
    todoList.appendChild(todoDiv);
    //clear to do input value
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    if(item.classList[0] ==="delete-button"){
        const todo= item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("trasitionend",function(){
           todo.remove();
        });
    }


    //check mark
    if(item.classList[0] === "check-button"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}