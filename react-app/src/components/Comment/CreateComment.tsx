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
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface CreateCommentProps {
    onSubmit: (comment: string) => void;
  }

function CreateComment({onSubmit}: CreateCommentProps) {
  const [comment, setComment] = React.useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(comment);
    setComment(""); // Clear the input field
  };

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar />
      </ListItemAvatar>
      <ListItemText
        primary="username"
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
