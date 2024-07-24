import { useState } from "react"
import Startgame from "./components/startgame"
import Gameplay from "./components/Gameplay";
function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  }
  return (
    <>
      {isGameStarted ? <Gameplay /> : <Startgame toggle={toggleGamePlay} />}
    </>
  )
}

export default App
