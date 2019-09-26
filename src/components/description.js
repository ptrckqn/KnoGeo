import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  max-width: 100rem;
  margin: 25rem auto;
`

const Details = styled.div`
  padding: 5rem 3rem;
`

const Header = styled.h4`
  font-size: 5rem;
`

const Paragraph = styled.p`
  font-size: 2rem;
  padding: 1.5rem 0;
`

const Secondary = styled(Details)`
  border-radius: 10px;
  background-color: #131418;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const CTA = styled(Link)`
  color: #0074b8;
  text-decoration: none;
  padding: 1.5rem 3rem;
  border: 1px solid #0074b8;
  border-radius: 30px;
  transition: all 0.3s;
  &:hover {
    background-color: #0074b8;
    color: #efefef;
  }
`

const Description = () => (
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
      <CTA>Get Your Showcase</CTA>
    </Secondary>
  </Container>
)

export default Description
