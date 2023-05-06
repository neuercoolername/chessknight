import Row from "./Row";
import { useState } from "react";

export default function Board () {
    // define rows and cols
    const rows = ["8", "7", "6", "5", "4", "3", "2", "1"];
    const cols = ["a", "b", "c", "d", "e", "f", "g", "h"];

    // track position of knight

    const [knightPos, setKnightPos] = useState("e6");


    return (
        <>
        
        { rows.map((col,i)=>{
    return (
        <div key={i} className={'row'}>
            {<Row rowValue={rows[i]} rowNumber={i} knightPos={knightPos}/>}
        </div>
    );
})}

        </>
    )
}