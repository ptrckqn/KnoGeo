import React from "react"
import styled from "styled-components"

const Svg = styled.svg`
  width: 30%;
  margin: 2rem auto;
  fill: #0074b8;
`

const Devices = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path d="M17 6V5h-2V2H3v14h5v4h3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6zm-5.75 14H3a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5.75zM11 8v8h6V8h-6zm3 11a1 1 0 0 0 0-2 1 1 0 0 0 0 2z" />
  </Svg>
)

export default Devices