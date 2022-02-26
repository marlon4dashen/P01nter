
import React  from "react";
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box';
import { Divider, CardMedia} from "@mui/material";


const introduction = "We are a group of enthusiastic student developers from McMaster University. HANDBOOK is a project we made during VTHACKS IX 2022 to help people explore the world."
const inspiration = "Due to the Covid-19 pandemic, people around the world suffer from travel restrictions. By desgining a travel webiste with vivid images and destination information, we hope to eourage those who are in depression and would like to be on a trip in the future. "


function AboutSection() {
    return (
    <Card style={{backgroundColor: "#222222"}} sx={{ display: 'flex', justifyContent: 'center'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardMedia
      component="img"
      sx={{display:'flex',justifyContent:'center'}}
      image="pointer.jpg"
      alt="pointer cover"
      />
        <CardContent sx={{ ml:15,mr:15 }}>
        <Divider light />
          <Typography component="div" variant="h3">
          Inspiration
          </Typography>
          <Typography variant="subtitle1" gutterBottom='true' component="div">
          VTHACKS IX 2022 Project
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
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <CardMedia
        component='video'
        sx={{ml:15, height:250, width: 320 }}
        alt="Video"
        image={"about.mp4"}
        autoPlay
      />
      <CardMedia
      component="img"
      sx={{ml:5, height:200,width: 320 }}
      image="travel.jpg"
      alt="Image"
      />
      <CardMedia
      component="img"
      sx={{ml:5, width: 320 }}
      image="travel2.jpg"
      alt="Image"
      />
        </Box>
        <Box display='flex' justifyContent='center'>
        <Typography variant="subtitle1" gutterBottom='true' component="div">
        Created with ❤️ during VTHacks 2022
          </Typography>
        </Box>
      </Box>
    </Card>

    )
}


export default AboutSection