import React from "react"
import { Helmet } from "react-helmet"
import Meta from "../components/Meta"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import PrimaryLayout from "../layouts/PrimaryLayout"

const Timeline = () => {
  const images = useStaticQuery(graphql`
    query {
      nms: file(relativePath: { eq: "images/neil-restored-1959.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      wspb: file(relativePath: { eq: "images/wspb-1450.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      wkat: file(relativePath: { eq: "images/neil-wkat-restored.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      gay: file(relativePath: { eq: "images/neil-comes-out-restored.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      nutrition: file(
        relativePath: { eq: "images/neil-rogers-nutrition-restored.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      wnws: file(relativePath: { eq: "images/wnws-restored.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      neil_1985: file(
        relativePath: { eq: "images/neil-1985-winz-restored.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      night: file(relativePath: { eq: "images/neil-wami-restored.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      neil_rogers_show: file(
        relativePath: { eq: "images/neil-rogers-show.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      wiod: file(relativePath: { eq: "images/neil-wiod-restored.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      wqam: file(relativePath: { eq: "images/neil-rogers-wqam-560.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      wsun: file(relativePath: { eq: "images/douche-bag-restored.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      zeta: file(relativePath: { eq: "images/zeta4.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  return (
    <PrimaryLayout title="⌚Neil Rogers Timeline">
      <Meta />
      <Helmet>
        <title>Neil Rogers Timeline - The History of the Radio God</title>
        <meta
          name="description"
          content="A brief history of radio's Neil Rogers."
        />
        <link rel="canonical" href="https://neilrogers.org/timeline/" />
        <meta
          property="og:description"
          content="A brief history of radio's Neil Rogers."
        />
        <meta property="og:url" content="https://neilrogers.org/timeline/" />
      </Helmet>
      <p>This is a brief history of radio legend Neil Rogers.</p>
      <h3>Childhood</h3>
      <p>
        Neil Rogers (Nelson Roger Behelfer) was born at Strong Memorial Hospital
        in Rochester, New York on November 5, 1942.
      </p>

      <p>
        Neil’s first childhood home was on Ok Terrace in Rochester. He attended
        Brighton Elementary School. He later moved to 74 Fort Hill Ave in
        Canandaigua New York. Neil won a National Merit Scholarship at
        Canandaigua Academy in 1959.
      </p>

      <figure>
        <GatsbyImage
          image={images.nms.childImageSharp.gatsbyImageData}
          alt={"Neil Rogers - 1959 National Merit Scholarship"}
          loading="eager"
        />
        <figcaption>Neil Rogers - 1959 National Merit Scholarship</figcaption>
      </figure>

      <h3>Early Radio in Upstate New York (1959-1963)</h3>

      <p>
        Neil’s first radio job was while he was still in high school. At age 17
        he played music on WCGR in Canandaigua, NY. Then he attended college for
        two years at Michigan State where he studied broadcasting. After
        Michigan State, Neil returned to New York in 1963 where he worked for
        WBTA 1490 in Batavia, NY.
      </p>

      <p>During this time Neil did baseball, hockey, and racing broadcasts.</p>

      <p>
        <em>
          (Sources: Miami Herald Tropic 624-0191, April 28, 1985, Neil Rogers
          Show December 30, 1997 @64:20, March 1, 2005 @1:15:15) Michigan Radio
          (1964-1973)
        </em>
      </p>

      <p>While in Michigan, Neil worked at:</p>
      <ul>
        <li>Albion, MI (WALM)</li>
        <li>Marshall, MI (WMRR) (1966 est) – High school basketball</li>
        <li>Sturgis, MI (WSTR)</li>
        <li>
          Kalamazoo, MI (WTPS) – General Manager, Program Director, Morning DJ
        </li>
        <li>Detroit – Took a job selling advertising on radio.</li>
        <li>Lansing – (station unknown)</li>
      </ul>

      <p>
        The exact dates of stations are not known. The Tropic article does
        describe the sequence (listed above), which at times varies from Neil’s
        recollection many years later.
      </p>

      <p>
        While in Michigan, Rogers broadcast football and basketball games for
        Albion College.
      </p>

      <p>
        <em>
          (Sources: Miami Herald Tropic 624-0191, April 28, 1985, Neil Rogers
          Show March 16, 1999 @73:00, Neil Rogers Show November 5, 1999 @56:20,
          New Rogers Show November 17, 1999 @139:00, Neil Rogers Show (October
          4, 1995) @8:00, Neil Rogers Show September 15, 1998)
        </em>
      </p>

      <h3>Sarasota, FL (1973)</h3>

      <p>
        According to the Miami Herald, Neil began his talk radio career at WSPB
        1450 in Sarasota, FL.
      </p>

      <blockquote>
        <em>
          In 1973, Rogers moved to Sarasota, where quite by accident he did his
          first talk radio show. The station hired a retiree from Pittsburgh to
          do a talk show, but on his first day, the fellow couldn’t figure out
          to work the phone and his guest didn’t show up. The second day, the
          retiree’s blood pressure soared and his nose bled. Rogers, who was
          spinning records at the station, came to the rescue.
        </em>
      </blockquote>

      <figure>
        <GatsbyImage
          image={images.wspb.childImageSharp.gatsbyImageData}
          alt={"Neil Rogers at WSPB 1450"}
        />
        <figcaption>Neil Rogers at WSPB 1450</figcaption>
      </figure>
      <p>
        <em>(Source: Miami Herald Tropic 624-0191, April 28, 1985)</em>
      </p>

      <h3>West Palm Beach (1975)</h3>

      <p>Bill Calder hired Neil to work at WJNO 1290 (Palm Beach, FL)</p>

      <p>
        <em>(Source: Miami Herald Tropic 624-0191, April 28, 1985)</em>
      </p>

      <h3>Neil Begins Broadcasting in Miami (1976)</h3>

      <p>
        Neil’s official start date for Miami radio was on March 1, 1976, when he
        started with WKAT. Neil was on from 3 pm – 6 pm. Prior to WKAT, Neil
        worked a few weekends on WIOD playing records (May 30, 1990, @55:28).
      </p>

      <figure>
        <GatsbyImage
          image={images.wkat.childImageSharp.gatsbyImageData}
          alt={"Neil Rogers at WKAT"}
        />
        <figcaption>Neil Rogers at WKAT</figcaption>
      </figure>
      <p>On December 17, 1976 Neil came out as gay on the air.</p>

      <figure>
        <GatsbyImage
          image={images.gay.childImageSharp.gatsbyImageData}
          alt={"Neil Rogers Comes Out as Gay"}
        />
        <figcaption>Source: Lakeland Ledger December 19, 1976</figcaption>
      </figure>

      <h3>Neil Rogers Nutrition (1977)</h3>

      <p>
        Neil owned a health food store called Neil Rogers Nutrition in San
        Souci.
      </p>

      <figure>
        <GatsbyImage
          image={images.nutrition.childImageSharp.gatsbyImageData}
          alt={"Neil Rogers Nutrition"}
        />
        <figcaption>Neil Rogers Nutrition</figcaption>
      </figure>
      <p>
        <em>Source: Neil Rogers Show November 15, 2000 @2:02:00</em>
      </p>

      <h3>WNWS (1978)</h3>

      <p>Neil Rogers debuted on WNWS on April 1, 1978.</p>

      <p>
        <em>(Source: Miami News March 27, 1978)</em>
      </p>

      <h3>Miami Hurricanes Baseball (1978-1983)</h3>

      <p>
        Neil did play-by-play for Miami Hurricanes baseball (1978-1982 on radio
        and 1983 on TV).
      </p>

      <figure>
        <GatsbyImage
          image={images.wnws.childImageSharp.gatsbyImageData}
          alt={"Miami Hurricanes and Neil Rogers"}
        />
        <figcaption>Miami Hurricanes and Neil Rogers</figcaption>
      </figure>

      <p>
        <a href="https://youtu.be/4zajHaXIUz4">
          Neil Rogers U of Miami Baseball (May 31, 1982)
        </a>
      </p>

      <p>
        <em>
          (Sources: WNWS SWITCHES SIGNS ON UM (Miami Herald - May 22, 1982),
          Neil Rogers Show July 30, 1999)
        </em>
      </p>

      <h3>To Nashville and Back to Miami in One Month (1980)</h3>

      <p>
        On October 31, 1980, Neil left Miami and began broadcasting on WLAC 1510
        in Nashville. After just one month he had enough and returned to WNWS.
      </p>

      <p>
        <em>(Source: Miami News Dec. 1, 1980 radio highlights)</em>
      </p>

      <h3>WINZ (1984)</h3>

      <p>
        On March 1, 1984, Neil debuts on WINZ broadcasting from 8 PM to
        Midnight. On September 29, 1986, Neil moves his show to 10 AM – 2 PM.
      </p>

      <figure>
        <GatsbyImage
          image={images.neil_1985.childImageSharp.gatsbyImageData}
          alt={"94 News - Neil Rogers"}
        />
        <figcaption>94 News - Neil Rogers</figcaption>
      </figure>

      <h3>Zeta 4 (1987)</h3>

      <p>
        On October 12, 1987, Neil moves to FM Radio when he debuts mornings on
        Zeta 4.
      </p>

      <figure>
        <GatsbyImage
          image={images.zeta.childImageSharp.gatsbyImageData}
          alt={"Neil Rogers at Zeta 4"}
        />

        <figcaption>Neil Rogers at Zeta 4</figcaption>
      </figure>

      <p>On November 1, 1988, Neil did his last show on Zeta 4.</p>
      <h3>WIOD (1988 – 1997)</h3>

      <p>On November 7, 1988 he debuted middays for WIOD. </p>

      <p>
        In early December 1989, Glen Hill "The Bird" was fired from the Neil
        Rogers Show.
      </p>

      <p>
        Neil Rogers suffered a stroke on April 2, 1990 and was back on the air 3
        weeks later.
      </p>

      <figure>
        <GatsbyImage
          image={images.wiod.childImageSharp.gatsbyImageData}
          alt={"Neil Rogers at WIOD"}
        />
        <figcaption>Neil Rogers at WIOD</figcaption>
      </figure>
      <p>
        On June 22, 1992 the WSUN Tampa Bay simulcast begins. On April 29, 1994,
        the WSUN simulcast of the Neil Rogers Show ended. (date not confirmed)
      </p>

      <figure>
        <GatsbyImage
          image={images.wsun.childImageSharp.gatsbyImageData}
          alt={"WSUN Douchebag - Neil Rogers"}
        />
        <figcaption>WSUN Douchebag - Neil Rogers</figcaption>
      </figure>

      <p>
        On December 20, 1996, the Internet stream of the Neil Rogers Show
        begins. (date not confirmed)
      </p>

      <p>
        The last WIOD show was on May 21, 1997.{" "}
        <em>
          (Source:{" "}
          <a href="https://www.sun-sentinel.com/news/fl-xpm-1997-05-22-9705210816-story.html">
            Rogers' Contract Bought Out May 22, 1997, Sun-Sentinel)
          </a>
        </em>
      </p>

      <h3>WQAM (1997-2009)</h3>

      <p>
        After a 7 month radio hiatus, Neil Rogers joins WQAM. His debut show was
        on December 30, 1997.
      </p>

      <figure>
        <GatsbyImage
          image={images.wqam.childImageSharp.gatsbyImageData}
          alt={"Neil Rogers at WQAM"}
        />
        <figcaption>Neil Rogers at WQAM</figcaption>
      </figure>

      <p>
        Neil’s TV show “Neil at Night” began broadcasting on Monday June 8th,
        1998. The show Neil at Night ran on WAMI Channel 69 from 8:30-9:00 PM
        and again from 10:30-11:00 PM. The final show was on November 4, 1998.{" "}
        <em>
          (Source:{" "}
          <a href="https://youtu.be/-Dy78DytGXU">Neil Rogers WAMI video</a>)
        </em>
      </p>

      <figure>
        <GatsbyImage
          image={images.night.childImageSharp.gatsbyImageData}
          alt={"Neil at Night TV"}
        />
        <figcaption>Neil at Night TV</figcaption>
      </figure>

      <p>
        Starting in 2002, Neil began broadcasting most of the year from his
        Toronto apartment.{" "}
        <em>
          (Source:{" "}
          <a href="https://www.sun-sentinel.com/news/fl-xpm-2002-03-23-0203220576-story.html">
            AT WQAM, WHO'S ON FIRST, WHAT'S ON SECOND?
          </a>
          )
        </em>
      </p>

      <p>
        Neil’s last public appearance was on May 17, 2008 at Gulfstream Park and
        Casino in Hallandale.{" "}
        <em>
          (Source:{" "}
          <a href="https://web.archive.org/web/20080513061836/http://www.neilrogers.com/">
            archived copy of NeilRogers.com site
          </a>
          )
        </em>
      </p>

      <p>
        On May 13, 2009, Jorge Rodriguez was fired by WQAM.{" "}
        <em>(Source: Neil Rogers Show May 14, 2009)</em>
      </p>

      <p>June 12th 2009 was the last Neil Rogers Show.</p>

      <h3>Retirement / Death (2010)</h3>

      <p>
        On December 24, 2010, Neil Rogers died at the Vitas Hospice at Florida
        Medical Center.
      </p>

      <p>
        Memorial Service Produced by Sun-Sentinel / WSFL-TV:{" "}
        <a href="https://youtu.be/tIVmUJHoEs0">
          Neil Rogers Celebration of Life! 1942-2010
        </a>
      </p>

      <figure>
        <GatsbyImage
          image={images.neil_rogers_show.childImageSharp.gatsbyImageData}
          alt={"Neil Rogers Show with Jorge Rodriguez"}
        />
        <figcaption>Neil Rogers Show with Jorge Rodriguez</figcaption>
      </figure>

      <p>
        <em>
          Artwork by{" "}
          <a href="https://www.facebook.com/galaxykidcomics">Luis Amado</a>
        </em>
      </p>

      <p>
        In 2016, Neil Rogers was inducted to the National Radio Hall of Fame.
      </p>
      <p>
        <a href="https://criticalmas.medium.com/tribute-to-jorge-rodriguez-deec8bcc37d8">
          Jorge Rodriguez
        </a>{" "}
        passed away on July 3, 2020.{" "}
        <em>
          Source:{" "}
          <a href="https://www.deerfield-news.com/2020/07/04/south-florida-radio-host-and-neil-rogers-producer-protege-jorge-rodriguez-dies/">
            Deerfield News
          </a>
        </em>
      </p>
      <p>
        The HBO Documentary{" "}
        <a href="https://www.hbo.com/documentaries/537-votes">537 Votes</a>{" "}
        released in October 2020 featured numerous audio clips from the Neil
        Rogers Show.
      </p>
      <p>
        In May 2022, the new owner of 1470 WWNN Pompano Beach FL began
        broadcasting archived Neil Rogers Show clips as "The Best of Neal
        Rogers" (misspelled) for an hour on weekdays.{" "}
        <em>
          Source:{" "}
          <a href="https://archive.ph/RWrsZ">WWNN Archived schedule page</a>
        </em>
        . Six weeks later, the station was sold again and the Neil Rogers Show
        was taken off the air.{" "}
        <em>
          Source:{" "}
          <a href="https://radioinsight.com/headlines/226795/vic-canales-media-group-acquires-wwnn/">
            Radio Insight
          </a>
        </em>
      </p>
      <p>
        <em>
          Photos used in this timeline plus hundreds more can be viewed and
          downloaded on the{" "}
          <a href="https://www.flickr.com/photos/neilrogersradio">
            Neil Rogers Flickr
          </a>{" "}
          account.
        </em>
      </p>
    </PrimaryLayout>
  )
}

export default Timeline
