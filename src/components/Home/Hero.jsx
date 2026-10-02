import "./Hero.css";

function Hero() {
    return(
    <section className="hero">
        <div className="main">
        <div className="status_bar">
            <div className="circle"></div>
            <p id="status">OPEN TO OPPORTUNITIES</p>
        </div>
        <h2>Hello I'm</h2>
        <h1>Steve Montenegro Aguilar</h1>
        <p className="role">Computer Science Graduate</p>
        <p id="hero_desc">I develop software, websites, and program embedded systems, I want to test how far this description can go really, or is it that it's width is limitation is based on how far it is being written</p>
        <button className="btn_view_pjs">View My Projects</button>
        </div>
    </section>
     );
}

export default Hero;
