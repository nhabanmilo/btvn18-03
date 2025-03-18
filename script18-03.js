let tasks = [];

        function addTask() {
            let taskInput = document.getElementById("taskInput").value.trim();
            if (taskInput === "") {
                alert("Vui lòng nhập công việc!");
                return;
            }
            tasks.push(taskInput);
            document.getElementById("taskInput").value = "";
            renderTasks();
        }

        function renderTasks() {
            let taskList = document.getElementById("taskList");
            taskList.innerHTML = "";
            tasks.forEach((task, index) => {
                taskList.innerHTML += `<li>${task} 
                    <button onclick="editTask(${index})">Sửa</button>
                    <button onclick="deleteTask(${index})">Xóa</button>
                </li>`;
            });
        }

        function editTask(index) {
            let newTask = prompt("Nhập tên công việc mới:", tasks[index]);
            if (newTask !== null && newTask.trim() !== "") {
                tasks[index] = newTask.trim();
                renderTasks();
            }
        }

        function deleteTask(index) {
            if (confirm("Bạn có chắc chắn muốn xóa?")) {
                tasks.splice(index, 1);
                renderTasks();
            }
        }  