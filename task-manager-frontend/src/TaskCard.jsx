export default function TaskCard({
  task,
  deleteTask,
  openEdit,
  markCompleted
}) {

  return (
    <div className="task-card">

      <h3
        style={{
          fontWeight: "bold",
          textDecoration:
            task.status === "completed"
              ? "line-through"
              : "none"
        }}
      >
        {task.title}
      </h3>

      <p>{task.description}</p>
      <p><b>Status:</b> {task.status}</p>
      <p><strong>Priority:</strong> {task.priority}</p>
      <p><b>Due:</b> {task.dueDate?.slice(0,10)}</p>

      <button onClick={() => openEdit(task)}>Edit</button>

      <button onClick={() => deleteTask(task._id)}>
        Delete
      </button>

      {task.status !== "completed" && (
        <button onClick={() => markCompleted(task._id)}>
          Mark Completed
        </button>
      )}

    </div>
  );
}