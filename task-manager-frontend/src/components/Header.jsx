import Navbar from "./Navbar";
import TaskButton from "../TaskButton";

export default function Header({
  activePage,
  setActivePage,
  toggleForm,
}) {
  return (
    <div className="navbar">
      <h2>Task Manager</h2>

      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <TaskButton toggleForm={toggleForm} />
    </div>
  );
}