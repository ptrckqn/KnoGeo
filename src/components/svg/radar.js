import React from "react"
import styled from "styled-components"

const Svg = styled.svg`
  width: 50%;
  margin: 2rem auto;
  fill: #0074b8;
`

const Radar = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path d="M12 10a2 2 0 0 1-3.41 1.41A2 2 0 0 1 9.999 8V0h.03c5.506 0 9.97 4.464 9.97 9.97v.032V10h-8zm7.9 1.41C19.185 16.293 15.025 20 10 20 4.477 20 0 15.523 0 10 0 4.975 3.707.815 8.536.106L8.59.099v2.03c-3.768.696-6.584 3.956-6.584 7.874a8 8 0 0 0 15.866 1.466l.008-.049h2.02zm-4.07 0c-.662 2.648-3.02 4.579-5.829 4.579A6 6 0 0 1 8.539 4.168l.041-.009v2.1a3.997 3.997 0 0 0-2.583 3.734 3.98 3.98 0 0 0 1.183 2.836 4 4 0 0 0 6.551-1.392l.009-.027h2.1z" />
  </Svg>
)

export default Radar
