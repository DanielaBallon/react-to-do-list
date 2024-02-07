import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext.jsx";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };
  return (
    <div className="container max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4  ">
        <h1 className="text-2xl font-bold text-white mb-3">Create task</h1>
        <input
          type="text"
          placeholder="Task title"
          value={title}
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-4"
          required
        />
        <textarea
          placeholder="Task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-4"
          required
        />
        <button
          className="bg-zinc-900 p-3 py-1 text-white font-bold hover:bg-zinc-800 rounded-md w-full"
          type="submit"
        >
          Add task
        </button>
      </form>
    </div>
  );
}
export default TaskForm;
