import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PuppyBowlApi from '../api/index'

const AllPlayers = () => {
  const [players, setPlayers] = useState([]) 
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchPlayers = async () => {
      const playersData = await PuppyBowlApi();
      setPlayers(playersData);
  };
  fetchPlayers();
  }, []);

  
  return (
    <div>
    {
        players.map((player)=>{
            return (
                <div>
                    <h4>{player.name}</h4>
                    <h4>{player.breed}</h4>
                    <h4>{player.status}</h4>
                    <h4>{player.teamID}</h4>
                    <img src={player.imageUrl} alt="{player.name}" />
                </div>
            )
        })
    }
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



export default AllPlayers

