import React from 'react';
import Ticket from './Ticket/Ticket';

const tickets =(props) => {
    console.log('props ths Tickets');
    console.log(props);
    if(props.flag) {
        return (
            <div className="Tickets">
                <h4>Tickets</h4>
                <Ticket
                    projects = {props.projects}
                    display = {props.display}
                    showComment = {props.showComment}
                />
            </div>
        );
    } else {
        return null;
    }
}

export default tickets;