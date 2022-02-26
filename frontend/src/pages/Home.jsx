import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Typography, Fab } from '@mui/material';
import CssBaseline from "@mui/material/CssBaseline";
import { Earth3D } from '../components/home/Earth3D';
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Footer from '../components/basic/Footer';
import ResponsiveNavBar from '../components/basic/ResponsiveNavBar';
import { IntroContainer, CanvasContainer } from '../components/home/StyledContainers';


const Home = () => {
    const navigate = useNavigate();

    const getStarted = () => {
      navigate('../login')
    }

    return(
      <>
        <ResponsiveNavBar/>
          <IntroContainer>
              <Typography variant="h1">Hello World 🌎</Typography>
              <Typography variant="h3" gutterBottom>Share • Travel • Connect</Typography>
              <Fab variant="extended"  onClick={getStarted} sx={{ m: 4 }} style={{ fontSize: '1vw' }}>
                  Get Started!
              </Fab>

          </IntroContainer>
          <CanvasContainer className="canvas">
                <Canvas >
                    <Suspense fallback={null}>
                        <Earth3D/>
                    </Suspense>
                </Canvas>
          </CanvasContainer>
        <Footer/>
      </>
    );
};

export default Home;