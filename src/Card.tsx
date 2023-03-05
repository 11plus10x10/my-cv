import * as React from "react";
import styled from "styled-components";
import { IChildrenProps } from "./Interfaces/IChildrenProps";
import { Menu } from "./Menu";
import { Canvas } from "@react-three/fiber";
import { Box, Center, Text3D } from "@react-three/drei";

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

export const Card: React.FC<IChildrenProps> = ({ children }) => {

    return (
        <Wrapper>
            <Menu/>
            <Canvas>
                <Center>
                    {/*<Box args={[1, 1, 1]} rotation={[1,0,0]}/>*/}
                    <Text3D
                        curveSegments={32}
                        bevelEnabled
                        bevelSize={0.04}
                        bevelThickness={0.1}
                        height={0.5}
                        lineHeight={0.5}
                        letterSpacing={-0.06}
                        size={1.5}
                        font="/Inter_Bold.json">
                        {`hello\nworld`}
                        <meshNormalMaterial/>
                    </Text3D>
                </Center>
            </Canvas>
        </Wrapper>
    );
};
