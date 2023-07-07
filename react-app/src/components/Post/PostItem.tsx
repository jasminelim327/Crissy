import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { MouseEventHandler, useContext, useState } from "react";
import LikeButton from "../Animation/LikeButton";
import CommentSection from "../Comment/CommentSection";
import { UserContext } from "../../App";
import {firebase} from "firebase";
import { useNavigate, useParams } from "react-router-dom";
import { AddComment, Padding, ThumbUpAlt, Title, TitleTwoTone, Topic, TopicOutlined, TopicSharp } from "@mui/icons-material";

export interface PostItemProps extends PostItemBase {
  id: string;
  onClick?: MouseEventHandler;
  createdAt: Date;
}

export interface PostItemBase {
  id: string;
  title: string;
  content: string;
  username: string |null;
  likes: number;
  createdAt: firebase.firestore.Timestamp;
}

function PostItem(props: PostItemProps) {
  const { id } = useParams();
  const { user, displayName } = useContext(UserContext);
  const [showComment, setShowComment] = useState(false);
  const navigate = useNavigate();
  
  const handleClick = () => {
    setShowComment(!showComment);
  };

  const createdAtTimestamp = props.createdAt;
  const createdAtDate = createdAtTimestamp.toDate();
  const dateset = createdAtDate.toLocaleDateString(); 
  const formattedTime = createdAtDate.toLocaleTimeString();
  const formattedDate = dateset + " "+formattedTime;

  const handleCardClick = () => {
    // Navigate to the individual post page
    navigate(`/post/${props.id}`);
    console.log(props.id)
    // comment
    
  };
  
  return (
    <>
      <Card  onClick={handleCardClick}
        sx={{
          maxWidth: '75%',
          alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    marginTop:2, 
          borderRadius:7
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "0px",
            borderBottom: "1px ",
          }}
        >
          <div>
            <Typography variant="body2" color="#66b5ff" >
              @{props.username}
            </Typography>
          </div>

          <Typography variant="body2" color="#66b5ff" >
            {formattedDate}
          </Typography>
        </CardContent>

        <CardContent >
          <Typography
            display="inline-block"
            gutterBottom
            variant="h5"
            component="div"
            color={'#666666'}
          >
            {<TopicSharp />} {props.title}
          </Typography>

          <Typography variant="body2" color="#666666">
            {props.content}
          </Typography>
        </CardContent>
        <CardActions >
          {/* <Button size="small">Share</Button> */}
          {/* comment to display list of comment when clicked */}
          <LikeButton likes={props.likes} postId={id} />
          <Button size="small" startIcon={<AddComment />} onClick={handleClick} sx={{ color: '#66b5ff' }} >
            Comment
          </Button>
        </CardActions>

        {/* { showComment ? <CommentSection /> : null} */}
        {showComment && <CommentSection />}
      </Card>
    </>
  );
}

export default PostItem;
