import React, { Component } from 'react';
import {
    useParams
  } from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';


export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
}


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
          
        const postid = this.props.match.params.id;
        fetch('http://localhost:5000/post/' + postid)
          .then(res => {
            res.json().then(resData => {
                console.log(resData)
                this.setState({
                    username: resData.username,
                    description: resData.description,
                    image: 'http://localhost:5000/' + resData.imagePath,
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
            <Card sx={{ marginTop: 5}} style={{backgroundColor: "#333333"}}>
                <CardHeader
                    avatar={
                        <Avatar
                            src={this.userProfile}
                            sx={{ width: 56, height: 56 }}
                        />
                    }
                title={<Typography sx={{color:"white"}}>{this.state.username}</Typography>}
                subheader={<Typography sx={{color:"#ADACAC", fontSize: 12}}>September 14, 2016</Typography>}
                sx = {{
                    color: "black"
                }}
            />
                <CardMedia
                    component="img"
                    image={this.state.image}
                />
                <CardContent>
                    <Typography variant="body3" color="white">
                        {this.state.description}
                    </Typography>
                    <Typography sx={{marginTop: 1}} variant="body2" color="#ADACAC">
                        {"Labels: " + this.state.label.join(", ")}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing sx={{color:"white"}}>
                    <IconButton
                        aria-label="add to favorites"
                        onClick={this.likesOnClick}
                    >
                        {(!this.state.pressed) ? <FavoriteIcon sx={{color: "#8B8989"}} /> : <FavoriteIcon sx={{color: '#BF6666'}}/>}
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

export default withRouter(Post);