import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Brand from "./brand"

const Nav = styled.nav`
  position: absolute;
  top: 0;
  z-index: 3;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 8rem;
  padding: 3rem;
`

const Checkbox = styled.input`
  display: none;
`

const MenuIcon = styled.label`
  position: relative;
  display: none;
  z-index: 10;
  height: 3rem;
  width: 3rem;
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2rem;
    height: 1px;
    background-color: #efefef;
    transition: all 0.3s;
    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 2rem;
      height: 1px;
      background-color: #efefef;
      transition: all 0.3s;
    }
    &::before {
      top: 0.5rem;
    }
    &::after {
      top: -0.5rem;
    }
  }

  @media only screen and (max-width: 30em) {
    display: block;
  }
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
  @media only screen and (max-width: 41em) {
    width: 100%;
  }
  @media only screen and (max-width: 30em) {
    z-index: 9;
    flex-direction: column;
    position: absolute;
    top: 1.5rem;
    left: 50%;
    transform: translateX(-50%) scale(0.8);
    background-color: #202020;
    justify-content: center;
    opacity: 0;
    width: 90%;
    border-radius: 10px;
    visibility: hidden;
    transition: all 0.3s;
    transform-origin: top right;
    ${Checkbox}:checked ~ & {
      opacity: 1;
      transform: translateX(-50%) scale(1);
      visibility: visible;
    }
  }
`

const NavItem = styled.li`
  @media only screen and (max-width: 30em) {
    padding: 2rem 0;
  }
`

const NavLink = styled(Link)`
  color: #efefef;
  text-decoration: none;
  text-transform: uppercase;
  @media only screen and (max-width: 41em) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 30em) {
    font-size: 1.8rem;
  }
`

const ExternalLink = styled.a`
  color: #efefef;
  text-decoration: none;
  text-transform: uppercase;
  @media only screen and (max-width: 41em) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 30em) {
    font-size: 1.8rem;
  }
`

const Navbar = () => (
  <Nav>
    <BrandBox to="/">
      <Brand fillOne="#efefef" fillTwo="#efefef" />
    </BrandBox>
    <Checkbox type="checkbox" id="menu" />
    <MenuIcon htmlFor="menu">
      <span />
    </MenuIcon>
    <NavLinks>
      <NavItem>
        <NavLink to="/residential">Residential</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/commercial">Commercial</NavLink>
      </NavItem>
      <NavItem>
        <ExternalLink
          href="https://medium.com/knogeo-3d-data-technologies"
          target="__blank"
        >
          Blog
        </ExternalLink>
      </NavItem>
      <NavItem>
        <NavLink to="/team">Team</NavLink>
      </NavItem>
    </NavLinks>
  </Nav>
)

export default Navbar
