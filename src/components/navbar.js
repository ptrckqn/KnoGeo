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

const ExternalLink = styled.a`
  color: #efefef;
  text-decoration: none;
  text-transform: uppercase;
`

const Navbar = () => (
  <Nav>
    <BrandBox to="/">
      <Brand fillOne="#efefef" fillTwo="#efefef" />
    </BrandBox>
    <NavLinks>
      <NavItem>
        <NavLink to="/residential">Residential</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/commercial">Commerical</NavLink>
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
