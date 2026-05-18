import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import Filter from "./Filter";

const API = import.meta.env.VITE_API_URL;

export default function App() {

  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [activePage, setActivePage] = useState("Tasks");
  const [editingTask, setEditingTask] = useState(null);

  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [sortBy, setSortBy] = useState("None");

  /* =========================
     GET TASKS
  ==========================*/
  useEffect(() => {
    fetch(`${API}/api/tasks`)
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.log(err));
  }, []);

  /* =========================
     ADD TASK
  ==========================*/
  const addTask = async (task) => {

    const res = await fetch(`${API}/api/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks(prev => [...prev, data]);
    setShowForm(false);
  };

  /* =========================
     DELETE TASK
  ==========================*/
  const deleteTask = async (id) => {

    await fetch(`${API}/api/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(prev => prev.filter(t => t._id !== id));
  };

  /* OPEN EDIT */
  const openEdit = (task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  /* =========================
     UPDATE TASK
  ==========================*/
  const updateTask = async (updatedTask) => {

    const res = await fetch(
      `${API}/api/tasks/${updatedTask._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask),
      }
    );

    const data = await res.json();

    setTasks(prev =>
      prev.map(t =>
        t._id === data._id ? data : t
      )
    );

    setEditingTask(null);
    setShowForm(false);
  };

  /* =========================
     MARK COMPLETED
  ==========================*/
  const markCompleted = async (id) => {

    const res = await fetch(
      `${API}/api/tasks/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "completed" }),
      }
    );

    const data = await res.json();

    setTasks(prev =>
      prev.map(task =>
        task._id === data._id ? data : task
      )
    );
  };

  /* FILTER */
  const filteredTasks = tasks.filter(task => {

    if (activePage === "Completed" && task.status !== "completed")
      return false;

    if (activePage === "Tasks" && task.status === "completed")
      return false;

    if (statusFilter !== "All" && task.status !== statusFilter)
      return false;

    if (
      priorityFilter !== "All" &&
      task.priority !== Number(priorityFilter)
    )
      return false;

    return true;
  });

  /* SORT */
  const sortedTasks = [...filteredTasks];

  if (sortBy === "Due Date") {
    sortedTasks.sort(
      (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
    );
  }

  if (sortBy === "Priority") {
    sortedTasks.sort((a, b) => a.priority - b.priority);
  }

  return (
    <>
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
        toggleForm={() => {
          setEditingTask(null);
          setShowForm(true);
        }}
      />

      {activePage !== "Settings" && (
        <>
          <Filter
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            priorityFilter={priorityFilter}
            setPriorityFilter={setPriorityFilter}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />

          <TaskList
            tasks={sortedTasks}
            deleteTask={deleteTask}
            openEdit={openEdit}
            markCompleted={markCompleted}
          />
        </>
      )}

      {showForm && (
        <AddTaskForm
          addTask={addTask}
          updateTask={updateTask}
          editingTask={editingTask}
          closeForm={() => {
            setEditingTask(null);
            setShowForm(false);
          }}
        />
      )}
    </>
  );
}