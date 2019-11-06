import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import SEO from "./seo"
import Navbar from "./navbar"
import ScrollToTop from "./scrollToTop"
/*
Colour Pallette

Main: #0074b8
Accent: #ECA400
Background: #202020
Alt Background: #191919
Footer Background: #131418
Text: #efefef
Alt Text: #8f8f8f
*/

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before{
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html{
        font-size: 62.5%;

        @media (max-width: 75em){
            font-size: 50%;
        }

        @media (max-width: 56.25em){
            font-size: 56.25%;
        }

        @media (max-width: 41em){
            font-size: 75%;
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

const Container = styled.div`
  position: relative;
`

const Layout = ({ title, children }) => (
  <Container>
    <GlobalStyle />
    <SEO title={title} />
    <Navbar />
    <ScrollToTop />
    {children}
  </Container>
)

export default Layout
