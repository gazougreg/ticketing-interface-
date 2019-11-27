import React from 'react';

const comments = (props) => {
    if(props.flag){
        return(
            <div>
                <div className="Description">
                    <h4>{props.issue}</h4>
                    <p>The user...</p>
                </div>
                <div className="InputFile">
                    <form>
                        <p>Input file:</p>
                        <input type="file"/>
                    </form>
                   
                </div>
                <div className="Comments">
                    <h4>Comments</h4>
                    <button>Add Comment</button>
                </div>
                
            </div>
        );
    } else return null;
}

export default comments;