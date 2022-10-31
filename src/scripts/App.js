// Загрузка хука отслеживания состояний компонента.
import { useState } from "react";
// Создание случайных идентификаторов.
import { v4 as uuidv4 } from "uuid";
// Визуальное отображение двух главных кнопок очистки всего списка или выделенных элементов.
import AllToDoActions from "./toDoApp/AllToDoActions";
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
  Удаление выполненных задач 
  */
  const delDoneToDoHandler = () => {
    addToDo(toDoArr.filter((toDo) => !toDo.isCompleted));
  };
  /*   
Удаление всех задач пользователя из списка. 
*/
  const deleteAllToDoHandler = () => {
    addToDo([]);
  };
  /* 
  Обработчик переключения статуса задачи пользователя.
  */
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
  const doneToDoNums = toDoArr.filter((toDo) => toDo.isCompleted).length;
  return (
    <div className="app">
      <h1>ToDo Application</h1>
      <ToDoForm addNewToDo={addNewToDoHandler} />
      {!toDoArr.length ? (
        <h2>ToDo list is empty</h2>
      ) : (
        <>
          <AllToDoActions
            deleteAllToDo={deleteAllToDoHandler}
            deleteDoneToDo={delDoneToDoHandler}
            doneToDoNums={doneToDoNums}
          />
          <ToDoList
            toDoArr={toDoArr}
            deleteToDo={deleteToDoHandler}
            toggleToDo={toggleToDoHandler}
          />
          <h2>Completed tasks: {doneToDoNums}</h2>
        </>
      )}
    </div>
  );
}
export default App;
