import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;
  @media only screen and (max-width: 30em) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 25rem);
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  background: #000;
  opacity: 0.65;
  z-index: 2;
`

const Image = styled(Img)`
  width: 100%;
  object-fit: contain;
`

const Details = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 3;
`

const Gallery = ({ images, children }) => (
  <Container>
    <Overlay />
    {images.slice(0, 2).map(({ node }, count) => (
      <Image
        key={count}
        fluid={node.childImageSharp.fluid}
        objectFit="contain"
        objectPosition="0 50%"
      />
    ))}
    <Details>{children}</Details>
  </Container>
)

export default Gallery
