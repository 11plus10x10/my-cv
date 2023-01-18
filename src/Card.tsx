import * as React from "react";
import styled from "styled-components";
import { Menu } from "./Menu";
import { Button } from "./Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 90rem;
  height: 43rem;
  border: 1.5px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.06);
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  box-shadow: 0 25px 23px rgba(0, 0, 0, 0.15);
  z-index: 1;
`;

export const Card: React.FC = () => {
    return (
        <Wrapper id={"card"}>
            <Menu>
                <Button title={"Intro"}/>
                <Button title={"Education"}/>
                <Button title={"Experience"}/>
            </Menu>
        </Wrapper>
    );
};
