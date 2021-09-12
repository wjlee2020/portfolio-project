import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Footer from './components/Footer';

// import Header from "./components/Header";
import "./sass/main.scss";

function App() {
    return (
        <div>
            <Router>
                <Header />
                <About />
                <Footer />
            </Router>
        </div>
    );
}

export default App;
