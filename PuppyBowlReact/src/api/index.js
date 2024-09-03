import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice } from "@reduxjs/toolkit";
const cohortName = "2405-ftb-et-web-pt";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;
import App from '../App'

/* const fetchAllPlayersAPI = async () => {
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
}; */

const PuppyBowlApi = createApi({
    reducerPath: "puppyBowlApi",
    baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2405-FBT-et-WEB-PT",
  }),
    endpoints: (builder) => ({
        fetchPlayers: builder.query({
            query: () => `players`,
        method: "GET",
        responseHandler: (response) => response.json(), 
  }), 
}),
})


export default PuppyBowlApi;