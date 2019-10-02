import React from "react"
import styled from "styled-components"

const Container = styled.section`
  position: relative;
  height: 95vh;
  background: ${props => `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props.image}) center center/cover no-repeat;`};
  z-index: 2;
`

const Details = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: ${props => (props.center ? "block" : "grid")};
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr max-content;
  grid-row-gap: 15rem;
  align-items: center;
  justify-items: center;
  width: 90%;
`

const Section = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  @media only screen and (max-width: 41em) {
    width: 90%;
    bottom: 0;
  }
`

const Title = styled.h1`
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 8rem;
  line-height: 1.2;
  margin-bottom: 3rem;
  @media only screen and (max-width: 46.25em) {
    font-size: 6rem;
  }
  @media only screen and (max-width: 30em) {
    font-size: 4rem;
  }
`

const Primary = styled.h2`
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 4rem;
  line-height: 1.2;
  @media only screen and (max-width: 46.25em) {
    font-size: 3rem;
  }
  @media only screen and (max-width: 30em) {
    font-size: 2.5rem;
  }
`

const CTA = styled.span`
  text-align: center;
  cursor: pointer;
  background: transparent;
  font-size: 2rem;
  color: #efefef;
  text-decoration: none;
  padding: 1rem 3rem;
  border: 1px solid #efefef;
  border-radius: 30px;
  transition: all 0.3s;
  &:hover {
    background-color: #efefef;
    color: #202020;
  }
  @media only screen and (max-width: 46.25em) {
    font-size: 1.6rem;
  }
  @media only screen and (max-width: 41em) {
    font-size: 1.4rem;
  }
`

const Secondary = styled.h3`
  margin: 3rem 0;
  font-family: "Playfair Display", serif;
  font-weight: 400;
  font-size: 2.7rem;
  line-height: 1.3;
  font-style: oblique;
  @media only screen and (max-width: 46.25em) {
    font-size: 1.6rem;
  }
  @media only screen and (max-width: 41em) {
    font-size: 1.4rem;
  }
`
const Heading = ({
  setOpen,
  image,
  title,
  primary,
  secondary,
  cta,
  center,
}) => (
  <Container image={image}>
    <Details center={center}>
      <Title>{title}</Title>

      <Primary>{primary}</Primary>
    </Details>
    <Section>
      <CTA onClick={() => setOpen(true)}>{cta}</CTA>
      <Secondary>{secondary}</Secondary>
    </Section>
  </Container>
)

export default Heading
