import "./App.css"
import Navigation from "./pages/Navigation"
import TopBar from "./pages/TopBar"
import { createContext, useState } from "react"

export const UserContext = createContext(null);

function App() {
  const [ username, setUsername ] = useState(null);

  return (
    <UserContext.Provider value={{username, setUsername}}>
      <Navigation />
    </UserContext.Provider>
  );
}

export default App
