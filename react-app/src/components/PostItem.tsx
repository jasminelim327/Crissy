import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import axios from "axios";
import { MouseEventHandler, useEffect, useState } from "react";
import LikeButton from "./LikeButton";
import CommentSection from "./CommentSection";

export interface PostItemProps {
  id: number;
  title: string;
  content: string;
  onClick?: MouseEventHandler;
}

function PostItem(props: PostItemProps) {
  const [showComment, setShowComment] = useState(false);

  const handleClick = () => {
    setShowComment(!showComment);
    // console.log(showComment);
  };

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
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>

          {/* comment to display list of comment when clicked */}
          <Button size="small" onClick={handleClick}>
            Comment
          </Button>
          <LikeButton />
        </CardActions>

        {/* { showComment ? <CommentSection /> : null} */}
        {showComment && <CommentSection />}
      </Card>
    </>
  );
}

export default PostItem;
