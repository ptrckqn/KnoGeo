import React, { useState, useEffect, useCallback } from "react"
import styled from "styled-components"

const Container = styled.section`
  margin: 50rem 0;
  height: 400vh;
  display: grid;
  grid-template-columns: 1fr 55% 1fr;
  grid-template-rows: 75vh 100vh 75vh 100vh;
  justify-items: center;
`

const Video = styled.video`
  width: 100%;
  position: sticky;
  top: 50%;
  transform: translateY(-50%);
  grid-column: 2 / 3;
`

const Details = styled.div`
  font-size: 2.3rem;
  padding: 3rem;
  position: sticky;
  top: 50%;
  transform: ${props => `translate(${props.translate}%, -50%)`};
  overflow: hidden;
  color: #8f8f8f;
`

const Left = styled.div`
  height: 100%;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`

const Right = styled.div`
  height: 100%;
  grid-column: 3 / 4;
  grid-row: 4 / 5;
`

const Flyover = () => {
  const [leftTranslate, setLeftTranslate] = useState(0)
  const [rightTranslate, setRightTranslate] = useState(0)
  const [prevPos, setPrevPos] = useState(window.pageYOffset)
  const upperBoundary = window.innerHeight * 0.45
  const lowerBoundary = window.innerHeight * 0.55

  return (
    <Container>
      <Left>
        <Details translate={leftTranslate} id="leftWrapper">
          Showings are one of the most time-consuming parts of the real estate
          search process: You have to organize your clients, the listings, and
          your own schedule to make it work, and it often takes days of client’s
          booking time off work and driving around town to get to everything
          they’re interested in. This is particularly difficult to manage when
          working with out-of-town clients.
        </Details>
      </Left>
      <Video autoplay muted controls>
        <source src="videos/flyover.mp4" type="video/mp4" />
      </Video>
      <Right>
        <Details translate={rightTranslate} id="rightWrapper">
          Flights allow you to create virtual views of each property and
          neighborhood in minutes, complete with your comments and highlights
          for each listing. Let your clients visit listings back-to-back in
          seconds rather than days, and help them narrow their choices with
          property visits they can experience on their phone or desktop.
        </Details>
      </Right>
    </Container>
  )
}

export default Flyover
