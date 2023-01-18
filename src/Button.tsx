import * as React from "react";
import { IChildrenProps } from "./Interfaces/IChildrenProps";
import styled from "styled-components";

interface IProps extends IChildrenProps {
    title: string,
}

const Link = styled.a`
  text-decoration: none;
  color: #FFF;
  display: flex;
  align-items: center;
  font-weight: 400;
  margin: 1rem;
  padding: 1rem 3rem;
  border-radius: 10rem;
  transform-style: preserve-3d;
  transition: all 0.6s ease;
  cursor: pointer;
  background: #AAC7ED;

  &:hover {
    background: linear-gradient(56deg, #61dafb 0%, #d6cbf6 46%, #f2056f 100%);
  }
`;

export const Button: React.FC<IProps> = ({ title }) => {
    const [isHovered, setHover] = React.useState(false);
    return (
        <Link
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <span>{title}</span>
        </Link>
    );
};
