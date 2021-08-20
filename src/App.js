import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/";
// import Header from "./components/Header";
import "./sass/main.scss";

function App() {
    return (
        <div>
            <Router>
                <Header />
            </Router>
        </div>
    );
}

export default App;
