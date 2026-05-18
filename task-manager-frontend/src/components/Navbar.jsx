export default function Navbar({ activePage, setActivePage }) {
    return (
      <div className="nav-links">
  
        <span
          className={activePage === "Tasks" ? "active-link" : ""}
          onClick={() => setActivePage("Tasks")}
        >
          Tasks
        </span>
  
        <span
          className={activePage === "Completed" ? "active-link" : ""}
          onClick={() => setActivePage("Completed")}
        >
          Completed
        </span>
  
        <span
          className={activePage === "Settings" ? "active-link" : ""}
          onClick={() => setActivePage("Settings")}
        >
          Settings
        </span>
  
      </div>
    );
  }