import React from "react"

const Footer = (props) => (
  <footer>
    <p>
      <i>
        2012-{new Date().getFullYear()} NeilRogers.org is a project maintained
        by <a href="https://michaelallensmith.com/">Michael Allen Smith</a> with
        the support of Neil's heir, attorney, and fans.
      </i>
    </p>
    <p>
      <i>
        The code for this site is freely available on{" "}
        <a href="https://github.com/digitalcolony/neil-rogers-gatsby">
          GitHub.
        </a>{" "}
        Use however you like.{" "}
        <a href="https://creativecommons.org/licenses/by/4.0/">
          Creative Commons 4.0.
        </a>
      </i>
    </p>
    <p>
      <i>
        This site does not track users or display ads. No pop-up windows either.
        It is a hobby site{" "}
        <a href="https://criticalmas.org/2021/07/made-in-the-spirit-of-the-early-web/">
          made in the spirit of the early web
        </a>
        .
      </i>
    </p>
  </footer>
)

export default Footer
