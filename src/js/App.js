import React from 'react';
import { connect } from 'react-redux';
import Ticket from './Ticket';
import Cart from './Cart';
import Landscape from './Landscape';
import * as consts from './constants';

class App extends React.Component {
  componentDidMount() {
    this.ticketSpawnInterval = setInterval(this.spawnTicket, 2000);
    this.tickInterval = setInterval(this.tick, 16);
    document.onkeydown = this.handleKeyPress;
  }

  componentWillUnmount() {
    clearInterval(this.ticketSpawnInterval);
    clearInterval(this.tickInterval);
  }

  handleKeyPress = event => {
    switch (event.key) {
      case 'ArrowLeft':
        this.props.dispatch({type: consts.MOVE_LEFT});
        break;
      case 'ArrowRight':
        this.props.dispatch({type: consts.MOVE_RIGHT});
        break;
    }
  }

  tick = () => {
    this.props.dispatch({
      type: consts.TICK
    })
  }

  spawnTicket = () => {
    this.props.dispatch({
      type: consts.SPAWN_TICKET,
      payload: {
        x: Math.ceil((window.innerWidth - consts.TICKET_WIDTH) * Math.random()),
        points: Math.ceil(Math.random() * 50) + 50
      }
    })
  }

  render() {
    const { tickets, cart, score } = this.props;

    return (
      <div className="container">
        <Landscape/>
        <div className="score">{score}</div>
        {
          tickets.map((ticket, index) =>
            <Ticket
              key={index}
              rawTicket={ticket}
            />
          )
        }
        <Cart
          rawCart={cart}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tickets: state.tickets,
  cart: state.cart,
  score: state.score
});

const _App = connect(mapStateToProps)(App);

export default _App;
