import React from "react"
import Header from "../components/Header"

const PrimaryLayout = props => (
  <div>
    <Header showFilter={props.soundboard} title={props.title} />
    <main>
      <section>
      <div>{props.children}</div>
      </section>
    </main>
  </div>
)

export default PrimaryLayout
