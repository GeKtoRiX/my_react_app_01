// Компонент отдельных задач пользователя.
import ToDo from "./ToDo";
const ToDoList = ({ toDoArr, deleteToDo }) => {
  // Создание массива toDo компонентов на основе массива "задач для выполнения".
  /*
  Каждый компонент toDo получает свою "задачу для выполнения"(аргумент) для ее дальнейшей обработки. 
  Кол-во toDo компонентов равно кол-ву задач для выпронения в массиве toDoArr.
  */
  return toDoArr.map((toDo, index) => (
    <ToDo toDo={toDo} deleteToDo={deleteToDo} index={index} key={index} />
  ));
};

export default ToDoList;
