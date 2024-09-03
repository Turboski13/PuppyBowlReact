import './index.css'
import { Routes, Route } from "react-router-dom";
import AllPlayers from './components/AllPlayers'
import NavBar from './components/NavBar'
import NewPlayerForm from './components/NewPlayerForm'
import SinglePlayer from './components/SinglePlayer'
import './App.css'

function App() {
  
  return (
    <div>
    <h1>Welcome To Puppy Bowl</h1>
      <NavBar />
      <div id="main-section">
      <h1>Welcome To Puppy Bowl</h1>
      <h2>Come and join us for a fun filled day full of adorable puppy football!<br></br>
      Get ready to meet the talented pups competing in this year's Puppy Bowl!!</h2>
      <AllPlayers/>
   <BrowserRouter>        
  <Routes>
    <Route path="/NavBar" element={<NavBar />} /> 
      <Route path="/AllPlayers" element={<AllPlayers />} />   
            <Route path="/NewPlayerForm" element={<NewPlayerForm />} /> 
      <Route path="/SinglePlayer'" element={<SinglePlayer />} /> 
  </Routes>
  </BrowserRouter>
</div>
    </div>
  );
}

export default App
