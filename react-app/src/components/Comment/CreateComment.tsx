import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  TextField,
  ListItemIcon,
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../App";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../../backend/firebase";
import { CommentProps } from "./Comment";


interface CreateCommentProps {
    onSubmit: (newComment: CommentProps) => void;

  }

function CreateComment({onSubmit}: CreateCommentProps) {
  const [comment, setComment] = React.useState("");
  const { user } = useContext(UserContext)
  const { id } = useParams();


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(user)

    

    const newComment = {
      username: user,
      likes: 0,
      createdAt: Timestamp.fromDate(new Date()),
      id: "", 
      comment
    };

    try {
    // Save the new post to Firebase Firestore
    // const docRef = await addDoc(collection(db, `post/${id}/comment`), newComment);

    // // Retrieve the newly generated post ID
    // const commentId = docRef.id;

    // // Update the newComment object with the generated ID
    // newComment.id = commentId;

    // Call the onCreate callback with the new comment
    onSubmit(newComment);
    setComment("");
    console.log(newComment);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar />
      </ListItemAvatar>
      <ListItemText

        primary={user}
        secondary={
          <>
            <TextField
              id="standard-textarea"
              label="Comment"
              placeholder="Placeholder"
              multiline
              variant="standard"
              value={comment} 
              onChange={(event) => setComment(event.target.value)}
             
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleSubmit}
            >
              Send
            </Button>
            <br />
            <br />

            
          </>
        }
      />
    </ListItem>
  );
}

export default CreateComment;
