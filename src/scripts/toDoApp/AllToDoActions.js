// REACT ICONS.
import { RiRefreshLine, RiDeleteBin2Line } from "react-icons/ri";
const AllToDoActions = ({ deleteAllToDo, deleteDoneToDo, doneToDoNums }) => {
  return (
    <>
      <div className="buttons-std">
        <button
          onClick={() => deleteAllToDo([])}
          className={`button-std icon-std buttons-allToDo `}
        >
          <RiRefreshLine />
        </button>
        <button
          onClick={() => deleteDoneToDo()}
          className={`button-std icon-std buttons-allToDo ${
            !doneToDoNums ? "button-noneDoneTodo" : ""
          }`}
        >
          <RiDeleteBin2Line />
        </button>
      </div>
    </>
  );
};

export default AllToDoActions;
