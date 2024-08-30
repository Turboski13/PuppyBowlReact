import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import fetchAllPlayersAPI from '../api/index.js'

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

//button to display single player
  playersList.querySelectorAll('.see-details').forEach(button => {
    button.addEventListener('click', async (e) => {
      const playerId = parseInt(e.target.getAttribute('data-id'), 10);
      await renderSinglePlayer(playerId);
    });
  });
//button to delete a player
  playersList.querySelectorAll('.remove-player').forEach(button => {
    button.addEventListener('click', async (e) => {
      const playerId = parseInt(e.target.getAttribute('data-id'), 10);
      await removePlayer(playerId);

      state.players = await fetchAllPlayers();
      renderAllPlayers();
    });
  });

  console.log(playerList)
};





