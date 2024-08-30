import { Routes, Route, Link } from "react-router-dom";
import NavBar from './components/NavBar.jsx'


export default function NavBar() {
    return (
      <div id="container">
      <div id="navbar"> 
      <Link to="/AllPlayers">All Players</Link>
      <Link to="/NavBar">Navigation Bar</Link>
      <Link to="/NewPlayerForm">New Player Form</Link>
      <Link to="/SinglePlayer">Single Player</Link>
      </div>
      </div>
    );
  }