// Загрузка хука отслеживания состояний компонента.
import { useState } from "react";
// Создание случайных идентификаторов.
import { v4 as uuidv4 } from "uuid";
// Визуальное отображение(рендеринг) каждого toDo элемента.
import ToDoForm from "./toDoApp/ToDoForm";
// Создание массива toDo комонентов на основе массива задач пользователя.
import ToDoList from "./toDoApp/ToDoList";
// Стили для рендеренга главного компонента сайта.
import "../styles/scss/index.scss";
// REACT ICONS.
import { RiCreativeCommonsFill } from "react-icons/ri";
// Главная функция рендеринга элементов сайта react приложения.
function App() {
  // Хук отслеживания изменения состояния массива задач пользователя.
  const [toDoArr, addToDo] = useState([]);
  // Обработчик добавления новой задачи пользователя.
  const addNewToDoHandler = (newToDo) => {
    const newlocalToDo = {
      text: newToDo,
      isCompleted: false,
      id: uuidv4(),
    };
    console.log(newlocalToDo);
    // Массив предыдущих задач и текущей новой задачи пользователя.
    addToDo([...toDoArr, newlocalToDo]);
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
        <>
          <div className="buttons-std">
            <button className="button-std">
              <RiCreativeCommonsFill />
            </button>
            <button className="button-std">
              <RiCreativeCommonsFill />
            </button>
          </div>
          <ToDoList toDoArr={toDoArr} deleteToDo={deleteToDoHandler} />
        </>
      )}
    </div>
  );
}
export default App;
