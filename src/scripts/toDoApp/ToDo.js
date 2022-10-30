// Импорт иконки из библиотеки react-icons.
import { RiTodoFill } from "react-icons/ri";
// Отдельная задача из списка.
const ToDo = ({ toDo, deleteToDo, index }) => {
  return (
    // При двойном нажатии левой кнопки мыши происходит пробрасывание индекса текущего компонента для его удаления из списка заданий.
    <div onDoubleClick={() => deleteToDo(index)} className="toDo">
      <RiTodoFill
        style={{ margin: "0 0.5rem", fontSize: "1.8rem", color: "teal" }}
      />
      <div className="toDo__text">{toDo}</div>
      <button className="">
        {" "}
        <RiTodoFill
          style={{
            fontSize: "1.8rem",
            color: "lightgrey",
          }}
        />{" "}
      </button>
      <button className="">
        {" "}
        <RiTodoFill
          style={{
            fontSize: "1.8rem",
            color: "lightgrey",
          }}
        />{" "}
      </button>
    </div>
  );
};

export default ToDo;
