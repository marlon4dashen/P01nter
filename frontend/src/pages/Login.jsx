import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Fab } from '@mui/material';
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Footer from '../components/basic/Footer';
import ResponsiveNavBar from '../components/basic/ResponsiveNavBar';
import { IntroContainer, CanvasContainer } from '../components/home/StyledContainers';
import LoginCard from '../components/auth/LoginCard';

const Login = () => {
    return <>
        <ResponsiveNavBar/>
        <LoginCard/>
    </>;
};

export default Login;