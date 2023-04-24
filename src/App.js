import logo from "./Steam.webp";
import "./App.css";
import music from "./in_da_club.mp3";
import { useEffect, useState } from "react";

function App() {
  const audio = new Audio(music);
  audio.loop = true;
  useEffect(() => {
    audio.loop = true;
    audio.play();
  }, []);
  const [show, setShow] = useState(false);
  return (
    <>
      {show ? (
        <div className="App">
          <header className="App-header">
            <h1>
              Happy BirthDay Abbas!! &#10084;
              <br />
            </h1>

            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Redeem code: <code>6RBRD-7YX5Q-G7WJ3</code>
            </p>
            <h1>Love You! &#10084;</h1>
          </header>
        </div>
      ) : (
        <div className="App">
          <div className="App-header">
            <button
              onClick={() => {
                audio.loop = true;
                audio.play();
                setShow(true);
              }}
              className="buttons"
            >
              Ready? Go!!
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
