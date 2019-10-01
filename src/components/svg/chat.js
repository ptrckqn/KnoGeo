import React from "react"
import styled from "styled-components"

const Svg = styled.svg`
  width: 30%;
  margin: 2rem auto;
  fill: #0074b8;
`

const Chat = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path d="M17 11v3l-3-3H8a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-1zm-3 2v2a2 2 0 0 1-2 2H6l-3 3v-3H2a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h2v3a4 4 0 0 0 4 4h6z" />
  </Svg>
)

export default Chat
