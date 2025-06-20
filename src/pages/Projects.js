import React from "react";

function  Projects () {
    return (
        <section id="projects" className="projects-section">
            <h2>My Projects</h2>
            <div className="project-grid">
                <div className="project-card">
                    <h3>Project One</h3>
                    <p>Description of project one.</p>
                </div>
                <div className="project-card">
                    <h3>Project Two</h3>
                    <p>Description of project two.</p>
                </div>
                <div className="project-card">
                    <h3>Project Three</h3>
                    <p>Description of project three.</p>
                 </div>

            </div>
        </section>
    );
}

export default Projects;