import React from "react"
import styled from "styled-components"

const Container = styled.div`
  padding: 5rem 3rem;
  border-radius: 10px;
  background-color: #191919;
  position: relative;
  height: 100%;
  width: 100%;
`

const Background = styled.span`
  display: block;
  position: absolute;
  height: 100%;
  bottom: 0;
  left: 0;
`

const Header = styled.h4`
  font-size: 2.5rem;
`

const Paragraph = styled.p`
  font-size: 2rem;
  color: #8f8f8f;
  @media only screen and (max-width: 56.25em) {
    font-size: 1.8rem;
  }
  @media only screen and (max-width: 41em) {
    font-size: 1.6rem;
  }
`

const Card = ({ heading, children }) => (
  <Container>
    <Background />
    <Header>{heading}</Header>
    <Paragraph>{children}</Paragraph>
  </Container>
)

export default Card
