import Square from "./Square";

export default function Row (props) {
    console.log(props.rowValue)
    // this renders the rows and maps over the columns
    const cols = ["a", "b", "c", "d", "e", "f", "g", "h"];

    return cols.map((cols,i)=>{
        return (
            <div>
            <Square />
    
            </div>
        )
       
    })
}