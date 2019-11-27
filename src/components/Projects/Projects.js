import React from 'react';
import Project from './Project/Project';

const projects = (props) => {
    
    return (
        <div className="Projects">
            <h4>Projects</h4>
            <Project 
                projects={props.projects}
                showTicket = {props.showTicket}
            />
        </div>
        
    );
};

export default projects;