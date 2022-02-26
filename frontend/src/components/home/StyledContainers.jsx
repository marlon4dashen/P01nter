import React from "react";
import styled from "styled-components";

export const IntroContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin:0;
  padding:13%;
  left:10vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
`;

export const CanvasContainer = styled.div`
    width: 100vw;
    height: 89vh;
    position: relative;
    right:25vw;
    z-index: 5;
    background-image: "/frontend/public/layered-waves.png";

    }
`;