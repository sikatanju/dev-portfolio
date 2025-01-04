import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import Work from "./components/Work";

function App() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Skill />
            <Work />
            <Contact />
        </>
    );
}

export default App;
