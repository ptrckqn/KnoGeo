import React from "react"

import Layout from "../components/layout"
import Heading from "../components/heading"
import Device from "../components/device"
import TwoDimensional from "../components/twoDimensional"
import Flyover from "../components/flyover"

const ResidentialPage = () => {
  return (
    <Layout title="KnoGeo - Residential">
      <Heading
        image="images/hero6.jpg"
        title="Location Marketing"
        primary="“Interactive, Photorealistic, 3D Showcases of Listings”"
        cta="Get Your Listing’s Showcase for just $25"
        secondary="Every Listing in Manhattan is now live,
        check one out"
      />
      <Device />
      <TwoDimensional />
      <Flyover />
    </Layout>
  )
}

export default ResidentialPage
