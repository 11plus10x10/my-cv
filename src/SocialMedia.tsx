import * as React from "react";
import styled from "styled-components";
import { FaInstagram, FaLinkedin, FaTelegram } from "react-icons/all";

const IconGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Icon = styled.a`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 5px;
  height: 37px;
  width: 37px;
  background: rgba(255, 255, 255, .05);
  box-shadow: 0 15px 35px rgba(0, 0, 0, .2);
  border-top: 1px solid rgba(255, 255, 255, .1);
  border-bottom: 1px solid rgba(255, 255, 255, .1);
  color: #fff;
  z-index: 1;
  transition: all .3s ease-in-out;
  backdrop-filter: blur(15px);
  
  &:after, &:before {
    position: absolute;
    content: "";
    height: 4px;
    width: 10px;
    z-index: -1;
  }
  
  &:after {
    bottom: -4px;
    background: #ffcd00;
    box-shadow: 0 0 1px #ffcd00;
    box-shadow: 0 0 2px #ffcd00;
    box-shadow: 0 0 4px #ffcd00;
    box-shadow: 0 0 8px #ffcd00;
  }
  
  &:before {
    top: -4px;
    background: #f100dc;
    box-shadow: 0 0 1px #f100dc;
    box-shadow: 0 0 2px #f100dc;
    box-shadow: 0 0 4px #f100dc;
    box-shadow: 0 0 8px #f100dc;
  }
  
  &:hover:before,
  &:hover:after {
    height: 50%;
    width: 80%;
    transition-delay: .3s;
  }
  
  &:hover:before {
    top: 0;
  }
`;

export const SocialMedia: React.FC = () => {
    return (
        <IconGroup>
            <Icon href={"#"}>
                <FaInstagram size={32} color={"white"}/>
            </Icon>
            <Icon href={"#"}>
                <FaLinkedin size={32}/>
            </Icon>
            <Icon href={"#"}>
                <FaTelegram size={32}/>
            </Icon>
        </IconGroup>
    );
};
