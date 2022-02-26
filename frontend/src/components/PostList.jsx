// import React, { useState } from 'react';
import React, { Component } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { maxWidth } from '@mui/system';
import users from '../helpers/local-storage.json';
import Post from './Post';
import { dividerClasses } from '@mui/material';


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
            <Box>
                <Box sx={{ fontSize: 16, margin: 1 }}>
                    Sort by:
                </Box>
                <Box sx={{ maxWidth: 240, margin: 1 }}>
                    <FormControl fullWidth>
                        <InputLabel>Type</InputLabel>
                        <Select
                            value={this.type}
                            label="Type"
                            onChange={this.typeSelection}
                        >
                        <MenuItem value={"Food"}>Food</MenuItem>
                        <MenuItem value={"Views"}>Views</MenuItem>
                        <MenuItem value={"People"}>People</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>

            <Box>
                {this.state.postarr.map(post => {
                    return <Post post={post} />
                })}

            </Box>
        </>
        )
    }
}

export default PostList;