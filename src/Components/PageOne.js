import React from 'react';
import { addPlayer, getPlayers } from '../Actions/players';
import { connect } from 'react-redux';


class PageOne extends React.Component {
  componentDidMount() {
    this.props.dispatch(getPlayers());
  }

  handleSubmit(event) {
    event.preventDefault();
    const player = { name: event.target[0].value, id:55 };
    this.props.dispatch(addPlayer(player));
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <ul>
          {
            this.props.players.map(player => <li key={player.id}>{player.name}</li>)
          }
        </ul>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" />
          <button type="submit">Add Player</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.players
  }
}

export default connect(mapStateToProps)(PageOne);
