import React from "react"
import soundStyles from "../components/sound.module.css"
import nextId from "react-id-generator"

const Sound = props => {
  const { artist, src, name } = props
  const audioId = nextId()
  const buttonId = nextId("btn-")

  return (
    <span className="track">
      <audio
        id={audioId}
        onPlay={() =>
          (document.getElementById(buttonId).style.color = "yellow")
        }
        onEnded={() =>
          (document.getElementById(buttonId).style.color = "white")
        }
      >
        <source src={src} preload="none" type="audio/mp3" />
      </audio>
      
        <button
          id={buttonId}
          className={soundStyles.myButton}
          onClick={() => document.getElementById(audioId).play()}
          title={artist}
        >
          {name}
        </button>
    
    </span>
  )
}

export default Sound
