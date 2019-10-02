import React from "react"
import styled from "styled-components"

const Container = styled.div`
  margin: 10rem auto;
  max-width: 55rem;
  font-size: 2rem;
  color: #8f8f8f;
  padding: 5rem 3rem;
  border-radius: 10px;
  background-color: #191919;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 56.25em) {
    font-size: 1.8rem;
  }
  @media only screen and (max-width: 41em) {
    margin: 10rem 3rem;
    font-size: 1.6rem;
  }
`

const CTA = styled.span`
  font-size: 1.6rem;
  margin-top: 5rem;
  color: #0074b8;
  text-decoration: none;
  padding: 1rem 3rem;
  border: 1px solid #0074b8;
  border-radius: 30px;
  transition: all 0.3s;
  text-align: center;
  &:hover {
    background-color: #0074b8;
    color: #efefef;
  }
`
const Boxed = ({ setOpen, children }) => (
  <Container>
    {children}
    <CTA onClick={() => setOpen(true)}>Contact Us For a Quote Today</CTA>
  </Container>
)

export default Boxed
