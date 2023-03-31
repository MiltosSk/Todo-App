const taskInput = document.querySelector(".task-input input"),
filters = document.querySelector(".filters span"),
clearAll = document.querySelector(".clear-btn"),
taskBox = document.querySelector(".task-box")

let editId,
isEditTask = false,
todos = JSON.parse(localStorage.getItem("todo-list"));