import React from "react"
import { Helmet } from "react-helmet"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import Meta from "../components/Meta"
import PrimaryLayout from "../layouts/PrimaryLayout"

const Four04 = () => {
  const images = useStaticQuery(graphql`
    query {
      sigh: file(relativePath: { eq: "images/neil-sigh.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
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

      <p>
        The page you are looking for does not exist. Return to the{" "}
        <Link to="/">Home Page</Link>.
      </p>

      <figure className="wider">
        <GatsbyImage
          image={images.sigh.childImageSharp.gatsbyImageData}
          alt={"Neil Rogers"}
          loading="eager"
        />
        <figcaption>Neil Rogers</figcaption>
      </figure>
    </PrimaryLayout>
  )
}

export default Four04
