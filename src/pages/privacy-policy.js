import React from "react"
import { Helmet } from "react-helmet"
import Meta from "../pages/meta"
import PrimaryLayout from "../layouts/PrimaryLayout"

export default () => {
  return (
    <PrimaryLayout title="Privacy Policy">
      <Meta/>
      <Helmet>
        <title>Neil Rogers - Privacy Policy</title>
        <meta
          name="description"
          content="The privacy policy for neilrogers.org."
        />
        <link rel="canonical" href="https://neilrogers.org/privacy-policy/" />
      </Helmet>
      <p>
        The 2020 rewrite of NeilRogers.org does not use any cookies or tracking.
      </p>
    </PrimaryLayout>
  )
}
