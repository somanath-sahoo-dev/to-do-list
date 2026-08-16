// let ul = document.querySelector("ul");
let task = document.querySelector("#task");
let add = document.querySelector("#add");
let div = document.querySelector(".div");

add.addEventListener("click", function() {
    //New Task
    let newTask = task.value;
    if(newTask == "") {
        alert("Please enter a task");
        return;
    }
    let newDiv = document.createElement("div");
    newDiv.classList.add("div");
    let newInp = document.createElement("input");
    newInp.type = "checkbox";
    newInp.id = newTask;
    let newLabel = document.createElement("label");
    newLabel.htmlFor = newTask;
    newLabel.innerText = newTask;
    //New Delete Button
    let newDel = document.createElement("button");
    newDel.innerText = "Delete";
    newDel.classList.add("delete");

    newDel.addEventListener("click", function() {
        newDiv.remove();
    })

    newDiv.appendChild(newInp);
    newDiv.appendChild(newLabel);
    newDiv.appendChild(newDel);

    newInp.addEventListener("change", function() {
        newDiv.remove();
    });

    document.body.appendChild(newDiv);

    task.value = "";
    
})

function taskCheck() {
    
}