export default function Square(props) {
  const position =  props.colValue + props.rowValue;
    console.log('position',position)
    console.log('knightPos', props.knightPos)


  return (
    <div
      className={`square ${props.squareColor === "white" ? "white" : "black"} ${position === props.knightPos ? 'yellowFont' : ''}`}
    >
      <h1>{position}</h1>
    </div>
  );
}
