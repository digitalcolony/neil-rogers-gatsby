import React from "react"
import { Helmet } from "react-helmet"
import Meta from "./meta"
import PrimaryLayout from "../layouts/PrimaryLayout"
import Sound from "../components/Sound"
import JSONData from "../data/soundboard.json"



function compareStrings(a,b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  return (a < b) ? -1 : (a > b) ? 1 : 0;
}

const sounds = JSONData.files;
sounds.sort(function(a,b) {
  return compareStrings(a.name, b.name);
})

export default () => {
  return (
   

    <PrimaryLayout title="🔊The Neil Rogers Soundboard">
      <Meta />
      <Helmet>
        <title>Neil Rogers Soundboard</title>
        <meta
          name="description"
          content="Soundboard for Neil Rogers, Jennifer Rehm, Jim Mandich, Larry King and more!"
        />
        <link rel="canonical" href="https://neilrogers.org/soundboard/" />
        
      </Helmet>

      <p>You can download these drops on <a href="https://archive.org/details/neil-rogers-show-soundboard">Archive</a>{" "}or{" "}<a href="https://github.com/NeilRogersRadio/sounds/tree/master/drops">GitHub</a>.</p>
     
        <div>
          {sounds.map(drop => (
            <Sound src={drop.mp3} name={drop.name} artist={drop.artist} key={drop.mp3} />
          ))}
        </div>
      
    </PrimaryLayout>
  )
}


