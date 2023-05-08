import Row from "./Row";
import { useState } from "react";
import getKnightMoves from "../utilities/getKnightMoves";

export default function Board() {
  const rows = ["8", "7", "6", "5", "4", "3", "2", "1"];
  const cols = ["a", "b", "c", "d", "e", "f", "g", "h"];

  const urlSearchParams = new URLSearchParams(window.location.search);
  const startingPos = urlSearchParams.get("start") || "e4";

  const [knightPos, setKnightPos] = useState(startingPos);

  const isKnightMove = (row, col) => {
    const knightMoves = getKnightMoves(knightPos, rows, cols);
    return knightMoves.some(
      ({ col: moveCol, row: moveRow }) =>
        moveCol === col && moveRow.toString() === row
    );
  };

  return (
    <div className="boardWrapper">
      <div className="board">
        {rows.map((rowValue, rowNumber) => {
          return (
            <div key={rowNumber} className={"row"}>
              {
                <Row
                  rowValue={rowValue}
                  rowNumber={rowNumber}
                  knightPos={knightPos}
                  isKnightMove={isKnightMove}
                  setKnightPos={setKnightPos}
                />
              }
            </div>
          );
        })}
      </div>
    </div>
  );
}
