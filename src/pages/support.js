import React from "react"
import { Helmet } from "react-helmet"
import Meta from "../pages/meta"
import PrimaryLayout from "../layouts/PrimaryLayout"

export default () => {
  return (
    <PrimaryLayout title="Support">
      <Meta/>
      <Helmet>
        <title>Support the Neil Rogers Audio Restoration Project</title>
        <meta
          name="description"
          content="Here are the ways you can support the Neil Rogers Audio Restoration Project."
        />
        <link rel="canonical" href="https://neilrogers.org/support/" />
      </Helmet>
      <p>
        There are several ways you can support the Neil Rogers Audio Restoration
        Project.
      </p>

      <h3>#1 Donate Audio</h3>
      <p>
        Do you have any audio of the Neil Rogers Show or other South Florida
        talk radio shows that you would like to share? Check our archives to see
        if we have a show from that date. If the show is before 1999 and it
        already exists in our archive, we may still able to use your audio. Most
        of the shows before 1999 are partial. Some are good quality and some
        aren’t. We can date the show and add to the archive.
      </p>
      <p>
        Ideally, your audio should be in digital format. Since John Baker passed
        away, we are no longer set up to convert tapes to digital.
      </p>

      <p>
        Email <b>audio@neilrogers.org</b>. Thank you!
      </p>

      <h3>#2 Listen and Write Show Notes</h3>
      <p>
        Our goal is to not only collect as much audio as possible but to index
        all the shows and make the topics searchable. Many of the shows from
        2001-2009 do not have notes. Our goal is to have notes for every
        recovered show. This will make it easier for Neil fans to find the shows
        they are looking for.
      </p>

      <ol>
        <li>
          Go to YouTube and find a show without notes or peek at our shared{" "}
          <a href="https://docs.google.com/spreadsheets/d/1czK9DiOqCK_P8lYS5Im8a_u9IZnKW39lBAuq3FXdmRM/edit?usp=sharing">
            Google Drive Spreadsheet
          </a>
          .
        </li>
        <li>Listen to show and take notes.</li>
        <li>
          Post the show notes either as a comment on the video or email to
          audio@neilrogers.org.
        </li>
        <li>
          Those notes will either be pinned (as top comment) and/or added to the
          show description.
        </li>
      </ol>

      <h3>#3 Share and Like</h3>
      <p>
        Spread the word to others about Uncle Neil by sharing links to
        everything we have saved. Give a like to the shows. The more fans that
        discover Neil is alive and well in the archives, the more likely we will
        find the fans that have more audio to add to our collection.
      </p>

      <h3>#4 Do You Know Someone That Works For Yahoo!?</h3>
      <p>
        In 1999 Yahoo! acquired Broadcast.com, which archived the Neil Rogers
        Show in the early days. We need many of the shows from December 30, 1997, to
        January 19, 1999. They will be in Real Audio format. Below is a list of
        URLs that might be clues as to what servers or backup archives these
        audio files might be found. <b>Please help us recover these shows!</b>
      </p>
      {/* <ul style={{ listStyleType: "none" }}>
        <li>www.broadcast.com/radio/archives/wqam/rogers/</li>
        <li>www.yahoo.com/radio/archives/wqam/rogers/</li>
        <li>radio.yahoo.com//archives/wqam/rogers/</li>
        <li>launch.yahoo.com/launchcast/archives/wqam/rogers/</li>
        <li>new.music.yahoo.com/launchcast/archives/wqam/rogers/</li>
        <li>music.yahoo.com/launchcast/archives/wqam/rogers/</li>
        <li>playlist.broadcast.com</li>
      </ul> */}
      <p>
        Yahoo! will also have shows from 2000 to May 2002, which we need for our
        archives. I am absolutely convinced these shows exist somewhere on a
        Yahoo! server that the public does not have access to.
      </p>
    </PrimaryLayout>
  )
}
