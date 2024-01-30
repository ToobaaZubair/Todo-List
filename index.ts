import inquirer from "inquirer";

const todos: string[] = ["Wake Up", "Prayer Time", "Breakfast"]
const todoList = await inquirer.prompt([{
    type: "list",
    name: "Actions",
    message: "Which Action do you want to perform",
    choices: ["Add", "Remove", "Todo List", "Exit"]

}])
if (todoList.Actions === "Add") {
    const todoAdd = await inquirer.prompt([{
        type: "input",
        name: "addtodo",
        message: "Write what you want to add in todo list"
    }])
    let newTodo = todos.push(todoAdd.addtodo)


    console.log(`Your New Todo List ${todos} `);

}
if (todoList.Actions === "Remove") {
    const todoRemove = await inquirer.prompt([{
        type: "list",
        name: "removetodo",
        message: "Which todo do You want to remove from your todo list",
        choices: todos
    }])
    const remove = todos.indexOf(todoRemove.removetodo)
    if (remove !== -1) {
        todos.splice(remove, 1)
        console.log("Removed Todo:", todoRemove.removetodo);
        console.log(`Todo list After Removal :-${todos}`);


    }
}
if (todoList.Actions === "Todo List") {
    console.log(todos);

}
if (todoList.Actions === "Exit") {
    console.log(`Good Bye!`);

}
