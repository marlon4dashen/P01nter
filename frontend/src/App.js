import React, { useState, ReactElement } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Error from './pages/Error';
import Dashboard from './pages/Dashboard';
import Post from './components/Post';
import PostList from './components/PostList';
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import CreatePost from './components/CreatePost';

const App = () => {
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
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/post/:id" element={<Post/>}/>
            <Route path="/postlist" element={<PostList />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/login" element={<Login/>} />
            <Route path='/feedback' component={() => {
              window.location.href = 'https://google.com';
              return null;
            }}/>
            <Route path="/*" element={<Error/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};


export default App;
