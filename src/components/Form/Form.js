import React from 'react';
import ProjectForm from './ProjectForm/ProjectForm';

const form = (props) => {
    if (props.flag){
        return(
        <div className="Form">
            <h4>Create new issue</h4>
            <form onSubmit={props.logForm}>
                <select name="selectProject" id="selectP" onChange={props.changeState} required>
                <option value="" disabled selected>Select a project</option>
                    <ProjectForm 
                        projects = {props.projects}
                    />
                </select>
                <input type="text" name="newIssue" id="newIssue" placeholder="Enter issue" onChange={props.changeState} required/>
                <input type="submit" id="btn-submit"value="Submit Issue"/>
            </form>
        </div>
        );
    } else {
        return null;
    }
}

export default form;
