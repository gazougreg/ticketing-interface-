import React from 'react';

const ticket = (props) => {
    console.log(props);
    return props.display.map(el => {
        console.log("el");
        console.log(el);
        return ( 
            <div className="Ticket">
                <ul>
                    <li><a href="#" onClick={()=> props.showComment(el)}>{el}</a></li>
                </ul>
            </div>
        );
    });
}

export default ticket;