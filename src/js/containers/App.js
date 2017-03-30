import React from 'react';
import { connect } from 'react-redux';
import Ticket from '../components/Ticket';
import main from '../../less/main.less'

class App extends React.Component {
  render() {
      const { tickets } = this.props;

      return (
          <div className="container">
              {
                  tickets.map(ticket =>
                    <Ticket
                        rawTicket={ticket}
                    />
                  )
              }
          </div>
      );
  }
}

const mapStateToProps = state => ({
    someText: state.text,
    tickets: state.tickets
});

const _App = connect(mapStateToProps)(App);

export default _App;
