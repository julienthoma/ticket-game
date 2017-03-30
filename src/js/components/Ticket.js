import React from 'react'

const Ticket = ({ rawTicket }) => (
    <div className="ticket">
        {rawTicket.points}
    </div>
);

Ticket.propTypes = {};

export default Ticket;
