import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import PersonCard from "../components/personCard"

const Container = styled(BackgroundImage)`
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 3rem;
  @media only screen and (max-width: 56.25em) {
    padding: 10rem 3rem;
    height: auto;
  }
  @media only screen and (max-width: 41em) {
    padding: 10rem 1rem;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  background: #000;
  opacity: 0.4;
`

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 3rem;
  grid-template-rows: max-content;
  height: 100%;
  align-content: center;
  @media only screen and (max-width: 56.25em) {
    grid-template-columns: 1fr;
    grid-row-gap: 5rem;
  }
`

const Team = ({ data: { hero, chingiz, jesse, jordan } }) => (
  <Layout title="KnoGeo - Team">
    <Container fluid={hero.childImageSharp.fluid}>
      <Overlay />
      <Cards>
        <PersonCard
          name="Jesse Brown"
          title="CEO"
          email="jesse@knogeo.com"
          image={jesse}
        >
          An honour’s finance graduate, Jesse’s grew up in a 4th generation real
          estate family and his work experience includes founding and growing
          two startups in the mobile and fintec spaces, as well as time spent in
          corporate finance for one of Western Canada’s largest private real
          estate companies and a global medical device distributor.
        </PersonCard>
        <PersonCard
          name="Chingiz Bakhishov"
          title="Software Developer"
          image={chingiz}
        >
          Chingiz is an engineering graduate who combines geomatics and software
          expertise to power the core Hylyte platform. He previously co-founded
          a specialty delivery & logistics services company for connecting users
          with real-time local goods
        </PersonCard>
        <PersonCard
          name="Jordan Selanders"
          title="Software Developer"
          image={jordan}
        >
          Jordan has been programming since he was 10 years old, and brings a
          background across game development, 3D animation, and web
          applications. He has been a beta tester for Google Maps and has worked
          on many projects related to GIS and cityscapes
        </PersonCard>
      </Cards>
    </Container>
  </Layout>
)

export default Team

export const pageQuery = graphql`
  query teamQuery {
    hero: file(relativePath: { eq: "hero3.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    chingiz: file(relativePath: { eq: "headshots/chingiz.jpg" }) {
      childImageSharp {
        fixed(height: 200, width: 200, quality: 90) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    jesse: file(relativePath: { eq: "headshots/jesse.jpg" }) {
      childImageSharp {
        fixed(height: 200, width: 200, quality: 90) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    jordan: file(relativePath: { eq: "headshots/jordan.jpg" }) {
      childImageSharp {
        fixed(height: 200, width: 200, quality: 90) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
  }
`
