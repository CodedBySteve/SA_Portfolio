import "./Contact.css";

import emailIcon from "../../assets/Icons/email1.png";
import linkedinIcon from "../../assets/Icons/linkedin.png";
import githubIcon from "../../assets/Icons/github.png";

function Contact() {
    
    return(
        <section className="c_hero">
            <div className="c_main"> 
                <h4>02 - Get in Touch</h4>
                <h1>Let's Connect</h1>
                <p>Actively looking for new opportunities. Whether you have a role in mind, project idea or just want to chat, feel free to reach out!</p>
                <div className="c_btn_layout">
                    <a className="btn_email" href="mailto:steveaguilarM@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Steve," target="_blank">
                        <img src={emailIcon}/>
                        Email
                        </a>
                    <a className="btn_linkedin" href="https://www.linkedin.com/in/sm-aguilar/" target="_blank">
                        <img src={linkedinIcon}/>
                        LinkedIn
                        </a>
                    <a className="btn_github" href="https://github.com/CodedBySteve" target="_blank">
                        <img src={githubIcon}/>
                        GitHub
                        </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;