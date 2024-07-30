import { Outlet } from "react-router-dom"
import Login from "./Pages/Login"
import { SpotifyProvider } from './spotifyContext'


function App() {

  return (
    <SpotifyProvider>
      <Outlet />
    </SpotifyProvider>
  )
}

export default App
