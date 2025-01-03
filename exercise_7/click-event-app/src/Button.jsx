
function Button() {

    // const handleClick = () => console.log('heyy!!');
    
    // const handleClick2 = (name) => console.log(`${name} stop clicking me!`);

    // let count = 0;

    // const handleClick3 = (name) => {
    //     if (count < 3) {
    //         count++;
    //         console.log(`${name}, you clicked me ${count} time/s`);
            
    //     } else {
    //         console.log(`${name} stop clicking me!`);
            
    //     };
    // };
    
    const handleClick4 = (e) => e.target.textContent = "OUCH! 😠";
    

    return(
        <button onDoubleClick={(e) => handleClick4(e)}>Click me 😁</button>
    );
};

export default Button