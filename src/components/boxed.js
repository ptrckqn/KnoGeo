import React from "react"
import styled from "styled-components"

const Container = styled.div`
  margin: 15rem auto;
  max-width: 55rem;
  font-size: 2rem;
  color: #8f8f8f;
  padding: 5rem 3rem;
  border-radius: 10px;
  background-color: #191919;
  display: flex;
  flex-direction: column;
  align-items: center;
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