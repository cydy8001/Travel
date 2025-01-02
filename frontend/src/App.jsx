import MapComponent from "./components/MapComponent";
import "./styles/App.css";

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Travel Path Finder</h1>
                <p>Enter your travel destinations, and we’ll calculate the shortest path for you!</p>
            </header>

            <main>
                <MapComponent onResult={(result) => console.log(result)} />
            </main>

            <footer>
                <p>© 2025 Travel Path Finder. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;
