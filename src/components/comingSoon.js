import React from "react"
import styled from "styled-components"

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  max-width: 100rem;
  margin: 0 auto;
  padding: 10rem 0 5rem;
  @media only screen and (max-width: 46.25em) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
  @media only screen and (max-width: 41em) {
    margin: 25rem auto;
  }
`

const Details = styled.div`
  padding: 5rem 3rem;
  border-radius: 10px;
  background-color: #191919;
  text-align: center;
`

const Header = styled.h4`
  font-size: 5rem;
  @media only screen and (max-width: 56.25em) {
    font-size: 4.5rem;
  }
  @media only screen and (max-width: 41em) {
    font-size: 4rem;
  }
`

const Paragraph = styled.p`
  font-size: 2rem;
  padding: 1.5rem 0;
  color: #8f8f8f;
  @media only screen and (max-width: 56.25em) {
    font-size: 1.8rem;
  }
  @media only screen and (max-width: 41em) {
    padding: 0;
    font-size: 1.6rem;
  }
`

const Secondary = styled(Details)`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 46.25em) {
    width: 50rem;
    justify-self: center;
  }
  @media only screen and (max-width: 41em) {
    width: auto;
  }
`

const CTA = styled.span`
  cursor: pointer;
  color: #0074b8;
  text-decoration: none;
  padding: 1rem 3rem;
  border: 1px solid #0074b8;
  border-radius: 30px;
  transition: all 0.3s;
  &:hover {
    background-color: #0074b8;
    color: #efefef;
  }
  @media only screen and (max-width: 46.25em) {
    margin-top: 3rem;
  }
`

const ComingSoon = ({ setOpen }) => (
  <Container>
    <Secondary>
      <Header>Interested?</Header>
      <CTA onClick={() => setOpen(true)}>Contact us</CTA>
    </Secondary>
    <Details>
      <Header>Coming Soon</Header>
      <Paragraph>Digital 3D Pitchbooks </Paragraph>
      <Paragraph>Dynamic 3D Stacking Plans</Paragraph>
    </Details>
  </Container>
)

export default ComingSoon
