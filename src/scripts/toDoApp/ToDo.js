// Импорт иконки из библиотеки react-icons.
import { RiTodoFill } from "react-icons/ri";
// Отдельная задача из списка.
const ToDo = ({ toDo, deleteToDo, index }) => {
  return (
    // При двойном нажатии левой кнопки мыши происходит пробрасывание индекса текущего компонента для его удаления из списка заданий.
    <div onDoubleClick={() => deleteToDo(index)} className="toDo">
      <div className="toDo__text">
      <RiTodoFill style={{marginRight:"1rem", fontSize:"1.8rem" ,color:"teal",}} />  
      {toDo}</div>
    </div>
  );
};

export default ToDo;
