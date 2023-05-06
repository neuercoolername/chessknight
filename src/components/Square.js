export default function Square(props) {
  return (
    <div
      className={`square ${props.squareColor === "white" ? "white" : "black"}`}
    >
      <h1>{props.rowValue + props.colValue}</h1>
    </div>
  );
}
