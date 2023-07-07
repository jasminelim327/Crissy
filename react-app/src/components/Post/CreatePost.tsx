import {
  Button,
  Modal,
  Backdrop,
  Fade,
  Box,
  Typography,
  TextField,
  Grid,
  Alert,
  Snackbar,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { PostItemProps, PostItemBase } from "./PostItem";
import { useParams } from "react-router-dom";
import { UserContext } from "../../App";
import { collection, addDoc, serverTimestamp, Timestamp } from 'firebase/firestore';
import { db } from "../../backend/firebase";
import { SendSharp } from "@mui/icons-material";


interface CreatePostProps {
  onCreate: (newPost: PostItemProps) => void;
}

export default function CreatePost({ onCreate }: CreatePostProps) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const { id } = useParams();
  const { user, displayName } = useContext(UserContext);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [showGuidelines, setShowGuidelines] = useState(false);
  const [agreedToGuidelines, setAgreedToGuidelines] = useState(false);

  const handleOpen = () => {
    if (!agreedToGuidelines) {
      setShowGuidelines(true);
    } else {
      setShowGuidelines(false); // Hide the guidelines modal
      setOpen(true); // Show the create post modal
    }
  };

  const handleClose = () => setOpen(false);


  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const newPost: PostItemBase = {
      title,
      content,
      username: displayName,
      likes: 0,
      createdAt: Timestamp.fromDate(new Date()),
      id: ""
    };

    try {
      // Save the new post to Firebase Firestore
      const docRef = await addDoc(collection(db, "post"), newPost);

      // Retrieve the newly generated post ID
      const postId = docRef.id;

      // Update the newPost object with the generated ID
      newPost.id = postId;

      // Call the onCreate callback with the new post
      onCreate(newPost);

      setTitle("");
      setContent("");
      handleClose();
      console.log(newPost);
      setShowSnackbar(true);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };

  const handleGuidelinesClose = () => {
    setAgreedToGuidelines(true);
    setShowGuidelines(false);
    setOpen(true);
  };


  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height:400,
    bgcolor: "background.paper",
    border: "0px solid #000",
    borderRadius: 10,
    boxShadow: 24,
    padding: 3,
  };

  return (
    <>
      <Button sx={{ margin: 2, color:"#b3b3b3" }} onClick={handleOpen}>
      Create A post
      </Button>

      <Modal
        // ...
        open={showGuidelines}
        onClose={handleGuidelinesClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={showGuidelines}>
          <Box sx={style} component="form">
            <Typography id="transition-modal-title" variant="h6" component="h2" color="#b3b3b3">
            COMMUNTY GUIDELINE
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2, color: "#262626" , fontSize: "14px" }}>
            <ul>
        <li>
          Have you ensured that your language is inclusive and respectful, avoiding any potential offense or marginalization?
        </li>
        <li>
          Have you challenged and questioned stereotypes to promote a more inclusive dialogue?
        </li>
        <li>
          Have you fact-checked the information you are about to share to ensure its accuracy and reliability?
        </li>
        <li>
          Have you considered different contexts and interpretations that might impact the meaning of your words?
        </li>
        <li>
          Are you open to receiving feedback and constructive criticism on your post?
        </li>
        
      </ul>
      By considering and addressing these questions, you can help eliminate unconscious bias and foster a more inclusive environment within the discussion forum.


            </Typography>
            <Button
              startIcon={<SendSharp />}
              sx={{ spacing: 1, marginTop: 2 }}
              onClick={handleGuidelinesClose}
            >
              I Understand and Agree
            </Button>
          </Box>
        </Fade>
      </Modal>
      <Modal 
      sx={{
        borderRadius: "8px", // Set the desired border radius value
      }}
        // handlelclick then fetch
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} component="form" onSubmit={handleSubmit}>
            <Typography id="transition-modal-title" variant="h6" component="h2" color={'#b3b3b3'}>
            Create a New Post
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 , color:'#b3b3b3'}}>
              Title
            </Typography>

            <TextField
              id="title-field"
              label="Title of your post"
              multiline
             sx={{color:'#b3b3b3'}}
              maxRows={4}
              variant="standard"
              fullWidth
              onChange={(event) => setTitle(event.target.value)}
            />

            <Typography id="transition-modal-description" sx={{ mt: 2 , color:'#b3b3b3'}}>
              Content
            </Typography>

            <TextField
              id="content-field"
              label="Body of your post"
              multiline
              rows={5}
              maxRows={10}
              fullWidth
              variant="standard"
              onChange={(event) => setContent(event.target.value)}
            />
            <Grid item xs={8}>
             
<Button
  // variant="contained"
  startIcon={<SendSharp/>}
  sx={{ spacing: 1, marginTop: 2 }}
  type="submit"
  onClick={handleSubmit}
>
  Submit
</Button>

              
            </Grid>
          </Box>
        </Fade>
      </Modal>

      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000} // Duration for which the snackbar is shown
        onClose={handleSnackbarClose}
      >
        <Alert severity="success" onClose={handleSnackbarClose}>
          Post created successfully!
        </Alert>
      </Snackbar>
    </>
  );
}