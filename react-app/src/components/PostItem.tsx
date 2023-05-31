import {
  Avatar,
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
  username: string;
  likes: number;
  createdAt: Date;
}

function PostItem(props: PostItemProps) {
  const [showComment, setShowComment] = useState(false);
  const handleClick = () => {
    setShowComment(!showComment);
    // console.log(showComment);
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
            borderBottom: "1px "
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
