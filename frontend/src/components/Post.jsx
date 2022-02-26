import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';



class Post extends Component {


    state = {
        username: '',
        description: '',
        type: '',
        image: '',
        label: [],
        likes: 0,
        pressed: false
      };
    
    userProfile = "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"

      componentDidMount() {
          console.log(this.props)
        const postId = this.props.post.id;
        fetch('http://localhost:5000/post/' + postId)
          .then(res => {
            res.json().then(resData => {
                console.log(resData)
                this.setState({
                    username: resData.username,
                    description: resData.description,
                    image: 'http://localhost:5000' + resData.imagePath,
                    type: resData.type,
                    label: resData.label,
                    likes: resData.likes
                });
                console.log(this.state)
            })
          })
      }
    

      likesOnClick = () => {
        if (!this.state.pressed) {
            this.setState({
                likes : this.state.likes + 1,
                pressed : !this.state.pressed
            })
        } else {
            this.setState({
                likes : this.state.likes - 1,
                pressed : !this.state.pressed
            })
        }
    }

      render() {
        return (
        <>
            <Card sx={{ marginTop: 5}}>
                <CardHeader
                    avatar={
                        <Avatar
                            src={this.userProfile}
                            sx={{ width: 56, height: 56 }}
                        />
                    }
                title={this.state.username}
                subheader="September 14, 2016"
                sx = {{
                    color: "black"
                }}
            />
                <CardMedia
                    component="img"
                    image={this.state.image}
                />
                <CardContent>
                    <Typography variant="body3" color="black">
                        {this.state.description}
                    </Typography>
                    <Typography sx={{marginTop: 1}} variant="body2" color="text.secondary">
                        {"Labels: " + this.state.label.join(", ")}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing sx={{color:"black"}}>
                    <IconButton
                        aria-label="add to favorites"
                        onClick={this.likesOnClick}
                    >
                        {(!this.state.pressed) ? <FavoriteIcon /> : <FavoriteIcon sx={{color: 'red'}}/>}
                    </IconButton>
                    {this.state.likes}
                </CardActions>
            </Card>
        </>
        );
      }
}

// const Post = ({user}) => {
//     const userProfile = "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"

//     const user = {
//         "image-url":"https://cdn.britannica.com/26/95926-050-0228E1A6/London-Eye-River-Thames.jpg",
//         "userName":"Amy",
//         "description":"London Eye is one of most popular tourist attractions in London!",
//         "label":["lake","sky wheel"],
//         "type":"Landmark",
//         "likes":2
//     };



//     const [likes, setLikes] = useState(user.likes)

//     const [pressed, setPressed] = useState(false)

//     const likesOnClick = () => {
//         if (!pressed) {
//             setLikes(likes + 1)
//             setPressed(!pressed)
//         } else {
//             setLikes(likes - 1)
//             setPressed(!pressed)
//         }
//     }
    

//     return (
//         <>

//     );
// };

export default Post;