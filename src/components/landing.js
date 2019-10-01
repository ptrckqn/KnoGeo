import React from "react"
import styled, { keyframes } from "styled-components"
import { Link } from "gatsby"

import ArrowButtonRight from "./arrowButtonRight"
import ArrowButtonLeft from "./arrowButtonLeft"

const moveInLeft = keyframes`
    0%{
        opacity: 0;
        transform: translateX(-10rem);
    }

    80%{
        transform: translateX(1rem);
    }

    100%{
        opacity: 1;
        transform: translate(0);
    }
`

const moveInRight = keyframes`
    0%{
        opacity: 0;
        transform: translateX(10rem);
    }

    80%{
        transform: translateX(-1rem);
    }

    100%{
        opacity: 1;
        transform: translate(0);
    }
`

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 60%;
  width: 100%;
  padding: 10rem;
  @media only screen and (max-width: 56.25em) {
    padding: 5rem;
  }
  @media only screen and (max-width: 41em) {
    padding: 3rem;
    top: 50%;
    align-content: center;
  }
`

const NavLink = styled(Link)`
  color: #efefef;
  text-decoration: none;
  text-transform: uppercase;
`

const Header = styled.span`
  grid-column: 1 / -1;
  width: 70%;
  @media only screen and (max-width: 41em) {
    width: 100%;
  }
`

const Primary = styled.h2`
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 5rem;
  line-height: 1.2;
  animation: ${moveInLeft} 1s ease-out;
  margin-bottom: 3rem;
  @media only screen and (max-width: 41em) {
    font-size: 2.6rem;
  }
`

const Secondary = styled.h3`
  font-family: "Playfair Display", serif;
  font-weight: 400;
  font-size: 2.7rem;
  line-height: 1.3;
  animation: ${moveInRight} 1s ease-out;
  @media only screen and (max-width: 41em) {
    font-size: 1.8rem;
  }
`

const CTA = styled(Link)`
  justify-self: center;
  text-align: center;
  color: #efefef;
  text-decoration: none;
  padding: 1.5rem 3rem;
  border: 1px solid #efefef;
  font-size: 2.2rem;
  border-radius: 50px;
  transition: all 0.3s;
  margin: 5rem 2rem;
  &:hover {
    background-color: #efefef;
    color: #202020;
  }
  @media only screen and (max-width: 56.25em) {
    font-size: 1.6rem;
  }
  @media only screen and (max-width: 41em) {
    padding: 1rem 2rem;
    grid-column: 1 / -1;
    font-size: 1.4rem;
    margin: 2rem 0;
  }
`

const Landing = () => (
  <Container>
    <Header>
      <Primary>
        KnoGeo’s Patented Platform for Visualizing Real Estate Data in 3D
      </Primary>
      <Secondary>
        Powering commercial and residential real estate offices and agents to
        better analysis, presentation, and understanding
      </Secondary>
    </Header>
    <CTA to="/residential">Explore KnoGeo Residential</CTA>
    <CTA to="/commercial">Exlpore KnoGeo Commerical</CTA>
  </Container>
)

export default Landing
