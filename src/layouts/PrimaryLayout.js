import React from "react"
import Header from "../components/Header"

const PrimaryLayout = props => (
  <div className="mb-2 bg-secondary">
    <Header showFilter={props.soundboard} />
    <div className="container">
      <div class="card border-0 shadow">
        <div class="p-5">{props.children}</div>
      </div>
    </div>
  </div>
)

export default PrimaryLayout
