import './App.css'
import '../src/Style/Color.css'
import LandingPage from './Page/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Explore from './Page/Explore'
import Notification from './Page/Notification'

function App() {
  return (
        <BrowserRouter>
        <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notifications" element={<Notification />} />
          </Routes>
        </BrowserRouter>
    
  )
}

export default App
