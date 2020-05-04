import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout"
import miami_herald from "../images/miami-herald-neil.jpg"

export default () => {
  return (
    <PrimaryLayout title="Blog">
      <p>
        Below is a collection of articles related to the audio recovery project.
      </p>

      <h3>Tributes</h3>
      <p>
        <a href="https://medium.com/@CriticalMAS/tribute-to-eric-harold-neil-rogers-780f7277d5f1">
          Tribute to Eric Harold
        </a>
      </p>
      <p>
        <a href="https://medium.com/@CriticalMAS/tribute-to-john-baker-neil-rogers-2c9127024b51">
          Tribute to John Baker
        </a>
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
      <p>
        <img
          src={miami_herald}
          alt="Miami Herald article on Neil Rogers Archives"
        />
      </p>
    </PrimaryLayout>
  )
}
