export default function TaskItem({ task, updateTask, deleteTask }) {
  return (
    <div className="bg-white p-5 shadow-md rounded-xl border border-gray-200 hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-gray-800">{task.title}</h3>
      <p className="text-gray-600 mt-1">{task.description}</p>

      <div className="mt-3 flex justify-between">
        <span
          className={`px-3 py-1 text-sm rounded-full
          ${task.priority === "High" ? "bg-red-200 text-red-700" :
            task.priority === "Medium" ? "bg-yellow-200 text-yellow-700" :
            "bg-green-200 text-green-700"}`}
        >
          {task.priority}
        </span>

        <span className="text-gray-500 text-sm">
          Due: {task.dueDate?.substring(0, 10)}
        </span>
      </div>

      <div className="flex items-center mt-4 gap-3">
        <select
          value={task.status}
          onChange={(e) => updateTask(task._id, { status: e.target.value })}
          className="p-2 border rounded focus:ring-2 focus:ring-blue-400"
        >
          <option>Pending</option>
          <option>Completed</option>
        </select>

        <button
          onClick={() => deleteTask(task._id)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
