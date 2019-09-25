import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Layout from "../components/layout";
import Landing from "../components/landing";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(/images/hero3.jpg) center right/cover no-repeat;
`;

const IndexPage = () => {
  return (
    <Layout title="KnoGeo">
      <Container>
        <Landing />
      </Container>
    </Layout>
  );
};

export default IndexPage;
