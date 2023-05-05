import Row from "./Row";

export default function Board () {
    // define rows and cols
    const rows = ["8", "7", "6", "5", "4", "3", "2", "1"];
    const cols = ["a", "b", "c", "d", "e", "f", "g", "h"];

    // track position of knight

    return (
        <>
        
        { rows.map((col,i)=>{
    return (
        <div key={i} className={'row'}>
            {/* <h1>hi</h1> */}
            {<Row rowValue={rows[i]} />}
        </div>
    );
})}

        </>
    )
}