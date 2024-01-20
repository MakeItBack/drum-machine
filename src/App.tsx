import { useState } from "react";
import "./styles/App.scss";
import { Drum, drums, getDrumFromControlKey, getDrumFromName } from "./drumData";

function App() {
  const [lastPlayed, setLastPlayed] = useState<string | undefined>(undefined);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // const messageDisplay = document.getElementById("drum-display-container");

  function showDisplay(drumName: string) {
    // messageDisplay?.classList.add("showDisplay");
    setLastPlayed(drumName);
  }

  const handleClick = (event: any) => {
    setIsPlaying(true);
    const drumAudio = document.getElementById(event.target.firstChild.id) as HTMLAudioElement;
    const hitDrum: Drum | undefined = drumAudio ? getDrumFromName(event.target.id) : undefined;
    if (hitDrum && drumAudio) {
      showDisplay(hitDrum.name);
      drumAudio?.play();
    } else showDisplay("Error!");
    setTimeout(() => {
      setIsPlaying(false);
    }, 300);
  };

  document.addEventListener("keypress", (event) => {
    setIsPlaying(true);
    const drumAudio = document.getElementById(event.key.toUpperCase()) as HTMLAudioElement;
    const hitDrum: Drum | undefined = drumAudio ? getDrumFromControlKey(drumAudio.id) : undefined;
    if (hitDrum) {
      showDisplay(hitDrum.name);
      drumAudio?.play();
    } else {
      showDisplay("Try again!");
    }
    setTimeout(() => {
      setIsPlaying(false);
    }, 300);
  });

  return (
    <div id="drum-machine">
      <div id="drum-pads">
        {drums.map((drum) => {
          return (
            <div className="drum-pad" id={drum.name} key={drum.name} onClick={handleClick}>
              <audio className="clip" id={drum.controlKey} src={drum.sound}></audio>
              {drum.controlKey}
            </div>
          );
        })}
      </div>

      <div id="display" className={isPlaying ? "showDisplay" : "hideDisplay"}>
        {lastPlayed}
      </div>
    </div>
  );
}

export default App;
