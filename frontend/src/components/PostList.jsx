// import React, { useState } from 'react';
import React, { Component } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Post from './Post';
import { dividerClasses } from '@mui/material';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

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

    render() {
        return (
            <>
            <Box  sx={ {ml:69 }}>
                <Box sx={{ fontSize: 16, margin: 1 }}>
                    Sort by:
                </Box>
                <Box sx={{ maxWidth: 240, margin: 1 }}>
                    <FormControl fullWidth>
                        <InputLabel>
                            <Typography sx={{color:"white"}}>Type</Typography>
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

            {/* <Box sx={{ width: 0.5, mx: 70}}>
                {this.state.postarr.map(post => {
                    return <Post post={post} />
                })}

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Item>xs=6</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>xs=6</Item>
                    </Grid>
                </Grid>

            </Box> */}
            <Box sx={{ width: 0.5, mx: 70}}>
                <Grid container spacing={2}>
                    {this.state.postarr.map(post => {
                        return (
                            <>
                                <Grid item xs={6}>
                                    <Item><Post post={post} /></Item>
                                </Grid>
                            </>
                        );
                    })}
                    
                </Grid>

            </Box>
        </>
        )
    }
}

export default PostList;