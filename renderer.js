const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./task.db");

// Crear la tabla si no existe
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            task TEXT,
            completed INTEGERnpm
        )
    `, (err) => {
        if (err) {
            console.error("Error al crear la tabla:", err.message);
        } else {
            console.log("Tabla 'tasks' creada o ya existe.");
        }
    });
});

// Agregar tarea al hacer clic en el botón
document.getElementById("add-task").addEventListener("click", function () {
    const task = document.getElementById("task-input").value;

    if (task) {
        db.run("INSERT INTO tasks (task, completed) VALUES (?, ?)", [task, 0], function (err) {
            if (err) {
                return console.error("Error al agregar la tarea:", err.message);
            }

            console.log(`Tarea agregada con el ID ${this.lastID}`);
            loadTasks();
        });

        document.getElementById("task-input").value = ""; // Limpiar el campo de entrada
    }
});

// Función para cargar las tareas desde la base de datos
function loadTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = ""; // Limpiar la lista antes de cargar

    db.all("SELECT * FROM tasks", [], (err, rows) => {
        if (err) {
            return console.error("Error al cargar las tareas:", err.message);
        }

        rows.forEach((row) => {
            let li = document.createElement("li");
            li.textContent = row.task;
            taskList.appendChild(li);
        });
    });
}

// Cargar las tareas al iniciar
loadTasks();