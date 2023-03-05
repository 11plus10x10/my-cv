import * as React from "react";
import styled from "styled-components";
import { FaInstagram, FaLinkedin, FaTelegram } from "react-icons/all";

const IconGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Icon = styled.button`
  position: relative;
  display: inline-block;
  border: none;
  border-radius: 5px;
  background: none;
  padding: 1px 5px;
  margin: 10px;
  height: 35px;
  width: 35px;

  a {
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, .05);
    box-shadow: 0 15px 35px rgba(0, 0, 0, .2);
    border-top: 1px solid rgba(255, 255, 255, .1);
    border-bottom: 1px solid rgba(255, 255, 255, .1);
    border-radius: 5px;
    z-index: 1;
    text-decoration: none;
    transition: all .3s ease-in-out;
    backdrop-filter: blur(15px);
  }

  a::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 50%;
    transition: all .5s ease-out;
  }

  &::before,
  &::after {
    z-index: -1;
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 5px;
    border-radius: 5px;
    background: #f00;
    transition: all .4s ease-in-out;
    transition-delay: 0s;
  }

  &::before {
    bottom: -5px;
  }

  &::after {
    top: -5px;
  }

  &:hover::before,
  &:hover::after {
    height: 50%;
    width: 80%;
    border-radius: 5px;
    transition-delay: .3s;
  }

  &:hover::before {
    bottom: 0;
  }

  &:hover::after {
    top: 0;
  }

  &::before,
  &::after {
    background: #86dfff;
    box-shadow: 0 0 3px #86dfff,
    0 0 10px #86dfff,
    0 0 20px #86dfff,
    0 0 40px #86dfff
  }
`;

export const SocialMedia: React.FC = () => {
    return (
        <IconGroup>
            <Icon>
                <a href={"#"}>
                    <FaInstagram size={32} color={"white"}/>
                </a>
            </Icon>
            <Icon>
                <a href={"#"}>
                    <FaLinkedin size={32} color={"white"}/>
                </a>
            </Icon>
            <Icon>
                <a href={"#"}>
                    <FaTelegram size={32} color={"white"}/>
                </a>
            </Icon>
        </IconGroup>
    );
};
