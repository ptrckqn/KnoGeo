import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Container = styled.div`
  padding: 3rem;
  border-radius: 10px;
  height: 100%;
  background-color: rgba(19, 20, 24, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
`

const Image = styled(Img)`
  border-radius: 50%;
  height: 20rem;
  width: 20rem;
  margin-bottom: 3rem;
`

const Header = styled.h4`
  font-size: 2.5rem;
  @media only screen and (max-width: 41em) {
    font-size: 2rem;
  }
`

const Secondary = styled.span`
  font-size: 2rem;
  font-style: oblique;
  margin-bottom: 3rem;
  @media only screen and (max-width: 41em) {
    font-size: 1.8rem;
  }
`

const Email = styled.a`
  transition: all 0.3s;
  :link,
  :visited {
    font-size: 1.8rem;
    align-self: flex-end;
    color: #0074b8;
    text-decoration: none;
    @media only screen and (max-width: 41em) {
      font-size: 1.6rem;
    }
  }
  :active,
  :hover {
    color: #efefef;
  }
`

const Details = styled.span`
  font-size: 1.8rem;
  @media only screen and (max-width: 41em) {
    font-size: 1.6rem;
  }
`

const PersonCard = ({ name, title, image, email, children }) => (
  <Container>
    <Image fixed={image.childImageSharp.fixed} />
    <Header>{name}</Header>
    <Secondary>{title}</Secondary>
    <Details>{children}</Details>
    <Email href={"mailto:" + email}>{email}</Email>
  </Container>
)

export default PersonCard
