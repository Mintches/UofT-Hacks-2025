import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';

function App() {
  const [show, setShow] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [timer, setTimer] = useState(10);

  const startGame = () => {
    setInterval(function() {
      setTimer((prev) => prev-1);
    }, 50);
  };

  useEffect(() => {
    if (timer <= 0) {
      setShow(true);
    }
  }, [timer]);
  
  const move = () => {
    if (!gameStarted) {
      startGame();
      setGameStarted(true);
      console.log(gameStarted)
    }
    setTimer(10);
    setX(400*Math.random()-200);
    setY(400*Math.random()-200);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Depolarizer.
        </p>
        <div className="relative">
          <Button
            className="absolute"
            style={{left: x, top: y}}
            onMouseEnter={() => move()}
            variant="filled"
          >
            Le Button
          </Button>
        </div>
        {show && <>
        <img
          className="absolute"
          src="https://i.scdn.co/image/ab6761610000e5eba07eb018071ca45120dceb4f"
          alt="Freddy Fazbear"
        />
        <div className="absolute" color="white">You lost bozo</div>
        </>
        }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
