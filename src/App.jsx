import "./App.css";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import AboutMe from "./Pages/AboutMe";
import Navbar from "./components/Navbar";
import {useState, useEffect} from "react";
 


function App() {
  const [page, setPage] = useState("Home");
  useEffect(() => {window.scrollTo(0,0)}, [page]);

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