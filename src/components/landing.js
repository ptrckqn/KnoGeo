import React from "react"
import styled, { keyframes, css } from "styled-components"
import { Link } from "gatsby"

import Brand from "./brand"
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

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 8rem;
  padding: 3rem;
`

const BrandBox = styled(Link)`
  height: 100%;
  width: 15rem;
  position: relative;
`

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  width: 50%;
  align-items: center;
`

const NavItem = styled.li``

const NavLink = styled(Link)`
  color: #efefef;
  text-decoration: none;
  text-transform: uppercase;
`

const Header = styled.span`
  position: absolute;
  width: 55%;
  text-align: right;
  top: 40%;
  left: 35%;
  transform: translate(-50%, -50%);
`

const Title = styled.h1`
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 5rem;
`

const Primary = styled.h2`
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 4rem;
  animation: ${css`
    ${moveInLeft} 1s ease-out
  `};
`

const Secondary = styled.h3`
  font-family: "Playfair Display", serif;
  font-weight: 400;
  font-size: 3rem;
  animation: ${css`
    ${moveInRight} 1s ease-out
  `};
`

const ButtonText = styled.span`
  margin: 0 1.6rem;
  font-size: 2.5rem;
  transition: transform 0.2s;
  text-transform: capitalize;
`

const Navigation = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 20%;
  transform: translateX(-50%);
  width: 100%;
`

const Landing = () => (
  <>
    <Nav>
      <BrandBox>
        <Brand fillOne="#efefef" fillTwo="#efefef" />
      </BrandBox>
      <NavLinks>
        <NavItem>
          <NavLink to="/residential">Residential</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/commerical">Commerical</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/blog">Blog</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/team">Team</NavLink>
        </NavItem>
      </NavLinks>
    </Nav>
    <Header>
      <Primary>
        Patented Platform for Visualizing Real Estate Data in 3D
      </Primary>
      <Secondary>
        Powering commercial and residential real estate offices and agents to
        better analysis, presentation, and understanding
      </Secondary>
    </Header>
    <Navigation>
      <ArrowButtonLeft>
        <NavLink to="/residential">
          <ButtonText>Explore KnoGeo Residential</ButtonText>
        </NavLink>
      </ArrowButtonLeft>
      <ArrowButtonRight>
        <NavLink to="/commercial">
          <ButtonText>Explore KnoGeo Commercial</ButtonText>
        </NavLink>
      </ArrowButtonRight>
    </Navigation>
  </>
)

export default Landing
