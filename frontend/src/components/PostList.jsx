// import React, { useState } from 'react';
import React, { Component } from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import users from '../helpers/local-storage.json';
import Post from './Post';
import { dividerClasses } from '@mui/material';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import CreatePost from './CreatePost'
import SinglePost from './SinglePost'

class PostList extends Component {
    state = {
        type: '',
        postarr: [],
        inputLabel: ''
    }

    componentDidMount() {
        fetch('http://localhost:5001/posts')
        .then(res => {
            res.json().then(resData => {
                this.setState({
                    postarr: resData
                });
            })

        })
    }

    typeSelection = (event) => {
        this.setState({
            type: event.target.value
        })
    };

    chunkArray = (arr) => {
        var chunkLength = Math.max(arr.length/2 ,1);
        var chunks = [];
        for (var i = 0; i < 2; i++) {
            if(chunkLength*(i+1)<=arr.length)chunks.push(arr.slice(chunkLength*i, chunkLength*(i+1)));
        }
        console.log("arr: "+arr);
        console.log("chunks"+chunks[0]);
        return chunks;
    };

    handleCreatePost = () => {
        window.location.reload(false);
    }

    handleTFChange = (e) => {
        this.setState({
            inputLabel: e.target.value
        })
    }

    render() {
        return (
            <>
            <Box justifyContent="center" component="span" mt={5}
                sx={{ display: 'inline-block', mx: '5px', width:'100vw' }}>
            <CreatePost callback={this.handleCreatePost}></CreatePost>
            <Box >
                <Box sx={{ maxWidth: 240, margin: 1 }}>
                    <Typography sx={{color: "white"}}>Search by labels:  </Typography>
                    <Box  sx={{
                            display:"flex",
                            flexDirection: "row"
                        }}>
                            <TextField onChange={this.handleTFChange} id="searchLabels" label="Enter a label" variant="filled" />
                            <IconButton onClick={this.search}>
                                <SearchIcon sx={{color:"white"}} />
                            </IconButton>
                        </Box>
                </Box>
            </Box>


            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                {this.state.inputLabel === "" ? this.state.postarr.slice(0).reverse().map(post => (<Grid item xs={4}> <SinglePost post={post} /> </Grid>)) :
                    this.state.postarr.slice(0).reverse().filter(post => post.label.includes(this.state.inputLabel)).map(post => (
                        <Grid item xs={4}> <SinglePost post={post} /> </Grid>))}
                </Grid>
                </Box>
        </>
        )
    }
}

export default PostList;