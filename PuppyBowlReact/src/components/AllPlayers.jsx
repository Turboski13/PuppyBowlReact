import fetchAllPlayersAPI from '../api/index.js'
import { useState, useEffect } from "react";

const renderAllPlayers = async () => {
  const playersList = document.getElementById("playerList");
  if (!state.players.length) {
    playersList.innerHTML = "<p>No Players.</p>";
    return;
  }


  playersList.innerHTML = state.players.map((player) => `
    <li>
      <h2>${player.name}</h2>
      <p>ID: ${player.id}</p>
      <img src="${player.imageUrl}" alt="${player.name}" />
      <button type="button" data-id="${player.id}" class="see-details">See Details</button>
      <button type="button" data-id="${player.id}" class="remove-player">Remove from Roster</button>
    </li>
  `).join('');

  playersList.querySelectorAll('.see-details').forEach(button => {
    button.addEventListener('click', async (e) => {
      const playerId = parseInt(e.target.getAttribute('data-id'), 10);
      await renderSinglePlayer(playerId);
    });
  });

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

export default function AllPlayers() {
  const [players, setPlayers] = useState([0]) 
  useEffect(() => {});

  
  return (
      <div className="allplayers">
        <h1>The All Players Component</h1>
      </div>
    );
  }

