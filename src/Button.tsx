import * as React from "react";
import { IChildrenProps } from "./Interfaces/IChildrenProps";
import styled from "styled-components";

interface IProps extends IChildrenProps {
    title: string,
}

const StyledLink = styled.div`
  --b: 0.1em; /* the thickness of the line */
  --c: #1095c1; /* the color */
  
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 3rem;
  color: #0000;
  padding-block: 0.1em;
  background: linear-gradient(black 50%, #57595D 0) 0% calc(100% - var(--_p,0%))/100% 200%,
  linear-gradient(black 0 0) 0% var(--_p,0%)/var(--_p,0%) 0.1em no-repeat;
  -webkit-background-clip: text, padding-box;
  background-clip: text, padding-box;
  transition: .3s var(--_s, 0s) linear, background-size .3s calc(.3s - var(--_s, 0s));

  &:hover {
    --_p: 100%;
    --_s: .3s;
  }
`;

export const Button: React.FC<IProps> = ({ title }) => {
    return (
        <StyledLink>{title}</StyledLink>
    );
};
