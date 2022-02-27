import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Post from './Post'
import { useNavigate } from 'react-router-dom';

function SinglePost(props) {


    const post = props.post

    let navigate = useNavigate()
    const detailPage = () => {
      navigate(`/post/${post.id}`)
    }

    return (
      // <Grid item xs={12} md={6} sx={{
      //   display:"flex",
      //   flexDirection:"column",
      // }}>
        <CardActionArea component="a" href="#">
          <Card sx={{ display: 'flex' }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h2" variant="h5" sx={{
                color:"black"
              }}>
                {post.username}
              </Typography>
              {/* <Typography variant="subtitle1" color="text.secondary">
                {post.date}
              </Typography> */}
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Typography variant="subtitle1" color="primary" onClick={detailPage}>
                Continue reading...
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
              image={"http://localhost:5000/" + post.imagePath}
              alt={post.type}
            />
          </Card>
        </CardActionArea>
      // </Grid>
    );
  
}

export default SinglePost;