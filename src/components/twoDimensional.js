import React from "react"
import styled from "styled-components"

const Container = styled.section`
  margin: 10rem 0 5rem;
  background: url(/images/2dmap.png) center center/cover no-repeat;
  height: 75rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 5%;
  @media only screen and (max-width: 30em) {
    justify-content: center;
    padding-right: 0%;
  }
`

const Details = styled.div`
  width: 40%;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 5rem 3rem;
  border-radius: 10px;
  @media only screen and (max-width: 56.25em) {
    width: 60%;
  }
  @media only screen and (max-width: 41em) {
    width: 80%;
  }
  @media only screen and (max-width: 30em) {
    width: 90%;
  }
`

const Header = styled.h4`
  font-size: 2.5rem;
  @media only screen and (max-width: 41em) {
    font-size: 2rem;
  }
`

const Paragraph = styled.p`
  font-size: 2rem;
  padding: 1.5rem 0;
  color: #8f8f8f;
  @media only screen and (max-width: 56.25em) {
    font-size: 1.8rem;
  }
  @media only screen and (max-width: 41em) {
    font-size: 1.6rem;
  }
`

const TwoDimensional = () => (
  <Container>
    <Details>
      <Header>Beat the 2D Map</Header>
      <Paragraph>
        In an industry where the oldest saying is “location, location, location”
        and 95% of real estate searches occur online, why is the same 2D mapping
        technology that tells you where a restaurant is used to market and
        communicate a listing’s location?
      </Paragraph>
      <Paragraph>
        KnoGeo’s 3D technology greatly improves the online search experience by
        giving searchers a realistic view of the property, it’s views and
        exposures, and the ability to explore a neighbourhood without ever
        actually visiting the area.
      </Paragraph>
    </Details>
  </Container>
)

export default TwoDimensional
