export default function Completed({ tasks }) {

    if(tasks.length === 0)
      return <h3 style={{textAlign:"center"}}>No Completed Tasks</h3>;
  
    return (
      <div>
        <h2>Completed Tasks</h2>
  
        {tasks.map(task => (
          <div key={task.id} className="task-card">
            <h3 style={{fontWeight:"bold"}}>
              {task.title}
            </h3>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    );
  }