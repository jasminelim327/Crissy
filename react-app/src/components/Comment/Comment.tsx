import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
} from "@mui/material";
import LikeButton from "../Animation/LikeButton";
import { UserContext } from "../../App";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import CommentLikeButton from "./CommentLike";
import {firebase} from "firebase";


export interface CommentProps {
  commentId: string;
  comment: string;
  likes: number;
  username: string;
  createdAt: firebase.firestore.Timestamp;

}

function Comment(props: CommentProps) {
  const { id } = useParams();
  const { user, displayName } = useContext(UserContext);
  const { commentId, comment, likes, username, createdAt } = props;

  // const createdAtTimestamp = props.createdAt;
  // const createdAtDate = createdAtTimestamp.toDate();
  // const dateset = createdAtDate.toLocaleDateString(); 
  // const formattedTime = createdAtDate.toLocaleTimeString();
  // const formattedDate = dateset + " "+formattedTime;

  console.log("comment:",  commentId); // Log the postId value
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#99ddff" }}>
          {username.charAt(0)}
          </Avatar>
        </ListItemAvatar>

        <ListItemText
         primaryTypographyProps={{
          sx: {
            fontSize: "14px",
            color: "#66b5ff",
          },
        }}primary={`@${username}`}


          secondary={
            <>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="#666666"
              >{comment}
              </Typography>
              <br />
              <CommentLikeButton likes={likes} commentid={commentId}/>
            </>
          }
        />
      </ListItem>
    </>
  );
}
export default Comment;
