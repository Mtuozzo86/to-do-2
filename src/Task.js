import { useState } from "react";

export default function Task({ text, id, onDelete }) {
  const [showDetails, setShowDetails] = useState(false);

  console.log(showDetails);

  return (
    <>
      <div className="task">
        <p onClick={() => setShowDetails(!showDetails)}>{text}</p>
        <button onClick={() => onDelete(id)} className="delete-button">
          Delete
        </button>
      </div>
      {showDetails && (
        <div className="task-details">
          <p>details</p>
        </div>
      )}
    </>
  );
}
