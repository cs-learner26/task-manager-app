export default function TaskButton({ toggleForm }) {
    return (
      <button className="add-btn" onClick={toggleForm}>
        Add Task
      </button>
    );
  }