import React, { useEffect, useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 2%;
  right: 2%;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  background-color: #efefef;
  z-index: 10;
  cursor: pointer;
  transition: all 0.3s;
  transform: ${props => `translateY(${props.show}vh)`};
`

const Chevron = styled.span`
  transform: rotate(-90deg);
  color: #202020;
  font-size: 3rem;
  transition: all 0.2s;
  ${Container}:hover & {
    transform: translateY(-10px) rotate(-90deg);
  }
`

const ScrollToTop = () => {
  const [show, setShow] = useState(10)
  useEffect(() => {
    document.addEventListener("scroll", handleScroll)
    return () => document.removeEventListener("scroll", handleScroll)
  })

  function handleScroll() {
    if (window.pageYOffset > window.innerHeight * 0.95) {
      setShow(0)
    } else {
      setShow(10)
    }
  }

  function handleClick() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }

  return (
    <Container onClick={handleClick} show={show}>
      <Chevron>&#10095;</Chevron>
    </Container>
  )
}

export default ScrollToTop
