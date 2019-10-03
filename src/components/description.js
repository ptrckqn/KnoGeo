import React from "react"
import styled from "styled-components"

const Container = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  max-width: 100rem;
  margin: 10rem auto;
  padding: 3rem;
  @media only screen and (max-width: 46.25em) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
  @media only screen and (max-width: 41em) {
    margin: 25rem auto;
  }
`

const Details = styled.div`
  padding: 3rem;
`

const Header = styled.h4`
  font-size: 5rem;
  @media only screen and (max-width: 56.25em) {
    font-size: 4.5rem;
  }
  @media only screen and (max-width: 41em) {
    font-size: 4rem;
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
    padding: 0;
    font-size: 1.6rem;
  }
`

const Secondary = styled(Details)`
  border-radius: 10px;
  background-color: #191919;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 46.25em) {
    width: 50rem;
    justify-self: center;
  }
  @media only screen and (max-width: 41em) {
    width: auto;
  }
`

const CTA = styled.span`
  cursor: pointer;
  color: #0074b8;
  text-decoration: none;
  padding: 1rem 3rem;
  border: 1px solid #0074b8;
  border-radius: 30px;
  transition: all 0.3s;
  &:hover {
    background-color: #0074b8;
    color: #efefef;
  }
  @media only screen and (max-width: 46.25em) {
    margin-top: 3rem;
  }
`

const Description = ({ setOpen }) => (
  <Container>
    <Details>
      <Header>Why KnoGeo</Header>
      <Paragraph>
        The Hylyte platform combines engaging and interactive 3D/VR experiences
        with your expertise to create powerful marketing messaging unlike any
        other in the market. Whether you are working with a client to find their
        next home or sell their current one, Hylyte is the innovative platform
        to use to capture and present what matters most.
      </Paragraph>
    </Details>
    <Secondary>
      <Paragraph>
        Get your Manhattan Showcase today to be on the cutting-edge of agent +
        client focused real estate technology
      </Paragraph>
      <CTA onClick={() => setOpen(true)}>Get Your Showcase</CTA>
    </Secondary>
  </Container>
)

export default Description
