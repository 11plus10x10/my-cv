import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const Grid = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background: rgb(0,217,232);
  background: linear-gradient(145deg, rgba(0,217,232,1) 0%, rgba(233,20,185,1) 100%);
`;

export const App: React.FC = () => {

    console.log("tst");
    return (
        <>
            <GlobalStyle/>
            <Grid/>
        </>
    );
};
