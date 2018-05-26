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
  const CLAN_TAG = process.env.CLAN_TAG;
  const AUTH_TOKEN = process.env.AUTH_TOKEN;
  const header = `Authorization: Bearer ${AUTH_TOKEN}`;

  return (dispatch) => {
    axios.get(
      `https://developer.clashofclans.com/clans/${CLAN_TAG}/members`,
      { headers: header }
    )
    .then(response => {
      response.data.items.forEach(player => {
        dispatch(addPlayer(player))
      });
    })
    .catch(error => {
      alert('Não foi possível conectar ao servidor');
      console.log(error);
    })

    /*
    const player = {
      "items": [
        {
          "tag": "string",
          "name": "string",
          "expLevel": 0,
          "league": {
            "id": 0,
            "name": "string",
            "iconUrls": {
              "small": "string",
              "large": "string",
              "medium": "string"
            }
          },
          "trophies": 0,
          "versusTrophies": 0,
          "role": "string",
          "clanRank": 0,
          "previousClanRank": 0,
          "donations": 0,
          "donationsReceived": 0
        }
      ]
    };

    player.items.forEach(p => dispatch(addPlayer(p)));
    */
  }
}

export function updatePlayer(playerName) {
  return {
    type: UPDATE_PLAYER,
    playerName: playerName
  }
}
