import TaskCard from "../TaskCard";

export default function TaskList({
  tasks,
  deleteTask,
  openEdit,
  markCompleted
}) {

  if (tasks.length === 0)
    return <h3 style={{textAlign:"center"}}>No Tasks</h3>;

  return (
    <>
      {tasks.map(task => (
        <TaskCard
          key={task._id}
          task={task}
          deleteTask={deleteTask}
          openEdit={openEdit}
          markCompleted={markCompleted}
        />
      ))}
    </>
  );
}