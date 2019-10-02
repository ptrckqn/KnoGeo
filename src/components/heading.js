import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

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
`

const Title = styled.h1`
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 8rem;
  line-height: 1.2;
  margin-bottom: 3rem;
`

const Primary = styled.h2`
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 4rem;
  line-height: 1.2;
`

const CTA = styled(Link)`
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
`

const Secondary = styled.h3`
  margin: 3rem 0;
  font-family: "Playfair Display", serif;
  font-weight: 400;
  font-size: 2.7rem;
  line-height: 1.3;
  font-style: oblique;
`
const Heading = ({ image, title, primary, secondary, cta, center }) => (
  <Container image={image}>
    <Details center={center}>
      <Title>{title}</Title>

      <Primary>{primary}</Primary>
    </Details>
    <Section>
      <CTA to="/">{cta}</CTA>
      <Secondary>{secondary}</Secondary>
    </Section>
  </Container>
)

export default Heading
