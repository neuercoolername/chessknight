import Square from "./Square";

export default function Row(props) {
  const cols = ["a", "b", "c", "d", "e", "f", "g", "h"];
  // if the row number is straight -> then every straight field is white, every odd field is black
  // if the row number is odd -> every straight field is black and every odd field is white
  const colorRythm = props.rowNumber % 2 === 0 ? "even" : "odd";


  return cols.map((col, i) => {
    return (
      <div>
        <Square
          rowValue={props.rowValue}
          colValue={cols[i]}
          colNumber={i}
          squareColor={colorRythm === "even" && i % 2 === 0 || colorRythm === "odd" && i % 2 === 1 ? 'white' : 'black'}
          knightPos={props.knightPos}
          isKnightMove={props.isKnightMove}
          setKnightPos={props.setKnightPos}
        />
      </div>
    );
  });
}
