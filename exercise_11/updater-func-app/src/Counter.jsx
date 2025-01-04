import React, {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(c => c + 1);
        setCount(c => c + 1);   //c == prevCount (conventional naming practice)
    }

    
    const decrementCount = () => { 
        setCount(prevCount => prevCount - 1); //prevCount == c
        setCount(prevCount => prevCount - 1);
    }

    
    const resetCount = () => {
        setCount(0);
    }

    return (
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decrementCount}>-</button>
            <button className="counter-button" onClick={resetCount}>Reset</button>
            <button className="counter-button" onClick={incrementCount}>+</button>
        </div>
    )

}   	

export default Counter