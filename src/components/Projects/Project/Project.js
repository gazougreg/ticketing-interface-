import React from 'react';

const project = (props) => {
    
    return props.projects.map((project, index) => {
        return (
            <div className="Project">
                <ul>
                    <li><span><a href="#" onClick={()=> props.showTicket(project.id)}>{project.title}</a></span></li>
                </ul>
            </div>
        );
    });
}

export default project;