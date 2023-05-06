import Square from "./Square";

export default function Row(props) {
  const cols = ["a", "b", "c", "d", "e", "f", "g", "h"];
  // if the row number is straight -> then every straight field is white, every odd field is black
  // if the row number is odd -> every straight field is black and every odd field is white
  const rowIsEven = props.rowNumber % 2 === 0 ? true : false;

  return cols.map((col, i) => {
    return (
      <Square
        rowValue={props.rowValue}
        colValue={cols[i]}
        colNumber={i}
        squareColor={
          (rowIsEven && i % 2 === 0) ||
          (!rowIsEven && i % 2 === 1)
            ? "white"
            : "black"
        }
        knightPos={props.knightPos}
        isKnightMove={props.isKnightMove}
        setKnightPos={props.setKnightPos}
      />
    );
  });
}
