import React from "react"
import styled from "styled-components"

const Container = styled.span`
  margin: 10rem 0 25rem;
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 6rem;
  font-style: oblique;
  text-align: center;
  display: block;
  span {
    color: #0074b8;
  }
  @media only screen and(max-width: 56.25em) {
    font-size: 5rem;
  }
  @media only screen and (max-width: 41em) {
    font-size: 4rem;
  }
`

const Tagline = ({ children }) => <Container>{children}</Container>

export default Tagline
