import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Meta from "../components/Meta"
import PrimaryLayout from "../layouts/PrimaryLayout"

const Audio = () => {
  const images = useStaticQuery(graphql`
    query {
      pope: file(relativePath: { eq: "images/neil-pope-restored.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  return (
    <PrimaryLayout title="📻Download, Stream or Torrent Audio">
      <Meta />
      <Helmet>
        <title>Download The Neil Rogers Show</title>
        <meta
          name="description"
          content="Download audio from the Radio God Neil Rogers."
        />
        <link rel="canonical" href="https://neilrogers.org/audio/" />
        <meta property="og:title" content="Download The Neil Rogers Show" />
        <meta
          property="og:description"
          content="Download audio from the Radio God Neil Rogers."
        />
        <meta property="og:url" content="https://neilrogers.org" />
      </Helmet>

      <p>
        The Neil Rogers Audio Restoration Project has recovered almost{" "}
        <mark>
          <b>5,000 hours of commercial-free radio</b>
        </mark>
        . In addition to Neil Rogers, we also have shows from other South
        Florida radio icons. You are free to use the links below to download
        everything for free. No account is required.
      </p>
      <section>
        <aside>
          <h3>YouTube</h3>

          <p>
            Most of the recovered shows can be played on YouTube. There are some
            shows that have been blocked for copyright issues based on a song
            that NEIL played during a broadcast.{" "}
          </p>
          <p>
            <a
              href="https://www.youtube.com/c/NeilRogersRadio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>YouTube &#x2197;</i>
            </a>
          </p>
        </aside>

        <aside>
          <h3>Archive.org</h3>
          <p>
            Archive.org now hosts all our Neil Rogers Show (plus the{" "}
            <a
              href="https://archive.org/details/RickSudsShow"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rick Suds Show
            </a>{" "}
            and{" "}
            <a
              href="https://archive.org/details/stan-major-show"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stan Major
            </a>
            ). There you can stream, download, or torrent. We even have a folder
            for unedited shows that still have the original commercials.
          </p>
          <p>
            <a href="https://archive.org/details/@neil_rogers_radio">
              <i>Archive &#x2197;</i>
            </a>
          </p>
        </aside>
      </section>
      <section>
        <aside>
          <h3>OneDrive</h3>
          <p>
            All the shows and photos are also available for download on
            OneDrive.
          </p>
          <p>
            <a
              href="https://t.co/dWGtbjuJlV?amp=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>OneDrive &#x2197;</i>
            </a>
          </p>
        </aside>
        <aside>
          <h3>Google Drive</h3>
          <p>
            You can view our Google Drive Spreadsheet for a list of recovered
            audio. This document includes dates and some show notes.
          </p>

          <p>
            <a
              href="https://docs.google.com/spreadsheets/d/1czK9DiOqCK_P8lYS5Im8a_u9IZnKW39lBAuq3FXdmRM/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>Spreadsheet &#x2197;</i>
            </a>
          </p>
        </aside>
      </section>
      <figure className="wider">
        <GatsbyImage
          image={images.pope.childImageSharp.gatsbyImageData}
          alt={"Neil Rogers as Pope"}
          loading="eager"
        />
        <figcaption>Neil Rogers as Pope</figcaption>
      </figure>

      <section>
        <p>
          We have recovered every single "Best of CD" that Neil released. Some
          of the early years were recovered from cassette.
        </p>
        <div className="links">
          <p>
            <a
              href="https://1drv.ms/u/s!AgQrITkx1J-8pPcHiQJAWd_dwKJKGw?e=yc35P0"
              target="_blank"
              rel="noopener noreferrer"
            >
              OneDrive
            </a>{" "}
            (Sounds and CDs folder)
          </p>
          <p>
            <a
              href="https://www.youtube.com/playlist?list=PL8h2eiL0gjh9ccaSm8yEwCOWo7cHJ33Cd"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </p>
          <p>
            <a
              href="https://archive.org/details/@neil_rogers_radio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Archive.org
            </a>
          </p>
        </div>
      </section>
    </PrimaryLayout>
  )
}

export default Audio
