import * as React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Meshes } from "./Meshes";

const Wrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -666;
`;

export const Background: React.FC = () => {
    return (
        <Wrapper>
            <Canvas>
                <Meshes/>
            </Canvas>
        </Wrapper>
    );
};
