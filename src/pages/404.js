import React from "react"
import { Helmet } from "react-helmet"
import Meta from "../pages/meta"
import PrimaryLayout from "../layouts/PrimaryLayout"

export default () => {
  return (
    <PrimaryLayout title="404 Page Not Found">
      <Meta />
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <p>The page you are looking for does not exist.</p>
    </PrimaryLayout>
  )
}
