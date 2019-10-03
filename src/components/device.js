import React from "react"
import styled from "styled-components"

const Container = styled.section`
  margin: 25rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 90vh);
  overflow: hidden;
  @media only screen and (max-width: 46.25em) {
    grid-template-columns: 1fr;
    grid-row-gap: 0;
    grid-template-rows: max-content 50vh max-content 50vh;
  }
`

const Laptop = styled.div`
  background: url(/images/laptop.png) center right/cover no-repeat;
  height: 100%;
  @media only screen and (max-width: 46.25em) {
    background-position: center;
    background-size: contain;
    grid-row: 2 / 3;
    margin: 0 1.5rem;
  }
`

const Phone = styled.div`
  background: url(/images/phone.png) center left/contain no-repeat;
  height: 100%;
  transform: translateX(50%);
  @media only screen and (max-width: 46.25em) {
    background-position: center;
    background-size: contain;
    transform: translate(0);
  }
`

const Details = styled.span`
  padding: 5rem 3rem;
  align-self: center;
  @media only screen and (max-width: 41em) {
    padding: 3rem;
  }
`

const Header = styled.h4`
  font-size: 5rem;
  @media only screen and (max-width: 56.25em) {
    font-size: 4rem;
  }
  @media only screen and (max-width: 41em) {
    font-size: 3rem;
  }
`

const Paragraph = styled.p`
  font-size: 2rem;
  padding: 1.5rem 0;
  color: #8f8f8f;
  @media only screen and (max-width: 56.25em) {
    font-size: 1.8rem;
  }
  @media only screen and (max-width: 56.25em) {
    font-size: 1.6rem;
  }
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
