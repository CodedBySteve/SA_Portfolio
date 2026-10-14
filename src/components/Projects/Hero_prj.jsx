import "./Hero_prj.css"
import ProjectCard from "../ProjectCard";
import PROJECTS from "../../data/projects"
import Filter_opt from "../Filter_opt";


function Hero_prj() {
    const categories = [...new Set(PROJECTS.map(project => project.category)), "All"];
    return (
        <section className="prj_hero">
            <div className="intro_section">
                <div className="intro_layout">
                    <h4>Portfolio</h4>
                    <h1>My Projects</h1>
                    <p>A collection of my work including software, mobile, hardware. Built to solve a problem or because its fun.</p>
                </div>
            </div>
            <div className="filter_section">
                <div className="filter_layout">
                    {categories.sort().map(category => <Filter_opt key={category} category={category}/>)}
                </div>
            </div>
            <div className="prjs_section">
                <div className="prjs_layout">
                    {PROJECTS.map((project) => <ProjectCard key={project.id} project={project}/>)}
                </div>
            </div>
        </section>
    );

}

export default Hero_prj;