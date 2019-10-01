import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import PersonCard from "../components/personCard"

const Container = styled.section`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(/images/hero3.jpg) center left/cover no-repeat;
  padding: 3rem;
`

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 3rem;
  grid-template-rows: max-content;
  height: 100%;
  align-content: center;
`

const Team = () => (
  <Layout title="KnoGeo - Team">
    <Container>
      <Cards>
        <PersonCard
          name="Chingiz Bakhishov"
          title="Software Developer"
          image="/images/chingiz.jpg"
        >
          Chingiz is an engineering graduate who combines geomatics and software
          expertise to power the core Hylyte platform. He previously co-founded
          a specialty delivery & logistics services company for connecting users
          with real-time local goods
        </PersonCard>
        <PersonCard name="Jesse Brown" title="CEO" image="/images/jesse.jpg">
          An honour’s finance graduate, Jesse’s grew up in a 4th generation real
          estate family and his work experience includes founding and growing
          two startups in the mobile and fintec spaces, as well as time spent in
          corporate finance for one of Western Canada’s largest private real
          estate companies and a global medical device distributor.
        </PersonCard>
        <PersonCard
          name="Jordan Selanders"
          title="Software Developer"
          image="/images/jordan.jpg"
        >
          Jordan has been programming since he was 10 years old, and brings a
          background across game development, 3D animation, and web
          applications. He has been a beta tester for Google Maps and has worked
          on many projects related to GIS and cityscapes
        </PersonCard>
      </Cards>
    </Container>
  </Layout>
)

export default Team
