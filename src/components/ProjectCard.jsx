import "../data/projects";
import "./ProjectCard.css";

function ProjectCard ({projects}) {
    return (
        <div className="projectCard">
            <img src={projects.image} alt="Project image"/>
            <h3>{projects.title}</h3>
            <p>{projects.description}</p>
            <div className="btns_layout">
                <button className="btn_Viewprj"/>
                <button className="btn_git_rep"/>
            </div>
        </div>
    );
}

export default ProjectCard;