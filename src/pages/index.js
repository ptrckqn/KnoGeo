import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Landing from "../components/landing"

const Container = styled.div`
  position: relative;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(/images/hero4.jpg) center left/cover no-repeat;
`

const Skyline = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  width: 30rem;
`

const IndexPage = () => {
  return (
    <Layout title="KnoGeo">
      <Container>
        <Landing />
      </Container>
      <Skyline src="images/skyline.png" />
    </Layout>
  )
}

export default IndexPage
