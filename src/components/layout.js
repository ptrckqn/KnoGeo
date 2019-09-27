import React from "react"
import { createGlobalStyle } from "styled-components"

import SEO from "./seo"
import Navbar from "./navbar"
/*
Colour Pallette

Main: #285AA0
Accent: #ECA400
Background: #202020
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
        background-color: #202020;
        font-size: 1.6rem;
        box-sizing: border-box;
    }
`

const Layout = ({ title, children }) => (
  <>
    <GlobalStyle />
    <SEO title={title} />
    <Navbar />
    {children}
  </>
)

export default Layout
