import { useState, useContext } from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useParams } from "react-router-dom";
import { UserContext } from "../../App";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../../backend/firebase";
import { v4 as uuid } from "uuid";
import { CommentProps } from "./Comment";
import { AddComment } from "@mui/icons-material";

interface CreateCommentProps {
  onSubmit: (newComment: CommentProps) => void;
}

function CreateComment({ onSubmit }: CreateCommentProps) {
  const [comment, setComment] = useState("");
  const { user, displayName } = useContext(UserContext);
  const { id } = useParams();
  const displayNameValue = displayName || "";
  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };


  const [showSnackbar, setShowSnackbar] = useState(false);
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    
    const newComment = {
      username: displayNameValue,
      likes: 0,
      createdAt: Timestamp.fromDate(new Date()),
      commentId: uuid(), // Generate a unique ID for each comment
      comment,
    };

    onSubmit(newComment);
    setComment("");
    setShowSnackbar(true);
  
  //   try {
  //   const commentDocRef = await addDoc(
  //     collection(db, `post/${id}/comment`),
  //     newComment
  //   );

  //   // Set the ID of the new comment to the generated document ID
  //   newComment.commentId = commentDocRef.id;

  //   // Call the onSubmit callback with the new comment
  //   onSubmit(newComment);

  //   // Clear the comment input
  //   setComment("");
  // } catch (error) {
  //   console.error("Error adding document: ", error);
  // }
};
  
  return (
    <>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#99ddff" }}>
          {displayName.charAt(0)}
          </Avatar>
          </ListItemAvatar>
      <ListItemText
        primaryTypographyProps={{
          sx: {
            fontSize: "14px",
            color: "#66b5ff",
          },
        }}primary={`@${displayName}`}

        secondary={
          <>
            <TextField
              id="standard-textarea"
              label="Comment"
              placeholder="Comment"
              multiline
              variant="standard"
              sx={{ width:'66%'}}
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
            <Button 
            size="small" 
            sx={{ color: '#66b5ff' }}
            startIcon={<AddComment />} 
            onClick={handleSubmit}
            >
              Send
            </Button>
            <br />
            <br />

           
          </>

        }
      />
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000} // Duration for which the snackbar is shown
        onClose={handleSnackbarClose}
      >
        <Alert severity="success" onClose={handleSnackbarClose}>
          Comment submitted successfully!
        </Alert>
        </Snackbar>
    </ListItem>
    
    </>
  );
 
}

export default CreateComment;