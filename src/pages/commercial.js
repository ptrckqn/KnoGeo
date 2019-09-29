import React from "react"
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
import ComingSoon from "../components/comingSoon"
import Footer from "../components/footer"

const Header = styled.h4`
  margin: 20rem 0 -10rem;
  font-size: 5rem;
  font-family: "Playfair Display", serif;
  text-align: center;
`

const Features = styled.section`
  margin: 25rem 0;
  padding: 0 10rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 10rem;
  background-color: #191919;
  grid-column-gap: 5rem;
`

const Cards = styled.section`
  margin: 20rem 0;
  padding: 10rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 10rem;
  grid-column-gap: 5rem;
`

const Commercial = () => (
  <Layout title="KnoGeo - Commercial">
    <Heading
      image="/images/hero7.jpg"
      title="Visualization and analysis of property data: specifically made for big cities "
      primary="Analyze, explore, and present your data in 3D"
      cta="Contact us"
      center
    />
    <Header>About Us</Header>
    <Block image="/images/block1.jpg">
      3DCRE dynamically connects your market, property, and unit information
      into a cloud-based 3D platform that unlocks the value of your data.
    </Block>
    <Block image="/images/block2.jpg" mirror>
      KnoGeo is built for CRE offices, property managers, and urban planners in
      the most competitive real estate markets, where traditional data
      visualization and analysis techniques break down due to the density of
      properties and professionals need an innovative way to stay on top.
    </Block>
    <Block image="/images/block3.jpg">
      By combining location intelligence and property data in our patented
      platform, we offer simple integration with any dataset to take information
      stuck in spreadsheets and organize it as it exists in the real world,
      driving value for our customers through better analysis, presentation, and
      understanding.
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
        Web-based application accessible anywhere with no install and automatic
        updates
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
    <ComingSoon />
    <Footer />
  </Layout>
)

export default Commercial
