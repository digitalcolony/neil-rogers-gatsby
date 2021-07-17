import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import Meta from "./meta"
import PrimaryLayout from "../layouts/PrimaryLayout"

const Listen = () => {
  const images = useStaticQuery(graphql`
    query {
      neil: file(relativePath: { eq: "images/neil-rogers-show.jpg" }) {
        childImageSharp {
          fluid {
            presentationWidth
            presentationHeight
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <PrimaryLayout title="👂🏽 Podcast">
      <Meta />
      <Helmet>
        <title>Neil Rogers - Listen to the Neil Rogers Show Podcast</title>
        <meta
          name="description"
          content="Listen to the Neil Rogers Show Podcast"
        />
        <link rel="canonical" href="https://neilrogers.org/listen/" />
      </Helmet>

      <p>
        The Neil Rogers Show is available as a daily podcast. A show is released
        each morning. All the shows can also be downloaded directly from the
        resources on our <Link to="/audio/">Audio</Link> page.
      </p>

      <h3>Listen to the Neil Rogers Podcast on:</h3>
      <ul>
        <li>
          <a href="https://music.amazon.com/podcasts/299b0ce8-1edf-4a9e-bb16-6c1fa63bfc90/Neil-Rogers-Show?">
            Amazon Music
          </a>
        </li>
        <li>
          <a href="https://anchor.fm/neil-rogers-show">AnchorFM</a>
        </li>
        <li>
          <a href="https://itunes.apple.com/us/podcast/neil-rogers-show/id1231601174">
            iTunes
          </a>
        </li>
        <li>
          <a href="https://podcasts.google.com/feed/aHR0cDovL2ZlZWRzLmZlZWRidXJuZXIuY29tL05laWxSb2dlcnNTaG93">
            Google
          </a>
        </li>
        <li>
          <a href="https://open.spotify.com/show/2eQORHonddaXiNLPrVDbH3">
            Spotify
          </a>
        </li>
        <li>
          <a href="https://www.stitcher.com/show/neil-rogers-show">Stitcher</a>
        </li>
        <li>
          or directly from our{" "}
          <a href="http://feeds.feedburner.com/NeilRogersShow">Podcast RSS</a>
        </li>
      </ul>
      <p>
        If your podcast provider does not have the Neil Rogers Show, email{" "}
        <b>audio@neilrogers.org</b> and we'll work to add it.
      </p>

      <h3>Podcast Schedule</h3>
      <ul className="schedule">
        <li>MONDAY 1986-1989</li>
        <li>TUESDAY 1990-1997</li>
        <li>WEDNESDAY 1998-2001</li>
        <li>THURSDAY 2002-2003</li>
        <li>FRIDAY 2004-2005</li>
        <li>SATURDAY 2006-2007</li>
        <li>SUNDAY 2008-2009</li>
      </ul>

      <figure
        style={{
          "max-width": "670px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Img
          fluid={images.neil.childImageSharp.fluid}
          alt={"Neil Rogers Podcast"}
        />
        <figcaption>Neil Rogers Show</figcaption>
      </figure>
    </PrimaryLayout>
  )
}

export default Listen
