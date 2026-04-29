import './App.css'
import '../src/Style/Color.css'
import LandingPage from './Page/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Explore from './Page/Explore'
import Notification from './Page/Notification'
import Follow from './Page/Follow'
import Chat from './Page/Chat'
import Grok from './Page/Grok'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/explore' element={<Explore/>}/>
      <Route path='/notifications' element={<Notification/>}/>
      <Route path='/follow' element={<Follow/>}/>
      <Route path='/chat' element= {<Chat/>}/>
      <Route path='/grok' element={<Grok/>}/>
    </Routes>
    </BrowserRouter>
        // <BrowserRouter>
        // <Routes>          
        // <Route path="/home" element={<LandingPage />} />
        // <Route path="/explore" element={<Explore />} />
        // <Route path="/notifications" element={<Notification />} />
        //   </Routes>
        // </BrowserRouter>
    
  )
}

export default App
