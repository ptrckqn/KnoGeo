import React, { useState, useEffect } from "react"
import styled from "styled-components"

const Container = styled.section`
  padding: 25rem 0;
  height: 400vh;
  display: grid;
  grid-template-columns: 1fr 55% 1fr;
  grid-template-rows: 75vh 100vh 75vh 100vh;
  justify-items: center;
  @media only screen and (max-width: 56.25em) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    height: auto;
    margin: 100rem 0 25rem;
  }
`

const Video = styled.video`
  width: 100%;
  position: sticky;
  top: 50%;
  transform: translateY(-50%);
  grid-column: 2 / 3;
  @media only screen and (max-width: 56.25em) {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    position: static;
  }
`

const Details = styled.div`
  font-size: 2.3rem;
  padding: 3rem;
  position: sticky;
  top: 50%;
  transform: translate(0%, -50%);
  overflow: hidden;
  color: #8f8f8f;
  @media only screen and (max-width: 56.25em) {
    position: static;
  }
`

const Left = styled.div`
  height: 100%;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  @media only screen and (max-width: 56.25em) {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
  }
`

const Right = styled.div`
  height: 100%;
  grid-column: 3 / 4;
  grid-row: 4 / 5;
  @media only screen and (max-width: 56.25em) {
    grid-column: 1 / -1;
    grid-row: 3 / 4;
  }
`

const Flyover = () => {
  const [leftTop, setLeftTop] = useState()
  const [rightTop, setRightTop] = useState()
  const [prevPos, setPrevPos] = useState()

  useEffect(() => {
    document.addEventListener("scroll", handleScroll)
    const upperBoundary = window.innerHeight * 0.45
    const lowerBoundary = window.innerHeight * 0.55
    setPrevPos(window.pageYOffset)

    return () => document.removeEventListener("scroll", handleScroll)
  }, [])

  function handleScroll() {
    const leftWrapper = document
      .querySelector("#leftWrapper")
      .getBoundingClientRect()
    const rightWrapper = document
      .querySelector("#rightWrapper")
      .getBoundingClientRect()
    setLeftTop(leftWrapper.top)
    setRightTop(rightWrapper.top)
    console.log(rightWrapper.top)
  }

  return (
    <Container>
      <Left>
        <Details id="leftWrapper">
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
        <Details id="rightWrapper">
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
