import React from "react"
import { Link } from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayout"
import neil_image from "../images/neil-mask-radio.jpg"

export default () => {
  return (
    <PrimaryLayout column="col-m-6" className="w-25">
      <h1>The Neil Rogers Show</h1>
      <p>
        NeilRogers.org is the work of a collection of fans dedicated to
        preserving the memory of radio’s Neil Rogers. Our primary goal is
        locating and sharing audio files. In addition to Neil Rogers, the
        archive includes audio from other Florida radio icons such as Bob
        Lassiter, Stan Major, Rick & Suds, Ron Bennington, Bill Calder, Mike
        Spindell, Glen Hill and others.
      </p>

      <p>
        If you have audio from Neil Rogers you would like to share, we would
        love to add it to our archives. In addition to Neil, we also are
        archiving other Florida talk shows. Our email is audio@neilrogers.org.
        Thank you.
      </p>
      <img src={neil_image} alt="Neil Rogers Mask" />
      <p>
        To learn more about radio legend Neil Rogers see his page on <a href="https://en.wikipedia.org/wiki/Neil_Rogers">Wikipedia</a>
        or read our <Link to="/timeline">Timeline</Link>.
      </p>
      <h2>Connect and Share</h2>
      <ul>
        <li>Podcast RSS</li>
        <li>YouTube</li>
        <li>Twitter</li>
        <li>Flickr</li>
      </ul>

      <p>Subscribe to Neil Rogers by Email</p>

      <h2>The Neil Rogers Show Podcast</h2>

      <p>The Neil Rogers Show is available as a daily podcast.</p>
      <ul>
        <li>MONDAY: 1986-1989</li>
        <li>TUESDAY: 1990-1997</li>
        <li>WEDNESDAY: 1998-2001</li>
        <li>THURSDAY: 2002-2003</li>
        <li>FRIDAY: 2004-2005</li>
        <li>SATURDAY: 2006-2007</li>
        <li>SUNDAY: 2008-2009</li>
      </ul>

      <p>Check it out on iTune or directly from the podcast RSS. </p>

      <h2>Friends of Neil</h2>

      <ul>
        <li>Jorge Rodriguez</li>
        <li>Norm Kent</li>
        <li>Brit Somers</li>
        <li>Stan Major (RIP)</li>
      </ul>

      <h2>Disclaimer</h2>
      <h3>Copyright Disclaimer Under Section 107 of the Copyright Act 1976</h3>
      <p>
        This site does not claim to hold copyrights for the audio being shared.
        It is being shared as “fair use” under the Copyright Act of 1976.
      </p>
      <p>
        Copyright Disclaimer Under Section 107 of the Copyright Act 1976,
        allowance is made for “fair use” for purposes such as criticism,
        comment, news reporting, teaching, scholarship, and research. Fair use
        is a use permitted by copyright statute that might otherwise be
        infringing. Non-profit, educational or personal use tips the balance in
        favor of fair use.
      </p>
      <p>
        If an advertisement appears on one of our YouTube videos, it is because
        YouTube has detected a copyright claim by a music piece played during
        the show. The owner of that copyrighted piece of music is the receiver
        of that advertising compensation, not this site.
      </p>
    </PrimaryLayout>
  )
}
