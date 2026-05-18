import { useState, useEffect } from "react";

export default function AddTaskForm({
  addTask,
  updateTask,
  editingTask,
  closeForm,
}) {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "pending",
    dueDate: "",
    priority: 3,
  });

  useEffect(() => {
    if (editingTask) {
      setFormData({
        ...editingTask,
        dueDate: editingTask.dueDate
          ? editingTask.dueDate.slice(0,10)
          : ""
      });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name === "priority"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (editingTask) {
      updateTask({
        ...formData,
        _id: editingTask._id   
      });
    } else {
      addTask(formData);
    }
  };

  return (
    <div className="form-overlay">
      <form className="form-box" onSubmit={handleSubmit}>
      <h3>{editingTask ? "Update Task" : "Add Task"}</h3>

        <input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          rows="5"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />

        {/* ✅ dueDate */}
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
        />

        {/* ✅ priority number */}
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        >
          <option value={1}>1 - Very Low</option>
          <option value={2}>2</option>
          <option value={3}>3 - Medium</option>
          <option value={4}>4</option>
          <option value={5}>5 - High</option>
        </select>

        {/* ✅ enum status */}
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <button className="btn edit">
          {editingTask ? "Update Task" : "Add Task"}
        </button>

        <button
          type="button"
          className="btn delete"
          onClick={closeForm}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}