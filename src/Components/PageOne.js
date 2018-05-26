import React from 'react';
import { addPlayer, getPlayers, updatePlayer } from '../Actions/players';
import { connect } from 'react-redux';


class PageOne extends React.Component {
  componentDidMount() {
    // this.props.dispatch(getPlayers());
  }

  handleSubmit(event) {
    event.preventDefault();
    const playerName = event.target[0].value;
    if (this.isRepeatedName(playerName)) {
      this.props.dispatch(updatePlayer(playerName.toUpperCase()));
    } else {
      const player = { name: playerName, id:55, isActive: 0 };
      this.props.dispatch(addPlayer(player));
    }
  }

  isRepeatedName(playerName) {
    var isRepeated = false;
    this.props.players.forEach(x => {
      if (playerName.toUpperCase() === x.name) {
        isRepeated = true;
      }
    });
    return isRepeated;
  }

  render() {
    return (
      <div>
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" />
          <button type="submit">Add Player</button>
        </form>
      </div>
      <div>
        <h1>{this.props.name}</h1>
        <ul>
          {
            this.props.players.map(player => {
              var color;
              const green = '#008000';
              const red = '#FF0000';

              return <li style={{
                color: player.isActive === 1 ? green : red
              }} key={player.id}>{player.name + ': ' + player.isActive}</li>;
            })
          }
        </ul>
      </div>
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
