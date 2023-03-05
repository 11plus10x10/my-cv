import * as React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const Wrapper = styled.div`
  display: flex;
  justify-content: end;
  padding: 1rem;
  position: relative;
  width: 100%;
  height: 8rem;
  overflow: hidden;
`;

export const Menu: React.FC = () => {

    return (
        <Wrapper>
            <Button title={"Intro"}/>
            <Button title={"About me"}/>
            <Button title={"My portfolio"}/>
            <Button title={"Contact me"}/>
        </Wrapper>
    );
};
