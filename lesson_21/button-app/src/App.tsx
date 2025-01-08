import Button from "./components/Button.tsx";
import Alert from "./components/Alert.tsx";
import { useState } from "react";

function App() {
    const [isAlertVisible, setIsAlertVisible ] = useState(false);

    return (
        <div>
            { isAlertVisible && <Alert onClose={() => setIsAlertVisible(false)}>My Alert</Alert> }
            <Button color="danger" onClick={() => setIsAlertVisible(true)}>My Button</Button>
        </div>
  )
}

export default App;
