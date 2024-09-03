const cohortName = "2405-ftb-et-web-pt";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;
import App from '../App'

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