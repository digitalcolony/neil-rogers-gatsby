import React from "react"
import soundStyles from "../styles/sound.module.css"
import nextId from "react-id-generator"

function playSound(mp3) {
  const sound = new Audio(mp3);
  sound.play();
}

const Sound = props => {
  const { artist, src, name } = props
  //const audioId = nextId()
  const buttonId = nextId("btn-")

  return (
    <span className="track">
      {/* <audio
        id={audioId}
        onPlay={() =>
          (document.getElementById(buttonId).style.color = "yellow")
        }
        onEnded={() =>
          (document.getElementById(buttonId).style.color = "white")
        }
      >
        <source src={src} preload="none" type="audio/mp3" />
      </audio> */}

      <button
        id={buttonId}
        className={soundStyles.myButton}
        onClick={() => playSound(src)}
        title={artist}
      >
        {name}
      </button>
    </span>
  )
}

export default Sound
