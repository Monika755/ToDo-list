function addTask() {
    const taskInput = document.getElementById("inputText");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function() {
        li.remove();
    };
    li.appendChild(deleteBtn);

    li.onclick = function() {
        li.classList.toggle("completed");
    };

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}