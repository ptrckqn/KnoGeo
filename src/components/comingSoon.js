import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  max-width: 100rem;
  margin: 50rem auto 25rem;
`

const Details = styled.div`
  padding: 5rem 3rem;
  border-radius: 10px;
  background-color: #191919;
`

const Header = styled.h4`
  font-size: 5rem;
`

const Paragraph = styled.p`
  font-size: 2rem;
  padding: 1.5rem 0;
`

const Secondary = styled(Details)`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const CTA = styled(Link)`
  color: #285aa0;
  text-decoration: none;
  padding: 1.5rem 3rem;
  border: 1px solid #285aa0;
  border-radius: 30px;
  transition: all 0.3s;
  &:hover {
    background-color: #285aa0;
    color: #efefef;
  }
`

const ComingSoon = () => (
  <Container>
    <Secondary>
      <Header>Let's get in touch</Header>
      <CTA to="#">Contact us</CTA>
    </Secondary>
    <Details>
      <Header>Coming Soon</Header>
      <Paragraph>Digital 3D Pitchbooks </Paragraph>
      <Paragraph>Dynamic 3D Stacking Plans</Paragraph>
    </Details>
  </Container>
)

export default ComingSoon
