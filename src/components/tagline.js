import React from "react"
import styled from "styled-components"

const Container = styled.span`
  margin: 25rem 0 50rem;
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 6rem;
  font-style: oblique;
  text-align: center;
  display: block;
  span {
    color: #0074b8;
  }
`

const Tagline = ({ children }) => <Container>{children}</Container>

export default Tagline
