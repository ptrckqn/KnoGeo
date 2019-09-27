import React from "react"
import styled from "styled-components"

const Container = styled.section`
  height: 50rem;
  margin: 25rem auto;
  display: flex;
  justify-content: space-between;
  flex-direction: ${props => (props.mirror ? "row-reverse" : "row")};
`

const Details = styled.span`
  flex: 1 0 0px;
  margin: 0 5rem;
  width: 100%;
  padding: 3rem;
  align-self: center;
`

const Header = styled.h4`
  font-size: 5rem;
`

const Paragraph = styled.p`
  font-size: 2rem;
  padding: 1.5rem 0;
`

const Image = styled.img`
  flex: 0 1 0px;
  margin: 0 5rem;
  width: 30%;
  object-fit: contain;
`

const Block = ({ heading, children, image, mirror }) => (
  <Container mirror={mirror}>
    <Image src={image} />
    <Details>
      <Header>{heading}</Header>
      <Paragraph>{children}</Paragraph>
    </Details>
  </Container>
)

export default Block
