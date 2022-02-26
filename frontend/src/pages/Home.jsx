import React from 'react';
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
    let themeDark = createTheme()
    let themeLight = createTheme()
    themeLight = createTheme({
        palette: {
          background: {
            default: "#ffffff"
          }
        },
        typography: {
          h1: {
            fontWeight: 'bold',
            fontSize: '6.6rem',
          },
          h2: {
            fontWeight: 'bold',
            fontSize: '3.3rem',
          },
          h3: {
            fontWeight: 'bold',
            fontSize: '2.5rem',
          },
        },
      });

    themeDark = createTheme({
        palette: {
          background: {
            default: "#222222"
          },
          text: {
            primary: "#ffffff"
          },
        },
        typography: {
            h1: {
              fontWeight: 'bold',
              fontSize: '6.6rem',
            },
            h2: {
              fontWeight: 'bold',
              fontSize: '3.3rem',
            },
            h3: {
              fontWeight: 'bold',
              fontSize: '2.5rem',
            },
        },
        buttonIcon: {
          color: "#ffffff",
      },
    });

    themeDark = responsiveFontSizes(themeDark);
    themeLight = responsiveFontSizes(themeLight);


    const [light, setLight] = React.useState(false);

    return(
        <ThemeProvider theme={light ? themeLight : themeDark}>
        <CssBaseline />
            <ResponsiveNavBar setTheme={() => setLight(!light)}/>
            <IntroContainer>
                <Typography variant="h1">Hello World 🌎</Typography>
                <Typography variant="h3" gutterBottom>Share • Travel • Connect</Typography>
                <Fab variant="extended" sx={{ m: 4 }} style={{ fontSize: '1vw' }}>
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
        </ThemeProvider>
    );
};

export default Home;