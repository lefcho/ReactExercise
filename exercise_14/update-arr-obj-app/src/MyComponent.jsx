import React, { useState } from "react";

function MyComponent() {
    const currentYear = new Date().getFullYear();
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(currentYear);
    const [carManufacturer, setCarManufacturer] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {
        const newCar = {
            year: carYear,
            manufacturer: carManufacturer,
            model: carModel,
        };

        setCars(c => [...c, newCar]);

        setCarYear(currentYear);
        setCarManufacturer("");
        setCarModel("");

    }

    function handleRemoveCar(index) {
        setCars(c => c.filter((_, i) => i !== index));
    }

    function handleYearChange(e) {
        setCarYear(e.target.value);
    }

    function handleManufacturerChange(e) {
        setCarManufacturer(e.target.value);
    }

    function handleModelChange(e) {
        setCarModel(e.target.value);
    }

    return (
        <div>
            <h2>List Of Cars:</h2>
            <ul>
                {cars.map((car, index) => 
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.manufacturer} {car.model}
                    </li>)}
            </ul>

            <input type="number" value={carYear} onChange={handleYearChange} /><br />

            <input type="text"
                    value={carManufacturer}
                    onChange={handleManufacturerChange}
                    placeholder="Enter car manufacturer..."
            /><br />

            <input type="text"
                    value={carModel}
                    onChange={handleModelChange}
                    placeholder="Enter car model..."
            /><br />
            
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );
}

export default MyComponent;