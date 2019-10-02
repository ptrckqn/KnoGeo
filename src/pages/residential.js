import React, { useState } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Heading from "../components/heading"
import Device from "../components/device"
import TwoDimensional from "../components/twoDimensional"
import Flyover from "../components/flyover"
import Feature from "../components/feature"
import Search from "../components/svg/search"
import Devices from "../components/svg/devices"
import Checkmark from "../components/svg/checkmark"
import Description from "../components/description"
import Footer from "../components/footer"
import Modal from "../components/modal"

const Header = styled.h4`
  margin: 5rem 0;
  font-size: 5rem;
  font-family: "Playfair Display", serif;
  text-align: center;
  @media only screen and (max-width: 56.25em) {
    font-size: 4.5rem;
  }
  @media only screen and (max-width: 41em) {
    font-size: 4rem;
  }
`

const Features = styled.section`
  margin: 10rem 0;
  padding: 0 10rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #191919;
  grid-column-gap: 5rem;
  @media only screen and (max-width: 56.25em) {
    grid-template-columns: 1fr;
    padding: 0 15rem;
  }
  @media only screen and (max-width: 41em) {
    padding: 0 3rem;
  }
`

const ResidentialPage = () => {
  const [open, setOpen] = useState(false)
  return (
    <Layout title="KnoGeo - Residential">
      <Heading
        image="/images/hero6.jpg"
        title="Location Marketing"
        primary="“Interactive, Photorealistic, 3D Showcases of Listings”"
        cta="Get Your Listing’s Showcase for just $25"
        secondary="Every Listing in Manhattan is now live,
        check one out"
        center
        setOpen={setOpen}
      />
      <Device />
      <TwoDimensional />
      <Header>Features</Header>
      <Features>
        <Feature
          heading="Dynamic"
          body="We already have all of Manhattan modelled in 3D, so getting a Showcase is as easy as typing in the address"
        >
          <Search />
        </Feature>
        <Feature
          heading="Cross-Platform Functionality"
          body="Our 3D Showcases are designed to work on any phone or desktop (VR goggles too!) so you can include them in all marketing pieces"
        >
          <Devices />
        </Feature>
        <Feature
          heading="Personalized Marketing"
          body="No one knows a listing better than you, and we give you the ability to highlight and notate everything great about a property"
        >
          <Checkmark />
        </Feature>
      </Features>
      <Header>Coming Soon: Flights</Header>
      <Flyover />
      <Description setOpen={setOpen} />
      <Footer />
      <Modal
        title="Get your showcase"
        textPlaceholder="How can we help? (if there is a specific listing you would like a Showcase for, you can tell us the address or ID here)"
        setOpen={setOpen}
        open={open}
      />
    </Layout>
  )
}

export default ResidentialPage
