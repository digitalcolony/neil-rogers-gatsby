import React,  { useState }  from "react"
import { Helmet } from "react-helmet"
import Meta from "./meta"
import PrimaryLayout from "../layouts/PrimaryLayout"
import Sound from "../components/Sound"
import JSONData from "../data/soundboard.json"
import soundboardStyles from "../styles/soundboard.module.css"

function FilteredSoundList({sounds }) {
  const [query, setQuery] = useState("");

  sounds.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  const onChange = (event) => setQuery(event.target.value);

  const filteredSounds = sounds.filter(item => {
      return (
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.artist.toLowerCase().includes(query.toLowerCase())
      );
  });

  return (
    <div>
      <input type="search" value={query} onChange={onChange} className={soundboardStyles.filter} placeholder="Search Sounds"/>

      <div>
        {filteredSounds.map((drop) => (
              <Sound src={drop.mp3} name={drop.name} artist={drop.artist} key={drop.mp3} />
            ))}
      </div>
    </div>
  )    
}

export default function Soundboard () {
  const sounds = JSONData.files;

  return (
  
    <PrimaryLayout title="🔊The Neil Rogers Soundboard">
      <Meta />
      <Helmet>
        <title>The Neil Rogers Soundboard - Play drops from Neil, Jim Mandich, Larry King, and More!</title>
        <meta
          name="description"
          content="Soundboard for Neil Rogers, Jennifer Rehm, Jim Mandich, Larry King and more!"
        />
        <link rel="canonical" href="https://neilrogers.org/soundboard/" />
      </Helmet>
    
     <FilteredSoundList sounds={sounds}/>

     <p> You can download these drops on <a href="https://archive.org/details/neil-rogers-show-soundboard">Archive</a>{" "}or{" "}<a href="https://github.com/NeilRogersRadio/sounds/tree/master/drops">GitHub</a>.</p>
      
    </PrimaryLayout>
  )
}
