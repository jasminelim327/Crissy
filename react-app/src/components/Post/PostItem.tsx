import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { MouseEventHandler, useState } from "react";
import LikeButton from "../LikeButton";
import CommentSection from "../Comment/CommentSection";

export interface PostItemProps extends PostItemBase {
  id: number;
  onClick?: MouseEventHandler;
  createdAt: Date;
}

export interface PostItemBase {
  title: string;
  content: string;
  username: string;
  likes: number;
}

function PostItem(props: PostItemProps) {
  const [showComment, setShowComment] = useState(false);
  const handleClick = () => {
    setShowComment(!showComment);
  };
  const formattedDate = new Date(props.createdAt).toLocaleString();

  return (
    <>
      <Card
        onClick={props.onClick}
        sx={{
          maxWidth: 1000,
          alignItems: "center",
          justifyContent: "space-between",
          margin: 5,
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
              {/* i dun understand why this is breaKIINg the code but it is */}
              {/* {props.username} */}
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
            {props.title}
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
