export const ADD_PLAYER = "ADD_PLAYER"; // Action
export const GET_PLAYERS = "GET_PLAYERS";


// Action creator
export function addPlayer(player) {
  return {
    type: ADD_PLAYER,
    player: player
  }
}


export function getPlayers() {
  return (dispatch) => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(response => {
        response.map(player => dispatch(addPlayer(player)));
      })
  }
}
