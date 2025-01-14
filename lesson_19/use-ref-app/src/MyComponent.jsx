import { useState, useEffect, useRef } from "react";

function MyComponent() {

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    });

    function handleClick1() {
        inputRef1.current.focus();
        inputRef1.current.style.background = 'yellow';
        inputRef2.current.style.background = '';
        inputRef3.current.style.background = '';
    }

    function handleClick2() {
        inputRef2.current.focus();
        inputRef1.current.style.background = '';
        inputRef2.current.style.background = 'yellow';
        inputRef3.current.style.background = '';
        
    }

    function handleClick3() {
        inputRef3.current.focus();
        inputRef1.current.style.background = '';
        inputRef2.current.style.background = '';
        inputRef3.current.style.background = 'yellow';
        
    }

    return(
        <>
            <button onClick={handleClick1}>
                Click me! 1
            </button>
            <input type="text" ref={inputRef1} />

            <button onClick={handleClick2}>
                Click me! 2
            </button>
            <input type="text" ref={inputRef2} />

            <button onClick={handleClick3}>
                Click me! 3
            </button>
            <input type="text" ref={inputRef3} />


        </>
    );
}

export default MyComponent;