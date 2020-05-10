import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Meta from "../pages/meta"
import PrimaryLayout from "../layouts/PrimaryLayout"

export default () => {
  const images = useStaticQuery(graphql`
    query  {
      pope: file(relativePath: { eq: "images/pope.jpg" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <PrimaryLayout title="Download, Stream or Torrent Audio">
      <Meta />
      <Helmet>
        <title>Download Neil Rogers</title>
        <meta
          name="description"
          content="Download audio for the radio god Neil Rogers."
        />
        <link rel="canonical" href="https://neilrogers.org/download/" />
      </Helmet>
      
      <p>
        The Neil Rogers Audio Restoration Project has recovered almost <mark><b>5,000
        hours of commercial-free radio</b></mark>. In addition to Neil Rogers, we also have
        shows from other South Florida radio icons. You are free to use the
        links below to download everything for free. No account is required.
      </p>
      <p>
        You can view our Google Drive Spreadsheet for a list of recovered audio.
      </p>

      <a
        href="https://docs.google.com/spreadsheets/d/1czK9DiOqCK_P8lYS5Im8a_u9IZnKW39lBAuq3FXdmRM/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <b>Spreadsheet &#x2197;</b>
      </a>

      <h3>YouTube</h3>

      <p>
        Most of the recovered shows can be played on YouTube. There are some
        shows that have been blocked for copyright issues based on a song that
        NEIL played during a broadcast.{" "}
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

      <h3>Archive.org</h3>
      <p>
        Archive.org now hosts all our Neil Rogers Show. There you can stream,
        download, or torrent. We even have a folder for unedited shows that
        still have the original commercials.
      </p>
      <p>
        <a href="https://archive.org/details/@neil_rogers_radio">
          <i>Archive &#x2197;</i>
        </a>
      </p>
      <p>
        There is also a folder of recovered audio for the{" "}
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
        .
      </p>

      <h3>OneDrive</h3>
      <p>
        All the shows and photos are also available for download on OneDrive.
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

      <h3>Best of CDs</h3>
      <p>
        We have recovered every single "Best of CD" that Neil released. Some of
        the early years were recovered from cassette.{" "}
        <a
          href="https://t.co/dWGtbjuJlV?amp=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Best Of
        </a>{" "}
        (the Sounds and CDs folder),{" "}
        <a
          href="https://www.youtube.com/playlist?list=PL8h2eiL0gjh9ccaSm8yEwCOWo7cHJ33Cd"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
        </a>
        , and{" "}
        <a
          href="https://archive.org/details/@neil_rogers_radio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Archive.org
        </a>
        .
      </p>
      <Img
        fixed={images.pope.childImageSharp.fixed}
        alt={"Neil Rogers as Pope"}
      />
    </PrimaryLayout>
  )
}
