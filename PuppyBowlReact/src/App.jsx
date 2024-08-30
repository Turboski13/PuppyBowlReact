import './index.css'
import { Routes, Route } from "react-router-dom";
import AllPlayers from './components/AllPlayers.jsx'
import NavBar from './components/NavBar.jsx'
import NewPlayerForm from './components/NewPlayerForm.jsx'
import SinglePlayer from './components/SinglePlayer.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div id="main-section">
  <Routes>
      <Route path="/NavBar" element={<NavBar />} /> 
      <Route path="/AllPlayers" element={<AllPlayers />} />   
      <Route path="/NewPlayerForm" element={<NewPlayerForm />} /> 
      <Route path="/SinglePlayer'" element={<SinglePlayer />} /> 
  </Routes>
</div>
    </>
  )
}

export default App
