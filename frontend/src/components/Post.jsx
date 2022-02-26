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

const Post = () => {
    const userProfile = "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"

    const user = {
        "image-url":"https://cdn.britannica.com/26/95926-050-0228E1A6/London-Eye-River-Thames.jpg",
        "userName":"Amy",
        "description":"London Eye is one of most popular tourist attractions in London!",
        "label":["lake","sky wheel"],
        "type":"Landmark",
        "likes":2
    };

    return (
        <>
            <Card sx={{ maxWidth: 400 }}>
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
                    <Typography variant="body2" color="text.secondary">
                        {user.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </>
    );
};

export default Post;