import * as consts from './constants';
const coinSound = new Audio("http://www.freesound.org/data/previews/350/350876_5450487-lq.mp3");

export default (state, { type, payload }) => {
  switch(type) {
    case consts.SPAWN_TICKET:
      return {
        ...state,
        tickets: [
          ...state.tickets,
          {
            x: payload.x,
            y: -consts.TICKET_HEIGHT,
            points: payload.points,
            gathered: false
          }
        ]
      }

    case consts.TICK:
      let newPoints = 0;
      const newTickets = state.tickets.slice(0);

      newTickets.forEach(ticket => {
        ticket.y += 2;

        if (ticket.y <= window.innerHeight - consts.CART_HEIGHT - consts.TICKET_HEIGHT) {
          return;
        }

        if (ticket.x + consts.TICKET_WIDTH >= state.cart.x && ticket.x <= state.cart.x + consts.CART_WIDTH) {
          newPoints += ticket.points;
          ticket.gathered = true;
          coinSound.play();
        }
      });

      const newScore = state.score += newPoints;

      return {
        ...state,
        tickets: newTickets.filter(ticket => ticket.y <= window.innerHeight && !ticket.gathered),
        score: newScore,
        isFinished: newScore >= 5000
      }

    case consts.MOVE_LEFT:s
      return {
        ...state,
        cart: {
          ...state.cart,
          x: Math.max(0, state.cart.x - 50)
        }
      }

    case consts.MOVE_RIGHT:
      return {
        ...state,
        cart: {
          ...state.cart,
          x: Math.min(window.innerWidth - consts.CART_WIDTH, state.cart.x + 50)
        }
      }

    default:
      return state;
  }
}
