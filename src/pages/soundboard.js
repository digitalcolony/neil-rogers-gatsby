import React,  { useState }  from "react"
import { Helmet } from "react-helmet"
import Meta from "./meta"
import PrimaryLayout from "../layouts/PrimaryLayout"
import Sound from "../components/Sound"
import JSONData from "../data/soundboard.json"


function compareSounds(a,b) {
  a = a.name.toLowerCase();
  b = b.name.toLowerCase();

  return (a < b) ? -1 : (a > b) ? 1 : 0;
}


export default () => {
  const [sounds, setSounds] = useState(JSONData.files);
  
  sounds.sort(compareSounds);

  // sort working
  // filter NOT working 
  // look at https://codesandbox.io/s/gracious-dawn-29qi6?file=/src/App.js
  const [query, setQuery] = useState(''); 
  const onChange =(event) => setQuery(event.target.value);

  console.log("q", query);

 sounds.filter(item => {
    return (
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.artist.toLowerCase().includes(query.toLowerCase())
    );
  });


  
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
     
      <input 
        type="text" 
        placeholder="Enter item to be searched" 
        value={ query } 
        onChange={onChange} />
  

        <div>
          {
          sounds.map((drop) => (
            <Sound src={drop.mp3} name={drop.name} artist={drop.artist} key={drop.mp3} />
          ))}
        </div>
      
    </PrimaryLayout>
  )
}


