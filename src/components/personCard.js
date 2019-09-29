import React from "react"
import styled from "styled-components"

const Container = styled.div`
  padding: 3rem;
  border-radius: 10px;
  height: 100%;
  background-color: rgba(19, 20, 24, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
`

const Image = styled.img`
  border-radius: 50%;
  object-fit: cover;
  height: 20rem;
  width: 20rem;
  margin-bottom: 3rem;
`

const Header = styled.h4`
  font-size: 2.5rem;
`

const Secondary = styled.span`
  font-size: 2rem;
  font-style: oblique;
  margin-bottom: 3rem;
`

const Details = styled.span`
  font-size: 1.8rem;
`

const PersonCard = ({ name, title, image, children }) => (
  <Container>
    <Image src={image} />
    <Header>{name}</Header>
    <Secondary>{title}</Secondary>
    <Details>{children}</Details>
  </Container>
)

export default PersonCard
