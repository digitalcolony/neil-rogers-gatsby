import React from "react"
import * as soundStyles from "../styles/sound.module.css"
import nextId from "react-id-generator"

const Sound = ({ artist, src, name }) => {
  const buttonId = nextId("btn-")

  const handlePlay = () => {
    const sound = new Audio(src)
    sound.play()
    navigator.clipboard.writeText(`https://neilrogers.org${src}`)
  }

  return (
    <span className="track">
      <button
        id={buttonId}
        className={soundStyles.myButton}
        onClick={handlePlay}
        title={artist}
      >
        {name}
      </button>
    </span>
  )
}

export default Sound
