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

export interface CommentProps {
  id: string;
  comment: string;
  likes: number;
}

function Comment(props: CommentProps) {
  const { user } = useContext(UserContext)
  const comment = props.comment;
  const likes = props.likes;

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar  />
        </ListItemAvatar>

        <ListItemText
          primary={user}
          secondary={
            <>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >{comment}
              </Typography>
              <br />
              <LikeButton likes={likes} />
            </>
          }
        />
      </ListItem>
    </>
  );
}
export default Comment;
