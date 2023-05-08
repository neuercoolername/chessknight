export default function getKnightMoves (knightPos, rows, cols) {
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