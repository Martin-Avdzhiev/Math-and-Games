const HEAD = (
    <div style={{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        top: "50px",
        right: "-30px"
    }}key={0}></div>
)
const BODY = (
    <div style={{
        width: "10px",
        height: "80px",
        background: "black",
        position: "absolute",
        top: "120px",
        right: "0px"
    }}key={1}></div>
)
const LEFT_ARM = (
    <div style={{
        width: "10px",
        height: "40px",
        background: "black",
        position: "absolute",
        transform: "rotate(45deg)",
        top: "120px",
        right: "15px"
    }}key={2}></div>
)
const RIGHT_ARM = (
    <div style={{
        width: "10px",
        height: "40px",
        background: "black",
        position: "absolute",
        transform: "rotate(135deg)",
        top: "120px",
        right: "-15px"
    }}key={3}></div>
)
const LEFT_LEG = (
    <div style={{
        width: "10px",
        height: "40px",
        background: "black",
        position: "absolute",
        transform: "rotate(45deg)",
        top: "190px",
        right: "15px"
    }}key={4}></div>
)
const RIGHT_LEG = (
    <div style={{
        width: "10px",
        height: "40px",
        background: "black",
        position: "absolute",
        transform: "rotate(135deg)",
        top: "190px",
        right: "-15px"
    }} key={5}></div>
)
const BODY_PARTS = [HEAD,BODY,RIGHT_ARM,LEFT_ARM,RIGHT_LEG,LEFT_LEG];
type HangmanDrawingProps = {
    numberOfGuesses: number
}
export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    const parts = numberOfGuesses < BODY_PARTS.length ?BODY_PARTS.slice(0,numberOfGuesses) : BODY_PARTS;
    return <div style={{ position: "relative" }}>
        {parts}
        <div style={{ height: "10px", width: "200px", background: "black", marginLeft: "120px" }} />
        <div style={{ height: "50px", width: "10px", background: "black", marginLeft: "310px", position: "absolute", top: 0, right: 0 }} />
        <div style={{ height: "400px", width: "10px", background: "black", marginLeft: "120px" }} />
        <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
}