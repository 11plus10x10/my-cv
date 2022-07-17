import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    outline: none;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    overflow: hidden;
    background: linear-gradient(135deg, rgb(0, 217, 232) 0%, rgb(233, 20, 185) 100%);
    height: 100vh;
    width: 100%;
  }
`;

const Card = styled.div`
  max-width: 1250px;
  max-height: 860px;
  height: 90vh;
  position: absolute;
  width: 100%;
  transform: translate(-50%,-50%);
  top: 50%;
  left: 50%;
  background: rgba(16 18 27 / 40%);
  border-radius: 14px;
  backdrop-filter: blur(20px);
  box-shadow: 20px 20px 40px -6px rgba(0,0,0,0.2)
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 58px;
  width: 100%;
  border-bottom: 1px solid rgba(113 119 144 / 25%);
  padding: 0 30px;
`;

const Controls = styled.div`
  width: 15px;
  height: 15px;
  background: #f96057;
  border-radius: 50%;
  box-shadow: 24px 0 0 0 #f8ce52, 48px 0 0 0 #5fcf65;
`;

export const App: React.FC = () => {

    return (
        <>
            <GlobalStyle/>
            <Card>
                <Header>
                    <Controls/>
                </Header>
            </Card>
        </>
    );
};
