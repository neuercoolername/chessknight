export default function Square (props) {
    console.log(props.colValue)
    // this renders the squares and gives them the apropriate styling (color of background and color of text)
    return (
        <div className={'square'}>
        <h1>{props.rowValue + props.colValue}</h1>

        </div>
    )
}