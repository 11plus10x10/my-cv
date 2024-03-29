import * as React from "react";
import styled, { css } from "styled-components";

const Header = styled.div<IProps>(
    (props) => css`
      font-weight: 400;
      display: flex;
      color: #f9fafb;
      margin: 20px;
      border-radius: 5px;
      font-size: 20px;
      width: 100%;
      justify-content: center;
      ${props.headerStr === "Contacts" &&
      css`background: url("https://www.transparenttextures.com/patterns/back-pattern.png"), linear-gradient(33deg, #8debff, #6cacff)`
      }
      ${props.headerStr === "Profile" &&
      css`background: url("https://www.transparenttextures.com/patterns/black-thread-light.png"), linear-gradient(33deg, #f8c390, #d279ee)`}
      ${props.headerStr === "Education" &&
      css`background: url("https://www.transparenttextures.com/patterns/escheresque.png"), linear-gradient(33deg, #a16bfe, #bc3d2f)`}
    `
);

interface IProps {
    headerStr: string,
    children?: React.ReactNode,
}

export const ProfileDivider: React.FC<IProps> = ({ headerStr, children }) => {
    return (
        <>
            <Header headerStr={headerStr}>
                {headerStr}
            </Header>
            {children}
        </>
    );
};
