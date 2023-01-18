import * as React from "react";
import styled from "styled-components";
import { IChildrenProps } from "./Interfaces/IChildrenProps";

const Wrapper = styled.div`
  padding: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;


export const Menu: React.FC<IChildrenProps> = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
};
