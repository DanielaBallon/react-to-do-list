import { useContext } from "react";
import { TaskContext } from "../context/TaskContext.jsx";
import { RiDeleteBinLine } from "react-icons/ri";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md  ">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button
        className=" top-0 right-0 bg-red-500 px-2 py-1 rounded-md mt-4 text-white font-bold hover:bg-red-400 "
        onClick={() => deleteTask(task.id)}
      >
        <RiDeleteBinLine />
      </button>
    </div>
  );
}

export default TaskCard;
