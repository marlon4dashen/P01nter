import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SendIcon from '@mui/icons-material/Send';
import SimpleDialog from './SimpleDialog';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const CreatePost = (props) => {
    const userProfile = "https://images.unsplash.com/photo-1522228115018-d838bcce5c3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"

    // const navigate = useNavigate();
    // const [user, loading, error] = useAuthState(auth);
    // const [name, setName] = useState("");

    const [type, setType] = useState('')

    const [text, setText] = useState('')

    const [open, setOpen] = useState(false);

    const [uploadedFiles, setFiles] = useState([]);

    const [isUploaded, setUploaded] = useState(false);


    const uploadPhoto = () => {
        handleClickOpen();
    }

    const typeSelection = (event) => {
        setType(event.target.value);
    };

    const textOnChange = (e) => {
        setText(e.target.value)
    }

    const handleClickOpen = () => {
        setOpen(true);
      };

    const handleClose = () => {
        setOpen(false);
        setUploaded(false);
    };


    const submit = () => {
        const formData = new FormData()
        formData.append('username', "Marlon")
        formData.append('description', text)
        formData.append('type', type)
        formData.append('image', uploadedFiles[0])
        let url = "http://localhost:5001/post"
        let method = "POST"

        fetch(url, {
            method: method,
            body: formData
        }).then(resp => {
            if (resp.status === 200 ) {
                console.log("Success")

                setFiles([])
                setText('')
                setType('')
                props.callback()
            }else{
                throw new Error("Failed to upload")
            }
        })
    }

    return (
        <>
            <Card sx={{ width:0.5, ml:69, mt:5}} style={{backgroundColor: "#333333"}}>
                <CardHeader
                    avatar={
                        <Avatar
                            src={userProfile}
                            sx={{ width: 56, height: 56 }}
                        />
                    }
                title={<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel>
                                <Typography sx={{color: "white"}}>Type</Typography>
                            </InputLabel>
                            <Select
                                value={type}
                                onChange={typeSelection}
                            >
                            <MenuItem sx={{color: "black"}} value={"Food"}>Food</MenuItem>
                            <MenuItem sx={{color: "black"}} value={"People"}>People</MenuItem>
                            <MenuItem sx={{color: "black"}} value={"Views"}>Views</MenuItem>
                            </Select>
                        </FormControl>
                    }
            />
                <CardContent>
                    <TextField
                        label={<Typography sx={{color: "white"}}>Start a post</Typography>}
                        multiline
                        fullWidth
                        maxRows={4}
                        value={text}
                        onChange={textOnChange}
                        />
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton onClick={uploadPhoto}>
                        <InsertPhotoIcon sx={{color:"white"}} />
                    </IconButton>
                    <IconButton sx={{width: 0.87}} />
                    <IconButton onClick={submit}>
                        <SendIcon sx={{color:"white"}} />
                    </IconButton>
                </CardActions>
            </Card>
            <SimpleDialog
                open={open}
                onClose={handleClose}
                setFiles={setFiles}
                uploadedFiles={uploadedFiles}
                isUploaded={isUploaded}
                setUploaded={setUploaded}
            />
        </>
    );
}

export default CreatePost;