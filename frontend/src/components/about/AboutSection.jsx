
import React  from "react";
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box';
import { Divider, CardMedia, Avatar } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// const faces = [
//     "/avatar1.png",
//     "/avatar2.png",
//     "/avatar3.png",
// ];




const introduction = "We are a group of enthusiastic student developer from McMaster University. Friday is a project we made during StormHacks 2022 to support people with mental disorder."
const inspiration = "Depression is a common illness worldwide, with estimately 280 million of the population affected. One of the ways to deal with any overwhelming emotion is to find a healthy way to express yourself. This makes a journal a helpful tool in managing your mental health. Journaling can help you manage anxiety, reduce stress. When you have a problem and you're stressed, keeping a journal can help you identify what’s causing that stress or anxiety. Once you’ve identified your stressors, you can work on a plan to resolve the problems and reduce your stress."


function AboutSection() {
    // const classes = useStyles();
    return (
    <Card style={{backgroundColor: "#222222"}} sx={{ display: 'flex', justifyContent: 'center'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
        <Divider light />
          <Typography component="div" variant="h3">
            Inspiration
          </Typography>
          <Typography variant="subtitle1" gutterBottom='true' component="div">
            StormHacks 2022 Project
          </Typography>
          <Typography
            gutterBottom='true'
            variant={"h8"}>
                    {inspiration}
            </Typography>

            <Typography component="div" variant="h3">
            About Us
          </Typography>
          <Typography variant="subtitle1" gutterBottom='true' component="div">
            Team EmotionDamage
          </Typography>
          <Typography
            variant={"h8"}>
                    {introduction}
            </Typography>
            {/* <CardContent className={classes.avatars}>
            {faces.map(face => (
                        <Avatar className={classes.avatar} key={face} src={face} />
                        ))}
                    </CardContent>
            <Divider className={classes.divider} light /> */}
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <CardMedia
        component='video'
        sx={{ width: 500 }}
        alt="Video"
        image={"about.mp4"}
        autoPlay
      />
        </Box>
      </Box>
    </Card>

    )
}


export default AboutSection