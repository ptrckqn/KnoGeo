import React from "react"
import styled from "styled-components"

const Container = styled.span`
  padding: 5rem 0;
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 6rem;
  font-style: oblique;
  text-align: center;
  display: block;
  color: #fff;
  span {
    color: #0074b8;
  }
  @media only screen and(max-width: 56.25em) {
    font-size: 5rem;
  }
  @media only screen and (max-width: 41em) {
    font-size: 4rem;
    span {
      display: block;
    }
  }
`

const Tagline = ({ children }) => <Container>{children}</Container>

export default Tagline
