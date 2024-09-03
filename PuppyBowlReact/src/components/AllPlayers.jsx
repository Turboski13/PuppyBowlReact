import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import fetchAllPlayersAPI from '../api/index.js'

const fetchAllPlayersAPI = async () => {
  try {
    const response = await fetch(`${API_URL}/players`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const json = await response.json();
    state.players = json.data.players;
    return state.players;
  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
    return []; // Return an empty array on error to maintain consistency.
  }
};
export default fetchAllPlayersAPI;




export default function AllPlayers() {
  const [players, setPlayers] = useState([0]) 
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchPlayers = async () => {
      const playersData = await fetchAllPlayersAPI();
      setPlayers(playersData);
  };
  fetchPlayers();
  }, []);

  
  return (
      <div className="allplayers">
        <h1>The All Players Component</h1>
      </div>
    );
  }


//render players using async
const renderAllPlayers = async () => {
  const playersList = document.getElementById("playerList");
  if (!state.players.length) {
    playersList.innerHTML = "<p>No Players.</p>";
    return;
  }
// render the player list
  playersList.innerHTML = state.players.map((player) => `
    <li>
      <h4>${player.name}</h4>
      <p>ID: ${player.id}</p>
      <img src="${player.imageUrl}" alt="${player.name}" />
      <button type="button" data-id="${player.id}" class="see-details">See Details</button>
      <button type="button" data-id="${player.id}" class="remove-player">Remove from Roster</button>
    </li>
  `).join('');

};





