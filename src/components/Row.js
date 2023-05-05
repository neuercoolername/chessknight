import Square from "./Square";

export default function Row (props) {
    // this renders the rows and maps over the columns
    const cols = ["a", "b", "c", "d", "e", "f", "g", "h"];

    return cols.map((col,i)=>{
        return (
            <div>
            <Square rowValue={props.rowValue} colValue={cols[i]} />
    
            </div>
        )
       
    })
}