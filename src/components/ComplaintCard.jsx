export default function ComplaintCard({ complaint }) {
  return (
    <div className="card bg-base-100 shadow mb-3">
      <div className="card-body">
        <h2 className="card-title">{complaint.title}</h2>
        <p>{complaint.description}</p>
        <span className={`badge ${complaint.status === 'open' ? 'badge-error' : 'badge-success'}`}>
          {complaint.status}
        </span>
      </div>
    </div>
  );
}