
export default function Grid(props) {
    const w = 100;
    const h = 100;
    const rows = [];
    for (let i = 0; i < h; i++) {
        const cells = [];
        for (let j = 0; j < w; j++) {
            const d = (i + j) * (i + j + 1) / 2 + i;
            const cell = {
                i: i,
                I: i + 1,
                j: j,
                J: j + 1,
                d: d,
                D: d + 1,
            };
            const style = {
                width: "5px",
                minWidth: "5px",
                height: "5px",
                minHeight: "5px",
                border: "1px dotted rgba(0, 0, 0, 0.2)",
                backgroundColor: props.colorFunction(cell),
            };
            cells.push(<td key={j} style={style}></td>);
        }
        rows.push(<tr key={i}>{cells}</tr>);
    }
    return (<table style={{borderCollapse: "collapse", emptyCells: "show", tableLayout: "fixed"}}><tbody>{rows}</tbody></table>);
}
