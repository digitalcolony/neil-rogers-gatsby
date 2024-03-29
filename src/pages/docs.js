import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Meta from "../components/Meta"
import PrimaryLayout from "../layouts/PrimaryLayout"

const Docs = () => {
  const images = useStaticQuery(graphql`
    query {
      convert: file(relativePath: { eq: "images/convert-tapes.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)
  return (
    <PrimaryLayout title="📄Docs">
      <Meta />
      <Helmet>
        <title>Neil Rogers Documents - Tributes, Media, and Show Info</title>
        <meta
          name="description"
          content="News and updates related to the Neil Rogers audio restoration project."
        />
        <link rel="canonical" href="https://neilrogers.org/docs/" />
        <meta
          property="og:description"
          content="News and updates related to the Neil Rogers audio restoration project."
        />
        <meta property="og:url" content="https://neilrogers.org/docs/" />
      </Helmet>

      <h3>Show Info</h3>
      <p>
        <a
          href="https://docs.google.com/spreadsheets/d/1czK9DiOqCK_P8lYS5Im8a_u9IZnKW39lBAuq3FXdmRM/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Google Spreadsheet
        </a>{" "}
        - Our Spreadsheet has data regarding show dates, times when Neil had a
        guest host, best of show info, timeline dates, and more.
      </p>

      <h3>Tributes</h3>
      <p>
        <a href="https://criticalmas.medium.com/tribute-to-eric-harold-neil-rogers-780f7277d5f1">
          Tribute to Eric Harold
        </a>{" "}
        - Eric was Neil's web guy throughout the WQAM years.
      </p>
      <p>
        <a href="https://criticalmas.medium.com/tribute-to-john-baker-neil-rogers-2c9127024b51">
          Tribute to John Baker
        </a>{" "}
        - John was the greatest Neil historian ever and was essential in helping
        us recover so much of Neil's memory.
      </p>
      <p>
        <a href="https://criticalmas.medium.com/tribute-to-jorge-rodriguez-deec8bcc37d8">
          Tribute to Jorge Rodriguez
        </a>{" "}
        - Jorge was the longtime producer and guest host for the Neil Rogers
        Show.
      </p>

      <h3>Media</h3>
      <p>
        <a href="https://criticalmas.medium.com/miami-herald-covers-the-neil-rogers-audio-recovery-project-neil-rogers-3ab76861ceed">
          Miami Herald Covers the Neil Rogers Audio Recovery Project
        </a>
      </p>
      <p>
        <a href="https://criticalmas.medium.com/neil-rogers-2016-radio-hall-of-fame-induction-neil-rogers-5dd2906f7bf9">
          Neil Rogers 2016 Radio Hall of Fame Induction
        </a>
      </p>
      <p>
        <a href="https://criticalmas.medium.com/interview-with-radio-ink-january-2014-neil-rogers-b43bfbb83786">
          Interview with Radio Ink (January 2014)
        </a>
      </p>
      <p>
        <a href="https://www.sun-sentinel.com/news/fl-xpm-2014-01-04-fl-neil-rogers-radio-legacy-20140103-story.html">
          A Neil Rogers renaissance (January 2014: Sun Sentinel)
        </a>
      </p>
      <p>
        <a href="https://southfloridareporter.com/legendary-radio-host-neil-rogers-lives-on-online/">
          Legendary Radio Host Neil Rogers Lives On … Online! (April 2018: Miami
          Herald)
        </a>
      </p>

      <h3>Other</h3>
      <p>
        <a href="https://github.com/NeilRogersRadio/radio-stories">
          Radio Stories
        </a>{" "}
        - Radio stories from WIOD.
      </p>
      <p>
        <b>Cranker's Courier</b> - In the mid 1980s a young man, while still in
        high school, began sending out a newsletter to various talk hosts. He
        was one of the most prolific crank callers in the Miami market, and
        managed to befriend some of the board ops. He was able to get inside
        information about the talk stations. Neil dubbed him Fruit Cake, and the
        moniker stuck.{" "}
        <a href="https://archive.org/details/crankers-courier">Archive</a>,{" "}
        <a href="https://1drv.ms/u/s!AgQrITkx1J-8pPcHiQJAWd_dwKJKGw?e=GyryKE">
          OneDrive PDF Folder
        </a>
      </p>
      <p>
        <a href="https://criticalmas.medium.com/learning-to-spell-with-neil-rogers-neil-rogers-dfe5a600ee72">
          Learning to Spell With Neil Rogers
        </a>{" "}
        - Common spelling mistakes associated with the Neil Rogers Show.
      </p>
      <hr />
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
      <figure className="wider">
        <GatsbyImage
          image={images.convert.childImageSharp.gatsbyImageData}
          alt={"converting cassette to MP3"}
        />
        <figcaption>Converting a cassette to an MP3</figcaption>
      </figure>

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

      <div className="links">
        <p>
          1: Go to YouTube and find a show without notes or peek at our shared{" "}
          <a href="https://docs.google.com/spreadsheets/d/1czK9DiOqCK_P8lYS5Im8a_u9IZnKW39lBAuq3FXdmRM/edit?usp=sharing">
            Google Drive Spreadsheet
          </a>
          .
        </p>
        <p>2: Listen to show and take notes.</p>
        <p>
          3: Post the show notes either as a comment on the video or email them
          to audio@neilrogers.org.
        </p>
        <p>
          4: Those notes will either be pinned (as top comment) and/or added to
          the show description.
        </p>
      </div>

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
        1997, to January 19, 1999. They will be in Real Audio format.
      </p>
      <p>
        Below is a list of URLs that might be clues as to what servers or backup
        archives these audio files might be found.{" "}
        <b>Please help us recover these shows!</b>
      </p>

      <div className="links yahoo">
        <p>www.broadcast.com/radio/archives/wqam/rogers/</p>
        <p>www.yahoo.com/radio/archives/wqam/rogers/</p>
        <p>radio.yahoo.com//archives/wqam/rogers/</p>
        <p>launch.yahoo.com/launchcast/archives/wqam/rogers/</p>
        <p>new.music.yahoo.com/launchcast/archives/wqam/rogers/</p>
        <p>music.yahoo.com/launchcast/archives/wqam/rogers/</p>
        <p>playlist.broadcast.com</p>
      </div>

      <p>
        Yahoo! will also have shows from 2000 to May 2002, which we need for our
        archives. I am absolutely convinced these shows exist somewhere on a
        backup of a Yahoo! server that the public does not have access to.
      </p>

      <hr />
      <h3>Privacy Policy</h3>
      <p>NeilRogers.org does not use any cookies or collect any user data.</p>
    </PrimaryLayout>
  )
}

export default Docs
