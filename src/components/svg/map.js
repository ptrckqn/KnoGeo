import React from "react"
import styled from "styled-components"

const Svg = styled.svg`
  width: 30%;
  margin: 2rem auto;
  fill: #0074b8;
`

const Map = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path d="M0 6l10-4v24L0 30zM12 1l10 6v23l-10-5zM24 7l8-6v24l-8 6z" />
  </Svg>
)

export default Map
