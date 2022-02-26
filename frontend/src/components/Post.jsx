import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

const Post = ({user}) => {
    const userProfile = "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"

    // const user = {
    //     "image-url":"https://cdn.britannica.com/26/95926-050-0228E1A6/London-Eye-River-Thames.jpg",
    //     "userName":"Amy",
    //     "description":"London Eye is one of most popular tourist attractions in London!",
    //     "label":["lake","sky wheel"],
    //     "type":"Landmark",
    //     "likes":2
    // };

    const [likes, setLikes] = useState(user.likes)

    const [pressed, setPressed] = useState(false)

    const likesOnClick = () => {
        if (!pressed) {
            setLikes(likes + 1)
            setPressed(!pressed)
        } else {
            setLikes(likes - 1)
            setPressed(!pressed)
        }
    }
    

    return (
        <>
            <Card sx={{ maxWidth: 400, marginTop: 5 }}>
                <CardHeader
                    avatar={
                        <Avatar
                            src={userProfile}
                            sx={{ width: 56, height: 56 }}
                        />
                    }
                title={user.userName}
                subheader="September 14, 2016"
            />
                <CardMedia
                    component="img"
                    image={user['image-url']}
                />
                <CardContent>
                    <Typography variant="body3" color="text.primary">
                        {user.description}
                    </Typography>
                    <Typography sx={{marginTop: 1}} variant="body2" color="text.secondary">
                        {"Labels: " + user.label.join(", ")}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton
                        aria-label="add to favorites"
                        onClick={likesOnClick}
                    >
                        {(!pressed) ? <FavoriteIcon /> : <FavoriteIcon sx={{color: 'red'}}/>}
                    </IconButton>
                    {likes}
                </CardActions>
            </Card>
        </>
    );
};

export default Post;