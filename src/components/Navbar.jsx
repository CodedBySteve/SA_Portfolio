import "./Navbar.css"

function Navbar() {
    return (
      <nav className="nav">
        <div className="logo"></div>
        <div className="nitem">
            <a href="../App.jsx">Home</a>
            <a>Projects</a>
            <a>About Me</a>
        </div>
        <button className="cv_btn">CV</button>
      </nav>  
    );
}

export default Navbar;