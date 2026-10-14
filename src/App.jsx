import "./App.css";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import AboutMe from "./Pages/AboutMe";
import Navbar from "./components/Navbar";
import {useState} from "react";
 


function App() {
  const [page, setPage] = useState("Home");

  return (
    <>
      <Navbar setPage={setPage} />

      {page === "Home" && <Home setPage={setPage} />}
      {page === "Projects" && <Projects setPage={setPage} />}
      {page === "AboutMe" && <AboutMe setPage={setPage}/>}
    </>
  );
}

export default App;