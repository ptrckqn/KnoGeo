import React, { useState } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Heading from "../components/heading"
import Block from "../components/block"
import Tagline from "../components/tagline"
import Feature from "../components/feature"
import Radar from "../components/svg/radar"
import Map from "../components/svg/map"
import Layers from "../components/svg/layers"
import Chat from "../components/svg/chat"
import Graph from "../components/svg/graph"
import Building from "../components/svg/building"
import Card from "../components/card"
import Boxed from "../components/boxed"
import ComingSoon from "../components/comingSoon"
import Footer from "../components/footer"
import Modal from "../components/modal"

const Header = styled.h4`
  margin: 20rem 0 0;
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
`

const Cards = styled.section`
  margin: 10rem 0;
  padding: 10rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 5rem;
  grid-column-gap: 5rem;
`

const Break = styled.span`
  display: block;
  height: 3rem;
`

const Commercial = () => {
  const [open, setOpen] = useState(false)
  return (
    <Layout title="KnoGeo - Commercial">
      <Heading
        image="/images/hero7.jpg"
        title="Visualization and Analysis of Property Data: Specifically Made for Big Cities"
        primary="Analyze, explore, and present your data in 3D"
        cta="Contact us"
        center
        setOpen={setOpen}
      />
      <Header>About 3DCRE</Header>
      <Block image="/images/block1.jpg">
        3DCRE dynamically connects market, property, and unit information into a
        cloud-based 3D platform that unlocks the value of your data.
        <Break />
        Our plateform is built for CRE offices, property managers, and urban
        planners in the most competitive real estate markets, where traditional
        data visualization and analysis techniques break down due to the density
        of properties and professionals need an innovative way to stay on top.
        <Break />
        By combining location intelligence and property data in our patented
        platform, we offer simple integration with any dataset to take
        information stuck in spreadsheets and organize it as it exists in the
        real world, driving value for our customers through better analysis,
        presentation, and understanding.
      </Block>
      <Tagline>
        Making Data <span>Make Sense.</span>
      </Tagline>
      <Header>About 3DCRE</Header>
      <Block image="/images/block2.jpg" mirror>
        3DCRE dynamically connects market, property, and unit information into a
        cloud-based 3D platform that unlocks the value of your data.
        <Break />
        Our plateform is built for CRE offices, property managers, and urban
        planners in the most competitive real estate markets, where traditional
        data visualization and analysis techniques break down due to the density
        of properties and professionals need an innovative way to stay on top.
        <Break />
        By combining location intelligence and property data in our patented
        platform, we offer simple integration with any dataset to take
        information stuck in spreadsheets and organize it as it exists in the
        real world, driving value for our customers through better analysis,
        presentation, and understanding.
      </Block>
      <Tagline>
        Making Data <span>Make Sense.</span>
      </Tagline>
      <Header>About 3DCRE</Header>
      <Block image="/images/block3.jpg">
        3DCRE dynamically connects market, property, and unit information into a
        cloud-based 3D platform that unlocks the value of your data.
        <Break />
        Our plateform is built for CRE offices, property managers, and urban
        planners in the most competitive real estate markets, where traditional
        data visualization and analysis techniques break down due to the density
        of properties and professionals need an innovative way to stay on top.
        <Break />
        By combining location intelligence and property data in our patented
        platform, we offer simple integration with any dataset to take
        information stuck in spreadsheets and organize it as it exists in the
        real world, driving value for our customers through better analysis,
        presentation, and understanding.
      </Block>
      <Tagline>
        Making Data <span>Make Sense.</span>
      </Tagline>
      <Header>Benefits of Using 3DCRE</Header>
      <Features>
        <Feature
          heading="Better Analysis"
          body="20x data coverage vs. traditional 2D spatial mapping "
        >
          <Radar />
        </Feature>
        <Feature
          heading="Virtual Site Selections"
          body="Lead realistic online site selection and exploration sessions"
        >
          <Map />
        </Feature>
        <Feature
          heading="2 Extra Layers of Data"
          body="3D enables both floor and unit level data analysis"
        >
          <Layers />
        </Feature>
        <Feature
          heading="Improve Client Communication"
          body="Showing data visually dramatically increases understanding and impact"
        >
          <Chat />
        </Feature>
        <Feature
          heading="Clear Marketing & Reporting"
          body="Improve internal and external presentations with instant visuals of the market"
        >
          <Building />
        </Feature>
        <Feature
          heading="Unique Insights"
          body="See trends only available when data is organized as it exists in the real world"
        >
          <Graph />
        </Feature>
      </Features>
      <Header>Features</Header>
      <Cards>
        <Card heading="Search & Filtering">
          Create any filter set to find the data you need, fast
        </Card>
        <Card heading="Compelling Visuals">
          Capture powerful imagery for presentation and marketing
        </Card>
        <Card heading="SAAS Application">
          Web-based application accessible anywhere with no install and
          automatic updates
        </Card>
        <Card heading="Open Integration">
          The 3DCRE Platform can integrate with virtually any property dataset
        </Card>
        <Card heading="Built-in Reporting">
          One-click reporting, saved filter sets, and instant external links
        </Card>
        <Card heading="Scalability">
          No matter how big or small your database, we scale with you
        </Card>
      </Cards>
      <Header>Pricing</Header>
      <Boxed setOpen={setOpen}>
        Our prices are mostly driven by the size of market you operate in and
        the amount of data you wish to integrate with so we can provide value to
        any customer. Contact us today for a quote
      </Boxed>
      <ComingSoon setOpen={setOpen} />
      <Footer />
      <Modal
        title="Contact us today for a demo"
        textPlaceholder="Any other questions or details for us?"
        full
        setOpen={setOpen}
        open={open}
      />
    </Layout>
  )
}

export default Commercial
