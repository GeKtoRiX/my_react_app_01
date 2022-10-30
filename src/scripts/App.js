// Загрузка хука отслеживания состояний компонента.
import { useState } from "react";
// Визуальное отображение(рендеринг) каждого toDo элемента.
import ToDoForm from "./toDoApp/ToDoForm";
// Создание массива toDo комонентов на основе массива задач пользователя.
import ToDoList from "./toDoApp/ToDoList";
// Стили для рендеренга главного компонента сайта.
import "../styles/scss/index.scss";
// Главная функция рендеринга элементов сайта react приложения.
function App() {
  // Хук отслеживания изменения состояния массива задач пользователя.
  const [toDoArr, addToDo] = useState([]);
  // Обработчик добавления новой задачи пользователя.
  const addNewToDoHandler = (newToDo) => {
    // Массив предыдущих задач и текущей новой задачи пользователя.
    addToDo([...toDoArr, newToDo]);
  };
  // Обработчик удаления задачи пользователя.
  const deleteToDoHandler = (index) => {
    // Отсеивание элементов по совпадению индексов.
    addToDo(toDoArr.filter((_, idx) => idx !== index));
  };
  return (
    <div className="app">
      <h1>ToDo Application</h1>
      <ToDoForm addNewToDo={addNewToDoHandler} />
      {!toDoArr.length ? (
        <h2>ToDo list is empty</h2>
      ) : (
        <ToDoList toDoArr={toDoArr} deleteToDo={deleteToDoHandler} />
      )}
    </div>
  );
}
export default App;
