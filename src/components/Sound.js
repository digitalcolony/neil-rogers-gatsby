import React, { useState } from "react"
import * as soundStyles from "../styles/sound.module.css"
import nextId from "react-id-generator"
import playIcon from "../../static/play.svg"
import downloadIcon from "../../static/download.svg"
import clipboardIcon from "../../static/clipboard.svg"

const Sound = ({ artist, src, name, action }) => {
  const [buttonText, setButtonText] = useState(name)
  const buttonId = nextId("btn-")

  const handlePlay = () => {
    const sound = new Audio(src)
    sound.play()
  }

  const handleClipboard = () => {
    navigator.clipboard.writeText(`https://neilrogers.org${src}`)
    setButtonText("Saved to Clipboard!")
    setTimeout(() => setButtonText(name), 1000)
  }

  return (
    <span className="track">
      {action === "play" && (
        <button
          id={buttonId}
          className={soundStyles.myButton}
          onClick={handlePlay}
          title={artist}
        >
          <img src={playIcon} alt="play" /> {buttonText}
        </button>
      )}
      {action === "download" && (
        <a href={src} download>
          <button id={buttonId} className={soundStyles.myButton} title={artist}>
            <img src={downloadIcon} alt="download" /> {buttonText}
          </button>
        </a>
      )}
      {action === "clipboard" && (
        <button
          id={buttonId}
          className={soundStyles.myButton}
          onClick={handleClipboard}
          title={artist}
        >
          <img src={clipboardIcon} alt="clipboard" /> {buttonText}
        </button>
      )}
    </span>
  )
}

export default Sound
