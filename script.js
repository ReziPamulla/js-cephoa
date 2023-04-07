let todos = [];

function addTodo() {
  let jamMasuk =parseInt(document.getElementById("jam-masuk").value);
  let jamKeluar = parseInt(document.getElementById("jam-keluar").value);
  
  if (jamKeluar > 12 || jamMasuk > 12 || jamKeluar < 1 || jamMasuk < 1) {
    alert('Masukkan jam yang valid!');
    return;
  }

  const lamaBekerja = jamKeluar > jamMasuk ? jamKeluar - jamMasuk : 12 - jamMasuk + jamKeluar;
  const todo = [jamMasuk, jamKeluar, lamaBekerja+' jam'];
  todos.push(todo);
  render();
}
 
function render() {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const row = document.createElement("tr");
    todo.forEach((item) => {
      const cell = document.createElement("td");
      cell.textContent = item;
      row.appendChild(cell);
    });
    todoList.appendChild(row);
  });
}

function reset() {
  todos = [];
  render();
}