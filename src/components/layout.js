import React from "react"
import { createGlobalStyle } from "styled-components"

import SEO from "./seo"
/*
Colour Pallette

Main: #0074b8
Accent: #ECA400
Background: #0D0A0B
Alt Background: #131418
Text: #efefef
*/

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before{
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html{
        font-size: 62.5%;

        @media (max-width: 37.5em){
            font-size: 75%;
        }

        @media (max-width: 56.25em){
            font-size: 56.25%;
        }

        @media (max-width: 75em){
            font-size: 50%;
        }
    }

    body{
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        line-height: 1.7;
        color: #efefef;
        background-color: #0D0A0B;
        font-size: 1.6rem;
        box-sizing: border-box;
    }
`

const Layout = ({ title, children }) => (
  <>
    <GlobalStyle />
    <SEO title={title} />
    {children}
  </>
)

export default Layout
