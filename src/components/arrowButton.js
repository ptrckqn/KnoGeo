import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const ArrowContainer = styled(Link)`
  display: inline-block;
  color: #ccc;
  font-size: 1.6rem;
  font-style: oblique;
  text-decoration: none;
  position: relative;
  transition: all 0.2s;
  &:hover {
    color: #efefef;
  }
`

const Arrow = styled.span`
  width: 6rem;
  transition: all 0.2s;
`

const Line = styled.span`
  background-color: #ccc;
  display: block;
  height: 1px;
  position: relative;
  transition: all 0.2s;

  &::before,
  &::after {
    content: "";
    background: #ccc;
    display: block;
    height: 1px;
    position: absolute;
    top: 0;
    right: 0;
    transition: all 0.2s;
  }
  &::before {
    transform-origin: top right;
  }
  &::after {
    transform-origin: bottom right;
  }
`

const Left = styled(Arrow)`
  position: absolute;
  top: 60%;
  left: 0;

  ${Line} {
    width: 0;
    background-color: #ccc;
    &::before,
    &::after {
      transform: rotate(0);
    }
  }
`

const Right = styled(Arrow)`
  top: 3px;
  ${Line} {
    width: 6rem;
    transition-delay: 0.2s;

    &::before,
    &::after {
      width: 8px;
      transition-delay: 0.3s;
      transition: all 0.5s;
    }

    &::before {
      transform: rotate(40deg);
    }
    &::after {
      transform: rotate(-40deg;);
    }
  }
`

const Main = styled.span`
  display: flex;
  align-items: center;
`
const Text = styled.span`
  font-size: 1.6rem;
  margin: 0 1.6rem;
`

const ArrowButton = ({ text }) => {
  return (
    <Container>
      <ArrowContainer>
        <Left>
          <Line />
        </Left>
        <Main>
          <Text>{text}</Text>
          <Right>
            <Line />
          </Right>
        </Main>
      </ArrowContainer>
    </Container>
  )
}

export default ArrowButton
