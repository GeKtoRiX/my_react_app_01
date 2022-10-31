// Импорт иконок из библиотеки react-icons.
import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
// Отдельная задача из списка.
const ToDo = ({ toDo, deleteToDo, toggleToDo }) => {
  return (
    // При двойном нажатии левой кнопки мыши происходит пробрасывание индекса текущего компонента для его удаления из списка заданий.
    <div className={`toDo ${toDo.isCompleted ? "toDoDisable" : ""}`}>
      <RiTodoFill
        className={`icon-std ${toDo.isCompleted ? "icon-std-disable" : ""}`}
      />
      <div className="toDo__text">{toDo.text}</div>
      <button
        onClick={() => deleteToDo(toDo.id)}
        className={`button-std icon-std button-toDoClear ${
          toDo.isCompleted ? "icon-std-disable" : ""
        }`}
      >
        <RiDeleteBin2Line />
      </button>
      <button
        onClick={() => toggleToDo(toDo.id)}
        className={`button-std icon-std button-toDoCheck ${
          toDo.isCompleted ? "icon-std-disable" : ""
        }`}
      >
        <FaCheck />
      </button>
    </div>
  );
};

export default ToDo;
