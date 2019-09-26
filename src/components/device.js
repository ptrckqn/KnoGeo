import React from "react"
import styled from "styled-components"

const Container = styled.section`
  margin: 50rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 90vh);
  grid-row-gap: 50vh;
  overflow: hidden;
`

const Laptop = styled.div`
  background: url(images/laptop.png) center right/cover no-repeat;
  height: 100%;
`

const Phone = styled.div`
  background: url(images/phone.png) center left/contain no-repeat;
  height: 100%;
  transform: translateX(50%);
`

const Details = styled.span`
  padding: 3rem;
  align-self: center;
`

const Header = styled.h4`
  font-size: 2.5rem;
`

const Paragraph = styled.p`
  font-size: 2rem;
  padding: 1.5rem 0;
`

const Device = () => (
  <Container>
    <Laptop />
    <Details>
      <Header>Bring the Power of 3D to the Built Environment</Header>
      <Paragraph>
        Interior 3D visualizations powered by companies like Matterport have
        improved real estate search by giving users an immersive way to
        experience a listing’s interior online, and interactive (but expensive)
        3D models give pre-built construction an edge in letting users get a
        better understanding of a building before they buy.
      </Paragraph>
      <Paragraph>
        KnoGeo’s 3D Listings bring the same impact and value to the built
        environment by using the latest in GIS technology to dynamically create
        Showcases for each listing, making it simple and cost-effective to
        innovatively improve the way homes are marketed.
      </Paragraph>
    </Details>
    <Details>
      <Header>Market Your Listing</Header>
      <Paragraph>
        KnoGeo Showcases can embed directly into your listing’s details or be
        accessible through a link, adding valuable location marketing to your
        online offering. The 3D visualizations dynamically attach listing
        details to a highlight of precise unit location, creating an engaging
        and interactive experience that captures attention for your listing.
      </Paragraph>
    </Details>
    <Phone />
  </Container>
)

export default Device
