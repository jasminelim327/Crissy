import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
} from "@mui/material";
import LikeButton from "./LikeButton";

export interface CommentProps {
  postId: string;
  id: string;
  username: string;
  comment: string;
  avatar: string;
  likes: number;
}

function Comment(props: CommentProps) {
  const id = props.id;
  const username = props.username;
  const comment = props.comment;
  const postId = props.postId;
  const avatar = props.avatar;
  const likes = props.likes;

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="" src={avatar} />
        </ListItemAvatar>

        <ListItemText
          primary={username}
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
