import { useState } from "react";

export default function Task({ text, id, onDelete }) {
  const [showDetails, setShowDetails] = useState(false);


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
          <input className="details-textarea" type="textarea"/>
        </div>
      )}
    </>
  );
}
