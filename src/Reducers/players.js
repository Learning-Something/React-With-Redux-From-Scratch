import { ADD_PLAYER, GET_PLAYERS } from '../Actions/players';

const initialState = [];

export function playersReducer(state=initialState, action) {
  switch(action.type) {
    case ADD_PLAYER:
      return [...state, action.player];
    default:
      return state;
  }
}
