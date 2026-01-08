import { useState } from "react";
import { api } from "../api";

export default function TaskForm({ fetchTasks }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Low",
    dueDate: "",
    status: "Pending",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let err = {};
    if (!task.title.trim()) err.title = "Title is required";
    if (!task.dueDate) err.dueDate = "Due date is required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    await api.post("/tasks", task);
    fetchTasks();
    setTask({ title: "", description: "", priority: "Low", dueDate: "", status: "Pending" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg p-6 rounded-xl max-w-lg mx-auto mt-6 border border-gray-200"
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-700 text-center">
        Add New Task
      </h2>

      <label className="block font-medium">Task Title</label>
      <input
        type="text"
        className="w-full p-2 mt-1 mb-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />
      {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

      <label className="block font-medium mt-3">Description</label>
      <textarea
        className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />

      <label className="block font-medium mt-3">Priority</label>
      <select
        className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={task.priority}
        onChange={(e) => setTask({ ...task, priority: e.target.value })}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <label className="block font-medium mt-3">Due Date</label>
      <input
        type="date"
        className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={task.dueDate}
        onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
      />
      {errors.dueDate && <p className="text-red-500 text-sm">{errors.dueDate}</p>}

      <button
        disabled={!task.title || !task.dueDate}
        className={`w-full mt-5 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition ${
          !task.title || !task.dueDate ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Add Task
      </button>
    </form>
  );
}
