// import React, { useState } from 'react';
import React, { Component } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import users from '../helpers/local-storage.json';
import Post from './Post';
import { dividerClasses } from '@mui/material';
import { Typography } from '@mui/material';
import CreatePost from './CreatePost'
import SinglePost from './SinglePost'

class PostList extends Component {
    state = {
        type: '',
        postarr: []
    }

    componentDidMount() {
        fetch('http://localhost:5000/posts')
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


    handleCreatePost = () => {
        fetch('http://localhost:5000/posts')
        .then(res => {
            res.json().then(resData => {
                console.log(resData)
                this.setState({
                    postarr: resData
                });
            })

        })
    }

    render() {
        return (
            <>
            <CreatePost callback={this.handleCreatePost}></CreatePost>
            <Box  sx={ {ml:69 }}>
                <Box sx={{ fontSize: 16, margin: 1 }}>
                    Sort by:
                </Box>
                <Box sx={{ maxWidth: 240, margin: 1 }}>
                    <FormControl fullWidth>
                        <InputLabel>
                            <Typography sx={{color: "white"}}>Type</Typography>
                        </InputLabel>
                        <Select
                            value={this.type}
                            label="Type"
                            onChange={this.typeSelection}
                        >
                        <MenuItem sx={{color:"black"}} value={"Food"}>Food</MenuItem>
                        <MenuItem sx={{color:"black"}} value={"Views"}>Views</MenuItem>
                        <MenuItem sx={{color:"black"}} value={"People"}>People</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>

            <Box sx={{ width: 0.5, mx: 70}}>
                {this.state.postarr.map(post => {
                    return <SinglePost post={post} />
                })}

            </Box>
        </>
        )
    }
}

export default PostList;