import React from 'react'
import { TICKET_HEIGHT, TICKET_WIDTH } from './constants';

const Ticket = ({rawTicket}) => {
  const {x, y, points} = rawTicket;

  return (
    <div
      className="ticket"
      style={{
        top: y,
        left: x,
        width: TICKET_WIDTH,
        height: TICKET_HEIGHT
      }}
    >
      <img className="ticket__image" src="src/img/ticket.jpeg" />
      <div className="ticket__points">{points} €</div>
    </div>
  );
}

Ticket.propTypes = {};

export default Ticket;
