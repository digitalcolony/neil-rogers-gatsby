import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Meta from "../components/Meta"
import PrimaryLayout from "../layouts/PrimaryLayout"

const Listen = () => {
  const images = useStaticQuery(graphql`
    query {
      neil: file(relativePath: { eq: "images/neil-rogers-show.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
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
        <meta
          property="og:description"
          content="Listen to the Neil Rogers Show Podcast"
        />
        <meta property="og:url" content="https://neilrogers.org/listen/" />
      </Helmet>

      <p>
        <b>The Neil Rogers Show</b> is available as a daily podcast. A show is
        released each morning. All the shows can also be downloaded directly
        from the resources on our <Link to="/audio/">Audio</Link> page.
      </p>
      <p>
        We also have a second podcast titled <b>South Florida Radio Archives</b>
        . It will highlight shows from other talk icons such as Rick & Suds, Bob
        Lassiter, Stan Major, and others. We will also publish requests for Neil
        Rogers. If you have a request, send an email to{" "}
        <b>audio@neilrogers.org</b> or connect with{" "}
        <a href="https://twitter.com/NeilRogersRadio/">@NeilRogersRadio</a> on
        Twitter.{" "}
      </p>

      <h3>Listen to the Neil Rogers Podcast on:</h3>
      <div className="links">
        <p>
          <a href="https://music.amazon.com/podcasts/299b0ce8-1edf-4a9e-bb16-6c1fa63bfc90/Neil-Rogers-Show?">
            Amazon Music
          </a>
        </p>
        <p>
          <a href="https://anchor.fm/neil-rogers-show">AnchorFM</a>
        </p>
        <p>
          <a href="https://castbox.fm/channel/Neil-Rogers-Show-id539213">
            Castbox
          </a>
        </p>
        <p>
          <a href="https://podcasts.google.com/feed/aHR0cDovL2ZlZWRzLmZlZWRidXJuZXIuY29tL05laWxSb2dlcnNTaG93">
            Google Podcasts
          </a>
        </p>
        <p>
          <a href="https://itunes.apple.com/us/podcast/neil-rogers-show/id1231601174">
            iTunes
          </a>
        </p>
        <p>
          <a href="https://open.spotify.com/show/2eQORHonddaXiNLPrVDbH3">
            Spotify
          </a>
        </p>
        <p>
          <a href="https://www.stitcher.com/show/neil-rogers-show">Stitcher</a>
        </p>
        <p>
          <a href="http://feeds.feedburner.com/NeilRogersShow">Podcast RSS</a>
        </p>
      </div>

      <h3>Neil Rogers Podcast Schedule</h3>
      <ul className="schedule">
        <li>MONDAY 1986-1989</li>
        <li>TUESDAY 1990-1997</li>
        <li>WEDNESDAY 1998-2001</li>
        <li>THURSDAY 2002-2003</li>
        <li>FRIDAY 2004-2005</li>
        <li>SATURDAY 2006-2007</li>
        <li>SUNDAY 2008-2009</li>
      </ul>

      <figure className="wider">
        <GatsbyImage
          image={images.neil.childImageSharp.gatsbyImageData}
          alt={"Neil Rogers Podcast"}
        />
        <figcaption>Neil Rogers Show</figcaption>
      </figure>

      <h3>Listen to the South Florida Radio Archives on:</h3>
      <div className="links">
        <p>
          <a href="https://music.amazon.com/podcasts/cc82e207-a422-472b-971e-40abe1224904/south-florida-radio-archives">
            Amazon Music
          </a>
        </p>
        <p>
          <a href="https://anchor.fm/south-florida-radio">AnchorFM</a>
        </p>
        <p>
          <a href="https://castbox.fm/channel/id4721880">Castbox</a>
        </p>
        <p>
          <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy83YTZlM2JiOC9wb2RjYXN0L3Jzcw">
            Google Podcasts
          </a>
        </p>
        <p>
          <a href="https://podcasts.apple.com/us/podcast/south-florida-radio-archives/id1601867840">
            iTunes
          </a>
        </p>
        <p>
          <a href="https://open.spotify.com/show/5CUR9xglGPKhkVSoBfaYxA">
            Spotify
          </a>
        </p>
        <p>
          <a href="https://www.stitcher.com/podcast/neil-rogers-show/south-florida-radio-archives">
            Stitcher
          </a>
        </p>
        <p>
          <a href="https://anchor.fm/s/7a6e3bb8/podcast/rss">Podcast RSS</a>
        </p>
      </div>

      <h3>South Florida Radio Archives Schedule</h3>
      <p>
        There is no set schedule for the <b>South Florida Radio Archives</b>. It
        is free form. We take requests at <b>audio@neilrogers.org</b> and{" "}
        <a href="https://twitter.com/NeilRogersRadio/">@NeilRogersRadio</a> on
        Twitter. Check out our <Link to="/docs/">Docs</Link> page for a list of
        shows that we have recovered.
      </p>
      <h3>Support and Sponsorship</h3>
      <p>
        If your podcast provider does not have the <b>Neil Rogers Show</b> or{" "}
        <b>South Florida Radio Archives</b>, email <b>audio@neilrogers.org</b>{" "}
        and we'll work to add it. These podcasts are a hobby not a business. We
        are not accepting sponsors.
      </p>
    </PrimaryLayout>
  )
}

export default Listen
