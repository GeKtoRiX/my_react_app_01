// Загрузка хука отслеживания состояний компонента.
import { useState } from "react";
//
import { BsArrowUpCircleFill } from "react-icons/bs";
// Форма добавления пользовательской задачи в существующий список.
const ToDoForm = ({ addNewToDo }) => {
  // Доступ к данным формы при их отправки.
  const onSubmitHandler = (event) => {
    // Отключение действий формы по умолчанию(переход на другую страницу).
    event.preventDefault();
    // Запрет добавления пустой строки в массив задач пользователя.
    if (textToDo) {
      if (textToDo.length <= 45) {
        // Добавление новой задачи пользователя.
        addNewToDo(textToDo);
        // Сброс текста в области ввода.
        setTextToDo("");
      } else {
        addNewToDo("ooops....your task was too long... (|) (°,,,,°) (|)");
      }
    }
  };
  // Хук отслеживания изменений строки текущего состояния задачи пользователя(toDo).
  const [textToDo, setTextToDo] = useState("");
  return (
    // Форма отправки и область ввода данных.
    <form className="form" onSubmit={onSubmitHandler}>
      <input
        className="input"
        // Отслеживание состояния области ввода путем доступа к данным.
        onChange={(event) => setTextToDo(event.target.value)}
        // Отображение строки задачи в области ввода.
        /* 
        Значение строки в области ввода зависит от строки отслеживания состояния задачи пользователя.
        Сначала фиксируется изменение состояния и только потом данные из этой переменной отображаются в области ввода.
        */
        value={textToDo}
        // Отображения текста в области ввода при пустой строке.
        placeholder="Enter new toDo"
        // Выравнивание текста внутри области ввода по центру.
        style={{ textAlign: "center" }}
      ></input>
      <button className="button-std button-toDoForm" type="Submit">
        <BsArrowUpCircleFill />
      </button>
    </form>
  );
};

export default ToDoForm;
