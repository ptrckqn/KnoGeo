import React, { useState, useEffect } from "react"
import styled from "styled-components"

const Container = styled.section`
  padding: 10rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  @media only screen and (max-width: 41em) {
    grid-template-columns: 1fr;
  }
`

const Video = styled.video`
  width: 100%;
`

const Details = styled.div`
  font-size: 2.3rem;
  padding: 3rem;
  color: #8f8f8f;
  @media only screen and (max-width: 56.25em) {
    font-size: 1.8rem;
  }
  @media only screen and (max-width: 41em) {
    font-size: 1.6rem;
  }
`

const Right = styled.div`
  height: 100%;
`

const Flyover = () => {
  return (
    <Container>
      <Video autoplay muted controls>
        <source src="videos/flyover.mp4" type="video/mp4" />
      </Video>
      <Right>
        <Details>
          Flights allow you to create virtual views of each property and
          neighborhood in minutes, complete with your comments and highlights
          for each listing. Let your clients visit listings back-to-back in
          seconds rather than days, and help them narrow their choices with
          property visits they can experience on their phone or desktop.
        </Details>
        <Details>
          Showings are one of the most time-consuming parts of the real estate
          search process: You have to organize your clients, the listings, and
          your own schedule to make it work, and it often takes days of client’s
          booking time off work and driving around town to get to everything
          they’re interested in. This is particularly difficult to manage when
          working with out-of-town clients.
        </Details>
      </Right>
    </Container>
  )
}

export default Flyover
