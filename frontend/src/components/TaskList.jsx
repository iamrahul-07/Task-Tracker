import TaskItem from "./TaskItem";

export default function TaskList({ tasks, updateTask, deleteTask }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 px-4">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}
