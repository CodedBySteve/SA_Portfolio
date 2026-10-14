import "./ProjectCard.css";
import Skills from "./Skills";
import GithubIcon from "./GithubIcon"; 

import { CATEGORY_COLORS } from "../data/projects";
import {getCATColor} from "../data/projects";


function ProjectCard ({project}) {
    const {title, description, image, skills, category} = project;
    console.log(getCATColor(category),1);
    return (
        <div className="projectCard">
            <div className="pj_img_canvas">
                <img src={image} alt="Project image"/>
                <div 
                    style={{
                        color: getCATColor(category, 1),
                        backgroundColor: getCATColor(category, 0.15),
                        border: `1px solid ${getCATColor(category, 0.4)}`
                        }}
                        id="category"
                        >{category}
                </div>
            </div>
            <div className="content">
                <h3>{title}</h3>
                <p id="desc">{description}</p>
                <div className="sk_list">
                    {skills.map(skill => <Skills key={skill} skill={skill}/>)}
                </div>
                <div className="btns_layout">
                    <button className="btn_Viewprj">View Project  →</button>
                    <button className="btn_git_rep">
                        <GithubIcon className="ic_github"/>
                        Github Repo</button>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;