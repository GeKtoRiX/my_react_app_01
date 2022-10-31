// Загрузка хука отслеживания состояний компонента.
import { useState } from "react";
// REACT ICONS.
import { RiRefreshLine, RiDeleteBin2Line } from "react-icons/ri";
// Создание случайных идентификаторов.
import { v4 as uuidv4 } from "uuid";
// Визуальное отображение(рендеринг) каждого toDo элемента.
import ToDoForm from "./toDoApp/ToDoForm";
// Создание массива toDo комонентов на основе массива задач пользователя.
import ToDoList from "./toDoApp/ToDoList";
// Стили для рендеренга главного компонента сайта.
import "../styles/scss/index.scss";
// Главная функция рендеринга элементов сайта react приложения.
function App() {
  // =======[HOOKS]=======
  /* 
  Хук отслеживания изменения состояния массива задач(объектов) пользователя. 
  */
  const [toDoArr, addToDo] = useState([]);
  // =======[_END_]=======

  // =======[HANDLERS]=======
  /* 
  Обработчик добавления новой задачи пользователя(объект).
  */
  const addNewToDoHandler = (newToDo) => {
    const newLocalToDo = {
      text: newToDo,
      isCompleted: false,
      id: uuidv4(),
    };
    // Массив предыдущих задач и текущей новой задачи пользователя.
    addToDo([...toDoArr, newLocalToDo]);
  };
  /* 
  Обработчик удаления задачи пользователя. 
  */
  const deleteToDoHandler = (toDoID) => {
    // Отсеивание элементов по совпадению индексов.
    addToDo(toDoArr.filter((toDo) => toDo.id !== toDoID));
  };
  /* 
  Обработчик переключения статуса задачи пользователя */
  const toggleToDoHandler = (toDoID) => {
    addToDo(
      toDoArr.map((toDo) =>
        toDo.id === toDoID
          ? // Возврат новой(модифицированной) задачи пользователя(isCompleted:true).
            { ...toDo, isCompleted: !toDo.isCompleted }
          : // Возврат исходной(не модифицированной) задачи пользователя(isCompleted:false).
            { ...toDo }
      )
    );
  };
  // =======[___END___]=======
  return (
    <div className="app">
      <h1>ToDo Application</h1>
      <ToDoForm addNewToDo={addNewToDoHandler} />
      {!toDoArr.length ? (
        <h2>ToDo list is empty</h2>
      ) : (
        <>
          <div className="buttons-std">
            <button className={`button-std icon-std button-app`}>
              <RiRefreshLine />
            </button>
            <button className="button-std icon-std button-app">
              <RiDeleteBin2Line />
            </button>
          </div>
          <ToDoList
            toDoArr={toDoArr}
            deleteToDo={deleteToDoHandler}
            toggleToDo={toggleToDoHandler}
          />
        </>
      )}
    </div>
  );
}
export default App;
