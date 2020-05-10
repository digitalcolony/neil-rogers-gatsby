import React from "react"
import { Helmet } from "react-helmet"
import Meta from "./meta"
import PrimaryLayout from "../layouts/PrimaryLayout"

export default () => {
  return (
    <PrimaryLayout title="Docs">
      <Meta />
      <Helmet>
        <title>Neil Rogers Blog</title>
        <meta
          name="description"
          content="News and updates related to the Neil Rogers audio restoration project."
        />
        <link rel="canonical" href="https://neilrogers.org/docs/" />
      </Helmet>

      <h3>Tributes</h3>
      <p>
        <a href="https://medium.com/@CriticalMAS/tribute-to-eric-harold-neil-rogers-780f7277d5f1">
          Tribute to Eric Harold
        </a>{" "}
        - Eric was Neil's web guy throughout the WQAM years.
      </p>
      <p>
        <a href="https://medium.com/@CriticalMAS/tribute-to-john-baker-neil-rogers-2c9127024b51">
          Tribute to John Baker
        </a>{" "}
        - John was the greatest Neil historian ever and was essential in helping
        us recover so much of Neil's memory.
      </p>

      <h3>Media</h3>
      <p>
        <a href="https://medium.com/@CriticalMAS/miami-herald-covers-the-neil-rogers-audio-recovery-project-neil-rogers-3ab76861ceed">
          Miami Herald Covers the Neil Rogers Audio Recovery Project
        </a>
      </p>
      <p>
        <a href="https://medium.com/@CriticalMAS/neil-rogers-2016-radio-hall-of-fame-induction-neil-rogers-5dd2906f7bf9">
          Neil Rogers 2016 Radio Hall of Fame Induction
        </a>
      </p>
      <p>
        <a href="https://medium.com/@CriticalMAS/interview-with-radio-ink-january-2014-neil-rogers-b43bfbb83786">
          Interview with Radio Ink (January 2014)
        </a>
      </p>

      <h3>Support</h3>
      <p>
        There are several ways you can support the Neil Rogers Audio Restoration
        Project.
      </p>

      <h4>#1 Donate Audio</h4>
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

      <h4>#2 Listen and Write Show Notes</h4>
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

      <h4>#3 Share and Like</h4>
      <p>
        Spread the word to others about Uncle Neil by sharing links to
        everything we have saved. Give a like to the shows. The more fans that
        discover Neil is alive and well in the archives, the more likely we will
        find the fans that have more audio to add to our collection.
      </p>

      <h4>#4 Do You Know Someone That Works For Yahoo!?</h4>
      <p>
        In 1999 Yahoo! acquired Broadcast.com, which archived the Neil Rogers
        Show in the early days. We need many of the shows from December 30,
        1997, to January 19, 1999. They will be in Real Audio format. Below is a
        list of URLs that might be clues as to what servers or backup archives
        these audio files might be found.{" "}
        <b>Please help us recover these shows!</b>
      </p>

      <ul style={{ listStyleType: "none", wordBreak: "break-all" }}>
        <li>www.broadcast.com/radio/archives/wqam/rogers/</li>
        <li>www.yahoo.com/radio/archives/wqam/rogers/</li>
        <li>radio.yahoo.com//archives/wqam/rogers/</li>
        <li>launch.yahoo.com/launchcast/archives/wqam/rogers/</li>
        <li>new.music.yahoo.com/launchcast/archives/wqam/rogers/</li>
        <li>music.yahoo.com/launchcast/archives/wqam/rogers/</li>
        <li>playlist.broadcast.com</li>
      </ul>

      <p>
        Yahoo! will also have shows from 2000 to May 2002, which we need for our
        archives. I am absolutely convinced these shows exist somewhere on a
        Yahoo! server that the public does not have access to.
      </p>

      <h3>Privacy Policy</h3>
      <p>
        The 2020 rewrite of NeilRogers.org does not use any cookies or tracking
        or collect any user data.
      </p>
    </PrimaryLayout>
  )
}
