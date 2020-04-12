import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayout"

export default () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { pagename: { eq: "timeline" } }) {
        html
        frontmatter {
          title
          pagename
        }
      }
    }
  `)
  return (
    <PrimaryLayout column="col-m-6" className="w-25">
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
    </PrimaryLayout>
  )
}
