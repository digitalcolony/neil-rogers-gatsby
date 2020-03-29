import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
//import { Container, Row, Col } from "react-bootstrap"

const PrimaryLayout = props => (
  <div className="mb-2 bg-secondary">
    <Header />
    <div className="container">
      <div class="card border-0 shadow my-5">
        <div class="card-body p-5">
        {props.children}
        </div>
      </div>
    </div>
    <Footer />
  </div>
)

export default PrimaryLayout
