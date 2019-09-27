import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Heading from "../components/heading"
import Block from "../components/block"
import Tagline from "../components/tagline"
import Feature from "../components/feature"

const Header = styled.h4`
  margin: 20rem 0 -10rem;
  font-size: 5rem;
  font-family: "Playfair Display", serif;
  text-align: center;
`

const Features = styled.section`
  margin: 25rem 0;
  padding: 10rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 10rem;
  background-color: #191919;
  grid-column-gap: 5rem;
`

const Commercial = () => (
  <Layout title="KnoGeo - Residential">
    <Heading
      image="images/hero7.jpg"
      title="Visualization and analysis of property data: specifically made for big cities "
      primary="Analyze, explore, and present your data in 3D"
      cta="Contact us"
      center
    />
    <Header>About Us</Header>
    <Block image="images/block1.jpg">
      3DCRE dynamically connects your market, property, and unit information
      into a cloud-based 3D platform that unlocks the value of your data.
    </Block>
    <Block image="images/block2.jpg" mirror>
      KnoGeo is built for CRE offices, property managers, and urban planners in
      the most competitive real estate markets, where traditional data
      visualization and analysis techniques break down due to the density of
      properties and professionals need an innovative way to stay on top.
    </Block>
    <Block image="images/block3.jpg">
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
      ></Feature>
      <Feature
        heading="Virtual Site Selections"
        body="Lead realistic online site selection and exploration sessions"
      ></Feature>
      <Feature
        heading="2 Extra Layers of Data"
        body="3D enables both floor and unit level data analysis"
      ></Feature>
      <Feature
        heading="Improve Client Communication"
        body="Showing data visually dramatically increases understanding and impact"
      ></Feature>
      <Feature
        heading="Clear Marketing & Reporting"
        body="Improve internal and external presentations with instant visuals of the market"
      ></Feature>
      <Feature
        heading="Unique Insights"
        body="See trends only available when data is organized as it exists in the real world"
      ></Feature>
    </Features>
  </Layout>
)

export default Commercial
