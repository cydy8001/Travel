import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import { calculateShortestPath } from "../services/tspApi";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const MapComponent = ({ onResult }) => {
    const [cities, setCities] = useState([]);
    const [zoom, setZoom] = useState(1); // Initial zoom level
    const [center, setCenter] = useState([0, 0]); // Initial center of the map

    // This function handles the click event on the map
    const handleMapClick = (event) => {
        const { lat, lng } = event.geoPoint;

        // Example: Get city name from coordinates (you can integrate a reverse geocoding API)
        const cityName = `City at (${lat.toFixed(2)}, ${lng.toFixed(2)})`; // Replace with actual city name if available

        const newCity = {
            name: cityName,
            coordinates: [lng, lat],
        };

        setCities([...cities, newCity]); // Add the selected city to the list

        // Optionally, send the updated list of cities to the backend for TSP calculation
        calculateShortestPath(cities.map((city) => city.name))
            .then((result) => onResult(result))
            .catch((err) => console.error("Error with TSP calculation", err));
    };

    return (
        <div style={{ width: "100%", height: "600px" }}> {/* Adjusting the size of the map */}
            <ComposableMap projection="geoMercator" width={800} height={600}>
                <ZoomableGroup zoom={zoom} center={center}>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography key={geo.rsmKey} geography={geo} fill="#DDD" stroke="#FFF" />
                            ))
                        }
                    </Geographies>

                    {/* Markers for cities */}
                    {cities.map((city, index) => (
                        <Marker key={index} coordinates={city.coordinates}>
                            <circle r={5} fill="#F53" />
                            <text textAnchor="middle" y={-10} style={{ fontSize: 10 }}>
                                {city.name}
                            </text>
                        </Marker>
                    ))}
                </ZoomableGroup>
            </ComposableMap>

            {/* Optionally, display the list of selected cities */}
            <div>
                <h3>Selected Cities:</h3>
                <ul>
                    {cities.map((city, index) => (
                        <li key={index}>{city.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MapComponent;
