import "./FeaturedProjects.css";
import ProjectCard from "../ProjectCard";

import PROJECTS from "../../data/projects";

function FeaturedProjects({setPage}) {
    const featuredProjects = PROJECTS.filter(project => project.featured);

    return (
        <section className="ft_hero">
            <div className="ft_main">
                <h4>01 - Featured Work</h4>
                <div className="ft_header">
                    <h1>Selected Projects</h1>
                    <button className="ft_viewall" onClick={() => setPage('Projects')}>View all →</button>
                </div>
                <div className="ft_pjcard">
                    {featuredProjects.map((project) => <ProjectCard key={project.id} project={project}/>)}
                </div>
            </div>
        </section>

    );
}

export default FeaturedProjects;
        