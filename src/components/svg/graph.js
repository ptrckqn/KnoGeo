import React from "react"
import styled from "styled-components"

const Svg = styled.svg`
  width: 50%;
  margin: 2rem auto;
  fill: #0074b8;
`

const Graph = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path d="M4.13 12H4a2 2 0 1 0 1.795 1.099l.005.011L7.86 10a2.064 2.064 0 0 0 .664-.073l-.014.003 1.55 1.55a2 2 0 1 0 3.714-.381l.005.011L15.869 8h.13a2 2 0 1 0-1.795-1.099l-.005-.011-2.06 3.11a2.064 2.064 0 0 0-.664.073l.014-.003-1.56-1.55a2 2 0 1 0-3.714.381L6.21 8.89 4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z" />
  </Svg>
)

export default Graph
