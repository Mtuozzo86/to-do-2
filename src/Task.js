export default function Task({ text }) {
  console.log(text);
  return (
    <div className="task">
      <p>{text}</p>
      <button className="delete-button">Delete</button>
    </div>
  );
}
