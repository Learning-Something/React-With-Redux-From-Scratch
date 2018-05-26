import { ADD_PLAYER, GET_PLAYERS, ADD_PLAYERS, UPDATE_PLAYER } from '../Actions/players';

const initialState = [];

export function playersReducer(state=initialState, action) {
  switch(action.type) {
    case ADD_PLAYER:
      const player = {...action.player, isActive: 0, id: action.player.tag }
      return [...state, toUpperPlayerName(player)];
    case UPDATE_PLAYER:
      const newState = Object.assign(state);
      newState.forEach(player => {
        if (player.name == action.playerName) {
          player.isActive = 1;
        }
      });
      return [...newState];
    default:
      return state;
  }
}

function toUpperPlayerName(player) {
  const playerUp = Object.assign(player);
  console.log(player)
  playerUp.name = player.name.toUpperCase();
  return playerUp;
}