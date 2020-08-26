var todoList = new Array();


function removeTodo() {
    var deletedActionIndex = parseInt(prompt("Enter index of deleted item"));
    if (deletedActionIndex > todoList.length || deletedActionIndex < 0) {
        console.log("Enter valid index");
    } else {
        var deletedAction = todoList.pop(deletedActionIndex);
        console.log("Deleted Item: " + deletedAction);
    }
}


function listTodos() {
    console.log("**********");
    todoList.forEach(function (action, i) {
        console.log(i + ": " + todoList);
    });
    console.log("**********");
}


function addTodos() {
    var newList = prompt("Enter todo: ");
    todoList.push(newList);
    console.log(todoList);
}


function handleAction() {
    while (true) {
        var action = prompt("Write an action: ");
        if (action === "new") {
            addTodos();
        } else if (action === "list") {
            listTodos();
        } else if (action === "delete") {
            removeTodo();
        } else if (action === "quit") {
            break;
        } else {
            console.log("Write valid action.");
        }
    }
};

$(document).ready(handleAction);