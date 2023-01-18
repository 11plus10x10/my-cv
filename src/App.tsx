import * as React from "react";
import { IWindowDimensions, useWindowDimension } from "./hooks/useWindowDimension";
import styled, { createGlobalStyle } from "styled-components";
import { Background } from "./Background";
import { Card } from "./Card";

interface IStyledProps {
    dimensions: IWindowDimensions,
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto Flex, sans-serif;
    font-weight: 500;
  }

  html {
    font-size: 62.5%;
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-size: 1.6rem;
    width: 100%;
    height: 100%;
  }

  &::-webkit-scrollbar {
    width: 0.6rem;
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(1 2 3 / 40%);
    border-radius: 1rem;
  }

  p {
    color: #f9fafb;
  }
`;

const Wrapper = styled.div<IStyledProps>`
  position: relative;
  width: ${props => props.dimensions.width}px;
  height: ${props => props.dimensions.height}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const App: React.FC = () => {
    const dimensions = useWindowDimension();

    return (
        <Wrapper dimensions={dimensions}>
            <GlobalStyle/>
            <Card/>
            <Background/>
        </Wrapper>
    );
};
