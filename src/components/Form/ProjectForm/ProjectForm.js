import React from 'react';

const projectForm = (props) => {
    return (props.projects.map((projects) =>{
        return(
          
            <option value={projects.id}>{projects.title}</option>
            
        );
    }));
}

export default projectForm;