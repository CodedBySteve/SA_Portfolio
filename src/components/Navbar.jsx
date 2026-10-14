import "./Navbar.css"
import cv from "../assets/SteveAguilar-CV2026.pdf";

function Navbar(props) {
  const {setPage} = props;
    return (
      <nav className="nav">
        <div className="logo"></div>
        <div className="nitem">
            <a onClick={() => setPage("Home")}>Home</a>
            <a onClick={() => setPage("Projects")}>Projects</a>
            <a onClick={() => setPage("AboutMe")}>About Me</a>
        </div>
        <a className="cv_btn" href={cv} download="SteveAguilar-CV2026.pdf" target="_blank">CV</a>
      </nav>  
    );
}

// function Navbar({setPage}) {
//     return (
//       <nav className="nav">
//         <div className="logo"></div>
//         <div className="nitem">
//             <a href="../App.jsx">Home</a>
//             <a href="">Projects</a>
//             <a href="">About Me</a>
//         </div>
//         <button className="cv_btn">CV</button>
//       </nav>  
//     );
// }

export default Navbar;