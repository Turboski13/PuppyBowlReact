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
