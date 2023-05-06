import Row from "./Row";
import { useState } from "react";

export default function Board() {
  // define rows and cols
  const rows = ["8", "7", "6", "5", "4", "3", "2", "1"];
  const cols = ["a", "b", "c", "d", "e", "f", "g", "h"];

  // track position of knight

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

  //   console.log(getKnightMoves())

  const isKnightMove = (row, col) => {
    const knightMoves = getKnightMoves(knightPos);
    return knightMoves.some(
      ({ col: moveCol, row: moveRow }) =>
        moveCol === col && moveRow.toString() === row
    );
  };

  return (
    <>
      {rows.map((col, i) => {
        return (
          <div key={i} className={"row"}>
            {
              <Row
                rowValue={rows[i]}
                rowNumber={i}
                knightPos={knightPos}
                isKnightMove={isKnightMove}
                setKnightPos={setKnightPos}
              />
            }
          </div>
        );
      })}
    </>
  );
}
