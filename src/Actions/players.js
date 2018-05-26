import axios from 'axios';

export const ADD_PLAYER = "ADD_PLAYER"; // Action
export const GET_PLAYERS = "GET_PLAYERS";
export const UPDATE_PLAYER = "UPDATE_PLAYER";


// Action creator
export function addPlayer(player) {
  return {
    type: ADD_PLAYER,
    player: player
  }
}


export function getPlayers() {
  return (dispatch) => {
    axios.get("http://jsonplaceholder.typicode.com/users")
      .then(response => {
        response.data.forEach(player => {
          dispatch(addPlayer(player))
        });
      })
  }
}

export function updatePlayer(playerName) {
  return {
    type: UPDATE_PLAYER,
    playerName: playerName
  }
}
