import React from "react"
import styled from "styled-components"

const Container = styled.section`
  margin: 50rem 0;
  background: url(images/2dmap.png) center center/cover no-repeat;
  height: 75rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 5%;
`

const Details = styled.div`
  width: 40%;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 5rem 3rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Header = styled.h4`
  font-size: 2.5rem;
`

const Paragraph = styled.p`
  font-size: 2rem;
  padding: 1.5rem 0;
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
