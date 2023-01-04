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
      navigate(`/post/${post._id}`)
    }
    console.log(post.image.data)

    return (
      <Card sx={{ maxWidth: 600}} style={{backgroundColor: "#292929"}}>
      <CardActionArea onClick={detailPage} >
        <CardMedia
          component="img"
          height="230"
          image={"http://localhost:5001/" + post.imagePath}
              alt={post.type}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {post.username}
          </Typography>
          <Typography variant="body2">
          {"#" + post.label.join(" #")}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
    );

}

export default SinglePost;