import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { ProfileDivider } from "./ProfileDivider";

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

const borderColor = "rgba(113 119 144 / 25%)";

const Header = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 58px;
  width: 100%;
  border-bottom: 1px solid ${borderColor};
  padding: 0 30px;
`;

const Controls = styled.div`
  width: 15px;
  height: 15px;
  background: #f96057;
  border-radius: 50%;
  box-shadow: 24px 0 0 0 #f8ce52, 48px 0 0 0 #5fcf65;
`;

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  overflow: hidden;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 240px;
  border-right: 1px solid ${borderColor};
  padding: 26px;
  flex-shrink: 0;
  overflow: hidden;
`;

const Avatar = styled.div`
`;

// const ProfileDivider = styled.div`
//   display: flex;
//   margin: 20px;
//   background: linear-gradient(315deg, #4dff03, #00d0ff);
//   border-radius: 5px;
//   font-size: 20px;
//   width: 100%;
//   justify-content: center;
// `;

export const App: React.FC = () => {

    return (
        <>
            <GlobalStyle/>
            <Card>
                <Header>
                    <Controls/>
                </Header>
                <Wrapper>
                    <LeftSide>
                        <Avatar>
                            <img
                                src={"/avatar.png"}
                                alt={"avatar"}
                                height={150}
                                width={150}
                            />
                        </Avatar>
                        <ProfileDivider headerStr={"Contacts"}/>
                        <ProfileDivider headerStr={"Profile"}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </ProfileDivider>
                        <ProfileDivider headerStr={"Education"}/>
                    </LeftSide>
                </Wrapper>
            </Card>
        </>
    );
};
