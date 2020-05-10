import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const PrimaryLayout = props => (
  <div>
    <Header showFilter={props.soundboard} title={props.title} />
    <main>
      <section>
        <div>{props.children}</div>
      </section>
    </main>
    <Footer/>
  </div>
)

export default PrimaryLayout
