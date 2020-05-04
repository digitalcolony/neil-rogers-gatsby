import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout"
import neil_pope from "../images/pope.jpg"

export default () => {
  return (
    <PrimaryLayout title="Download, Stream or Torrent Audio">
      <p>
        The Neil Rogers Audio Restoration Project has recovered almost 5,000
        hours of commercial-free radio. In addition to Neil Rogers, we also have
        shows from other South Florida radio icons. You are free to use the
        links below to download everything for free. No account is required.
      </p>
      <p>
        You can view our{" "}
        <a href="https://docs.google.com/spreadsheets/d/1czK9DiOqCK_P8lYS5Im8a_u9IZnKW39lBAuq3FXdmRM/edit?usp=sharing">
          Google Drive Spreadsheet
        </a>{" "}
        for a list of recovered audio.
      </p>

      <h3>YouTube</h3>

      <p>
        Most of the recovered shows can be played on YouTube. There are some
        shows that have been blocked for copyright issues based on a song that
        NEIL played during a broadcast.{" "}
      </p>
      <p>
        <a href="https://www.youtube.com/c/NeilRogersRadio">
          youtube.com/c/NeilRogersRadio
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
          archive.org/details/@neil_rogers_radio
        </a>
      </p>
      <p>
        There is also a folder of recovered audio for the{" "}
        <a href="https://archive.org/details/RickSudsShow">Rick Suds Show</a>{" "}
        and <a href="https://archive.org/details/stan-major-show">Stan Major</a>
        .
      </p>

      <h3>OneDrive</h3>
      <p>
        All the shows and photos are also available for download on OneDrive.
      </p>
      <p>
        <a href="https://t.co/dWGtbjuJlV?amp=1">Neil Rogers OneDrive</a>
      </p>

      <h3>Best of CDs</h3>
      <p>
        We have recovered every single "Best of CD" that Neil released. Some of
        the early years were recovered from cassette.{" "}
        <a href="https://t.co/dWGtbjuJlV?amp=1">OneDrive</a> (the Sounds and CDs
        folder),
        <a href="https://www.youtube.com/playlist?list=PL8h2eiL0gjh9ccaSm8yEwCOWo7cHJ33Cd">
          YouTube
        </a>
        , and{" "}
        <a href="https://archive.org/details/@neil_rogers_radio">Archive.org</a>
        .
      </p>
      <p>
        <img src={neil_pope} alt="Neil Rogers Mask" />
      </p>
    </PrimaryLayout>
  )
}
