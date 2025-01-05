import React, {useState, useEffect} from "react";


function Counter() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;

        return () => {
            // Some cleanup code, for example removing an event listener
        }
    }, [count, color]);

    function addCount() {
        setCount(c => c + 1);
    }

    function substractCount() {
        setCount(c => c - 1)
    }

    function changeColor() {
        setColor(col => col === "green" ? "red" : "green")
    }

    return(
        <>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={substractCount}>Subtract</button><br />
            <button onClick={changeColor}>Change color</button>
        </>
    );
}

export default Counter;