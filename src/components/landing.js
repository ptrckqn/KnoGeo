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
  grid-template-columns: 1.55fr 1fr;
  align-items: center;

  height: 100%;
  padding: 10rem;
`

const NavLink = styled(Link)`
  color: #efefef;
  text-decoration: none;
  text-transform: uppercase;
`

const Header = styled.span`
  @media only screen and (max-width: 41em) {
    left: 50%;
    width: 90%;
  }
`

const Primary = styled.h2`
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 4rem;
  line-height: 1.2;
  animation: ${moveInLeft} 1s ease-out;
  margin-bottom: 3rem;
`

const Secondary = styled.h3`
  font-family: "Playfair Display", serif;
  font-weight: 400;
  font-size: 2.7rem;
  line-height: 1.3;
  animation: ${moveInRight} 1s ease-out;
`

const ButtonText = styled.span`
  margin: 0 1.6rem;
  font-size: 2.5rem;
  transition: transform 0.2s;
  text-transform: capitalize;
`

const Navigation = styled.div``

const CTA = styled(Link)`
  display: block;
  color: #efefef;
  text-decoration: none;
  padding: 1.5rem 3rem;
  border: 1px solid #efefef;
  font-size: 2.5rem;
  border-radius: 10px;
  transition: all 0.3s;
  margin: 5rem 2rem;
  &:hover {
    background-color: #efefef;
    color: #202020;
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
    <Navigation>
      <CTA to="/residential">Explore KnoGeo Residential</CTA>
      <CTA to="/commercial">Exlpore KnoGeo Commerical</CTA>
    </Navigation>
  </Container>
)

export default Landing
