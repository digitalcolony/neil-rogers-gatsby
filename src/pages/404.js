import React from "react"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import Meta from "../pages/meta"
import PrimaryLayout from "../layouts/PrimaryLayout"

export default () => {
  const images = useStaticQuery(graphql`
    query {
      sigh: file(relativePath: { eq: "images/neil-sigh.jpg" }) {
        childImageSharp {
          fluid {
            presentationWidth
            presentationHeight
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <PrimaryLayout title="404 Page Not Found">
      <Meta />
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <p>The page you are looking for does not exist. Return to the <Link to="/">Home Page</Link>.</p>

      <figure
        style={{
          "max-width": "670px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Img fluid={images.sigh.childImageSharp.fluid} alt={"Neil Rogers"} />
        <figcaption>Neil Rogers</figcaption>
      </figure>
    </PrimaryLayout>
  )
}
