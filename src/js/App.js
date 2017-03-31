import React from 'react';
import { connect } from 'react-redux';
import Ticket from './Ticket';
import Cart from './Cart';
import Landscape from './Landscape';
import * as consts from './constants';

class App extends React.Component {
  componentDidMount() {
    this.ticketSpawnInterval = setInterval(this.spawnTicket, 1000);
    this.tickInterval = setInterval(this.tick, 16);
    this.durationTimeout = setTimeout(this.endGame, 1000 * 20);
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

  endGame = () => {
    this.props.dispatch({
      type: consts.END
    })
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
        points: Math.ceil(Math.random() * 100) + Math.ceil(Math.random() * 100)
      }
    })
  }

  render() {
    const { tickets, cart, score, isFinished } = this.props;

    if (isFinished) {
      return (<h1>WEEEE you have finished with {score} points</h1>)
    }

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
  score: state.score,
  isFinished: state.isFinished
});

const _App = connect(mapStateToProps)(App);

export default _App;
