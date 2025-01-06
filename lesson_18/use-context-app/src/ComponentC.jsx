import ComponentD from './ComponentD.jsx';
import { useContext } from "react";
import { UserContext } from "./ComponentA.jsx";

function ComponentC() {

    const user = useContext(UserContext);

    return(
        <div className="box">
            <h1>Component C</h1>
            <h2>{`Welcome, ${user}`}</h2>
            <ComponentD/>
        </div>
    )
}

export default ComponentC;