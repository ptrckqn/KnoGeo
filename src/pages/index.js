import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Layout from "../components/layout"
import Landing from "../components/landing"

const Container = styled(BackgroundImage)`
  position: relative;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media only screen and (max-width: 56.25em) {
    background-position: center;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: #000;
  opacity: 0.4;
`

const Skyline = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  width: 30rem;
  @media only screen and (max-width: 41em) {
    width: 15rem;
  }
`

const IndexPage = ({
  data: {
    file: {
      childImageSharp: { fluid },
    },
  },
}) => {
  return (
    <Layout title="KnoGeo">
      <Container fluid={fluid}>
        <Overlay />
        <Landing />
      </Container>
      <Skyline src="/images/skyline.png" />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query landingQuery {
    file(relativePath: { eq: "hero4.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
