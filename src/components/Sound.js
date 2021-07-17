import React from "react"
import * as soundStyles from "../styles/sound.module.css"
import nextId from "react-id-generator"

function playSound(mp3) {
  const sound = new Audio(mp3)
  sound.play()
}

const Sound = props => {
  const { artist, src, name } = props
  //const audioId = nextId()
  const buttonId = nextId("btn-")

  return (
    <span className="track">
      <button
        id={buttonId}
        className={soundStyles.myButton}
        onClick={() => playSound(src, buttonId)}
        title={artist}
      >
        {name}
      </button>
    </span>
  )
}

export default Sound
