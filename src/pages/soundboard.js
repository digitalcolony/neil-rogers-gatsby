import React from "react"
import { Helmet } from "react-helmet"
import Meta from "./meta"
import PrimaryLayout from "../layouts/PrimaryLayout"
import Sound from "../components/sound"

export default ({ data }) => {
  return (
    <PrimaryLayout title="The Neil Rogers Soundboard">
      <Meta />
      <Helmet>
        <title>Neil Rogers Soundboard</title>
        <meta
          name="description"
          content="Soundboard for Neil Rogers, Jennifer Rehm, Jim Mandich, Larry King and more!"
        />
        <link rel="canonical" href="https://neilrogers.org/soundboard/" />
      </Helmet>
      {data.dataJson.drops.map(drop => (
        <Sound src={drop.mp3} name={drop.name} artist={drop.artist} />
      ))}
    </PrimaryLayout>
  )
}

export const query = graphql`
  query MyQuery {
    dataJson {
      drops {
        artist
        mp3
        name
      }
    }
  }
`
