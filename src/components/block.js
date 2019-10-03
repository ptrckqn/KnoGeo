import React from "react"
import styled from "styled-components"

const Container = styled.section`
  padding: 10rem 0 5rem;
  display: flex;
  justify-content: space-between;
  flex-direction: ${props => (props.mirror ? "row-reverse" : "row")};
  @media only screen and (max-width: 41em) {
    flex-direction: column;
    align-items: center;
  }
`

const Details = styled.span`
  flex: 1 0 0px;
  margin: 0 5rem;
  width: 100%;
  padding: 3rem;
  align-self: center;
  @media only screen and (max-width: 56.25em) {
    margin: 0 1.5rem;
  }
`

const Header = styled.h4`
  font-size: 5rem;
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

const Image = styled.img`
  flex: 0 1 0px;
  margin: 0 5rem;
  width: 30%;
  object-fit: contain;
  @media only screen and (max-width: 41em) {
    width: 80%;
  }
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
