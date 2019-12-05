import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Container = styled.section`
  padding: 10rem 0 5rem;
  display: flex;
  justify-content: space-between;
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

const ImageWapper = styled.div`
  flex: 1 1 0px;
  margin: 0 1rem 0 5rem;
  width: 50%;
  display: flex;
  align-items: center;
  min-height: 300px;
  @media only screen and (max-width: 41em) {
    width: 80%;
    margin: 0 auto;
  }
`

const Image = styled(Img)`
  width: 100%;
`

const Block = ({ heading, children, image }) => (
  <Container>
    <ImageWapper>
      <Image fluid={image.childImageSharp.fluid} objectFit="contain" />
    </ImageWapper>
    <Details>
      <Header>{heading}</Header>
      <Paragraph>{children}</Paragraph>
    </Details>
  </Container>
)

export default Block
