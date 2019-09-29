import React from "react"
import styled from "styled-components"

const Svg = styled.svg`
  width: 50%;
  margin: 2rem auto;
  fill: #0074b8;
`

const Layers = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path d="M10 1l10 6-10 6L0 7l10-6zm6.67 10L20 13l-10 6-10-6 3.33-2L10 15l6.67-4z" />
  </Svg>
)

export default Layers
