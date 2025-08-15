export default function TaskCard({ task }) {
  return (
    <div className="card bg-base-100 shadow mb-3">
      <div className="card-body">
        <h2 className="card-title">Task #{task.id}</h2>
        <p>{task.notes}</p>
        <span className={`badge ${task.status === 'pending' ? 'badge-warning' : 'badge-info'}`}>
          {task.status}
        </span>
      </div>
    </div>
  );
}