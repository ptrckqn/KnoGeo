import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.footer`
  margin: 25rem 0 0;
  padding: 2rem 10rem;
  height: 15rem;
  background-color: #131418;
  display: flex;
  justify-content: space-between;
  position: relative;
  @media only screen and (max-width: 46.25em) {
    flex-direction: column;
    height: 20rem;
  }
`

const NavLinks = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, min-content);
  grid-column-gap: 3rem;
  align-items: center;
  @media only screen and (max-width: 46.25em) {
    align-self: center;
  }
  @media only screen and (max-width: 41em) {
    grid-template-columns: repeat(2, min-content);
    grid-row-gap: 1.5rem;
    justify-items: center;
  }
`

const NavItem = styled.li``

const NavLink = styled(Link)`
  color: #8f8f8f;
  text-decoration: none;
  text-transform: uppercase;
  display: inline;
  transition: all 0.2s;
  &:hover {
    color: #efefef;
  }
`

const ExternalLink = styled.a`
  color: #8f8f8f;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s;
  &:hover {
    color: #efefef;
  }
`

const MadeBy = styled.a`
  color: #4d4d4d;
  position: absolute;
  bottom: 1rem;
  left: 10rem;
  text-decoration: none;
  transition: all 0.2s;
  &:hover {
    color: #efefef;
  }
  @media only screen and (max-width: 46.25em) {
    bottom: 0rem;
    left: 50%;
    transform: translateX(-50%);
  }
`

const Image = styled.img`
  object-fit: contain;
  height: 100%;
  padding-bottom: 5rem;
`
const Footer = () => (
  <Container>
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
    <Image src="/images/icon.png" />
    <MadeBy href="http://www.github.com/ptrckqn" target="__blank">
      Made by Patrick Quan
    </MadeBy>
  </Container>
)

export default Footer
