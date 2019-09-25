import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

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
  transition: transform 0.2s;
`

const Line = styled.span`
  background-color: #ccc;
  display: block;
  height: 1px;
  position: relative;
  transition: transform 0.2s, width 0.2s;

  &::before,
  &::after {
    content: "";
    background-color: #ccc;
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
  ${ArrowContainer}:hover & {
    background-color: #efefef;
    &::before,
    &::after {
      background-color: #efefef;
    }
  }
`

const Left = styled(Arrow)`
  ${Line} {
    width: 0;
    transition-delay: 0.2s;
    &::before,
    &::after {
      width: 8px;
      transition-delay: 0.3s;
    }

    &::before {
      transform: rotate(40deg);
    }
    &::after {
      transform: rotate(-40deg);
    }

    ${ArrowContainer}:hover & {
      width: 6rem;
    }
  }
`

const Main = styled.span`
  display: flex;
  align-items: center;
  transition: transform 0.2s;
  ${ArrowContainer}:hover & {
    transform: translateX(7.6rem);
  }
`

const ArrowButtonLeft = ({ children }) => {
  return (
    <ArrowContainer>
      <Main>
        {children}
        <Left>
          <Line />
        </Left>
      </Main>
    </ArrowContainer>
  )
}

export default ArrowButtonLeft