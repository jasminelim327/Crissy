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

export interface PostItemProps extends PostItemBase {
  id: string;
  onClick?: MouseEventHandler;
  createdAt: Date;
}

export interface PostItemBase {
  id: string;
  title: string;
  content: string;
  username: string;
  likes: number;
  createdAt: firebase.firestore.Timestamp;
}

function PostItem(props: PostItemProps) {
  const { id } = useParams();
  const { user, setUser } = useContext(UserContext);
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
  };
  
  return (
    <>
      <Card  onClick={handleCardClick}
        sx={{
          maxWidth: 1800,
          alignItems: "center",
          justifyContent: "space-between",
          margin: 2,
          borderRadius:6
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
            <Typography variant="body2" color="text.secondary">
              {props.username}
            </Typography>
          </div>

          <Typography variant="body2" color="text.secondary">
            {formattedDate}
          </Typography>
        </CardContent>

        <CardContent>
          <Typography
            display="inline-block"
            gutterBottom
            variant="h5"
            component="div"
          >
            #{props.title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {props.content}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Share</Button> */}

          {/* comment to display list of comment when clicked */}
          <LikeButton likes={props.likes} />
          <Button size="small" onClick={handleClick}>
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
