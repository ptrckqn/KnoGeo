import React from "react"
import styled from "styled-components"

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  @media only screen and (max-width: 41em) {
    padding: 5rem 0.5rem;
  }
`

const Details = styled.span`
  text-align: center;
`

const Header = styled.h4`
  font-size: 2.5rem;
`

const Paragraph = styled.p`
  font-size: 2rem;
  padding: 1.5rem 0;
  color: #8f8f8f;
  @media only screen and (max-width: 56.25em) {
    font-size: 1.8rem;
  }
  @media only screen and (max-width: 41em) {
    font-size: 1.6rem;
  }
`

const Feature = ({ children, heading, body }) => (
  <Container>
    {children}
    <Details>
      <Header>{heading}</Header>
      <Paragraph>{body}</Paragraph>
    </Details>
  </Container>
)

export default Feature
