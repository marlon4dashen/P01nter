import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth, db, logout } from "../helpers/Firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
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


const CreatePost = () => {
    const userProfile = "https://images.unsplash.com/photo-1522228115018-d838bcce5c3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"

    // const navigate = useNavigate();
    // const [user, loading, error] = useAuthState(auth);
    // const [name, setName] = useState("");

    const [type, setType] = useState('')

    const [text, setText] = useState('')

    const [open, setOpen] = useState(false);

    const [uploadedFiles, setFiles] = useState([]);

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
    };

    const submit = () => {
        const formData = new FormData()
        formData.append('username', "Marlon")
        formData.append('description', text)
        formData.append('type', type)
        formData.append('image', uploadedFiles[0])
        let url = "http://localhost:5000/post"
        let method = "POST"

        fetch(url, {
            method: method,
            body: formData
        }).then(resp => {
            if (resp.status === 200 ) {
                console.log("Success")
                
            }else{
                throw new Error("Failed to upload")
            }
        })
    }
    // const fetchUserName = async () => {
    //     try {
    //       const q = query(collection(db, "users"), where("uid", "==", user?.uid));
    //       const doc = await getDocs(q);
    //       const data = doc.docs[0].data();
    //       setName(data.name);
    //     } catch (err) {
    //       console.error(err);
    //     }
    //   };
    //   useEffect(() => {
    //     if (loading) return;
    //     if (!user) return;
    //     fetchUserName();
    //   }, [user, loading]);

    return (
        <>
            <Card sx={{ width:0.5}}>
                <CardHeader
                    avatar={
                        <Avatar
                            src={userProfile}
                            sx={{ width: 56, height: 56 }}
                        />
                    }
                title={<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel>Type</InputLabel>
                            <Select
                                value={type}
                                onChange={typeSelection}
                            >
                            <MenuItem value={"Food"}>Food</MenuItem>
                            <MenuItem value={"People"}>People</MenuItem>
                            <MenuItem value={"Views"}>Views</MenuItem>
                            </Select>
                        </FormControl>
                    }
            />
                <CardContent>
                    <TextField
                        label="Start a post"
                        multiline
                        fullWidth
                        maxRows={4}
                        value={text}
                        onChange={textOnChange}
                        />
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton onClick={uploadPhoto}>
                        <InsertPhotoIcon />
                    </IconButton>
                    <IconButton sx={{ml: 105}} onClick={submit}>
                        <SendIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <SimpleDialog
                open={open}
                onClose={handleClose}
                setFiles={setFiles}
                uploadedFiles={uploadedFiles}
            />
        </>
    );
}

export default CreatePost;