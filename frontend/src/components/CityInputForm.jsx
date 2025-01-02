import { useState } from "react";
import { calculateShortestPath } from "../services/tspApi";

const CityInputForm = ({ onResult }) => {
    const [city, setCity] = useState("");
    const [cities, setCities] = useState([]);

    // Add city to the list
    const handleAddCity = () => {
        if (city.trim()) {
            setCities([...cities, city]);
            setCity("");
        }
    };

    // Handle calculation when cities are ready
    const handleCalculate = async () => {
        try {
            const result = await calculateShortestPath(cities);
            onResult(result); // Pass the result back to parent component
        } catch (error) {
            alert("Failed to calculate the shortest path. Please try again.");
        }
    };

    return (
        <div>
            <input
                type="text"
                value={city}
                placeholder="Enter a city"
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={handleAddCity}>Add City</button>
            <button onClick={handleCalculate} disabled={!cities.length}>
                Calculate Shortest Path
            </button>

            {/* Display the list of selected cities */}
            <ul>
                {cities.map((c, index) => (
                    <li key={index}>{c}</li>
                ))}
            </ul>
        </div>
    );
};

export default CityInputForm;
