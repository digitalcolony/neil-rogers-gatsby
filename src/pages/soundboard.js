import React, { useState } from "react"
import { Helmet } from "react-helmet"
import Meta from "../components/Meta"
import PrimaryLayout from "../layouts/PrimaryLayout"
import Sound from "../components/Sound"
import JSONData from "../data/soundboard.json"
import * as soundboardStyles from "../styles/soundboard.module.css"
import RadioButton from "../components/RadioButton"

function FilteredSoundList({ sounds }) {
  const [query, setQuery] = useState("")
  const [action, setAction] = useState("play")

  sounds.sort((a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
  })

  const handleSearch = (event) => setQuery(event.target.value)
  const handlePlayChange = () => setAction("play")
  const handleDownloadChange = () => setAction("download")
  const handleClipboardChange = () => setAction("clipboard")

  const filteredSounds = sounds.filter((item) => {
    return (
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.artist.toLowerCase().includes(query.toLowerCase())
    )
  })

  return (
    <div>
      <ul>
        <li>
          <input
            type="search"
            value={query}
            onChange={handleSearch}
            className={soundboardStyles.filter}
            placeholder="Search Sounds"
          />
        </li>
        <li>
          <RadioButton
            label="Play"
            value={action === "play"}
            onChange={handlePlayChange}
          />
        </li>
        <li>
          <RadioButton
            label="Download"
            value={action === "download"}
            onChange={handleDownloadChange}
          />
        </li>
        <li>
          <RadioButton
            label="Copy to Clipboard"
            value={action === "clipboard"}
            onChange={handleClipboardChange}
          />
        </li>
      </ul>

      <div>
        {filteredSounds.map((drop) => (
          <Sound
            src={drop.mp3}
            name={drop.name}
            artist={drop.artist}
            key={drop.mp3}
            action={action}
          />
        ))}
      </div>
    </div>
  )
}

const Soundboard = () => {
  const sounds = JSONData.files

  return (
    <PrimaryLayout title="🔊The Neil Rogers Soundboard">
      <Meta />
      <Helmet>
        <title>
          The Neil Rogers Soundboard - Play drops from Neil, Jim Mandich, Larry
          King, and More!
        </title>
        <meta
          name="description"
          content="Soundboard for Neil Rogers, Jennifer Rehm, Jim Mandich, Larry King and more!"
        />
        <link rel="canonical" href="https://neilrogers.org/soundboard/" />
        <meta
          property="og:description"
          content="Soundboard for Neil Rogers, Jennifer Rehm, Jim Mandich, Larry King and more!"
        />
        <meta property="og:url" content="https://neilrogers.org/soundboard/" />
      </Helmet>

      <FilteredSoundList sounds={sounds} />

      <p>
        {" "}
        You can download these drops on{" "}
        <a href="https://archive.org/details/neil-rogers-show-soundboard">
          Archive
        </a>{" "}
        or{" "}
        <a href="https://github.com/NeilRogersRadio/sounds/tree/master/drops">
          GitHub
        </a>
        .
      </p>
    </PrimaryLayout>
  )
}

export default Soundboard
