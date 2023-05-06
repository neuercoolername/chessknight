import Row from "./Row";
import { useState } from "react";

export default function Board() {
  const rows = ["8", "7", "6", "5", "4", "3", "2", "1"];
  const cols = ["a", "b", "c", "d", "e", "f", "g", "h"];


  const [knightPos, setKnightPos] = useState("e4");

  const getKnightMoves = () => {
    const [col, row] = knightPos.split("");
    const moves = [
      {
        col: String.fromCharCode(col.charCodeAt() + 2),
        row: parseInt(row, 10) + 1,
      },
      {
        col: String.fromCharCode(col.charCodeAt() + 2),
        row: parseInt(row, 10) - 1,
      },
      {
        col: String.fromCharCode(col.charCodeAt() - 2),
        row: parseInt(row, 10) + 1,
      },
      {
        col: String.fromCharCode(col.charCodeAt() - 2),
        row: parseInt(row, 10) - 1,
      },
      {
        col: String.fromCharCode(col.charCodeAt() + 1),
        row: parseInt(row, 10) + 2,
      },
      {
        col: String.fromCharCode(col.charCodeAt() + 1),
        row: parseInt(row, 10) - 2,
      },
      {
        col: String.fromCharCode(col.charCodeAt() - 1),
        row: parseInt(row, 10) + 2,
      },
      {
        col: String.fromCharCode(col.charCodeAt() - 1),
        row: parseInt(row, 10) - 2,
      },
    ];
    return moves.filter(
      ({ col, row }) => cols.includes(col) && rows.includes(row.toString())
    );
  };


  const isKnightMove = (row, col) => {
    const knightMoves = getKnightMoves();
    return knightMoves.some(
      ({ col: moveCol, row: moveRow }) =>
        moveCol === col && moveRow.toString() === row
    );
  };

  return (
    <div className="boardWrapper">
        <div className='board'>
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
