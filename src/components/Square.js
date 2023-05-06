export default function Square(props) {
  const position = props.colValue + props.rowValue;

  const isKnightMove = props.isKnightMove(props.rowValue, props.colValue );

  console.log(position, isKnightMove)

  const handleKnightMove = () => {
    props.setKnightPos(position)
  }

  
  return (
    <div
      className={`square ${props.squareColor === "white" ? "white" : "black"} ${
        position === props.knightPos ? "yellowFont" : ""
      }
      ${isKnightMove ? "whiteFont" : ""}
      `}
      onClick={isKnightMove ? handleKnightMove : null}
    >
      <h1>{position}</h1>
    </div>
  );
}
