export default function Filter({
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
  sortBy,
  setSortBy
}) {
  return (
    <div className="filters">

      <div>
        Filter by Status:
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div>
        Filter by Priority:
        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="1">1 - Very Low</option>
          <option value="2">2</option>
          <option value="3">3 - Medium</option>
          <option value="4">4</option>
          <option value="5">5 - High</option>
        </select>
      </div>

      {/* ✅ SORT BY */}
      <div>
        Sort By:
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option>None</option>
          <option>Due Date</option>
          <option>Priority</option>
        </select>
      </div>

    </div>
  );
}