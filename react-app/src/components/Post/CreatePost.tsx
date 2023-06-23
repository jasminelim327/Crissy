import {
  Button,
  Modal,
  Backdrop,
  Fade,
  Box,
  Typography,
  TextField,
  Grid,
} from "@mui/material";
import React, { useContext } from "react";
import { PostItemProps, PostItemBase } from "./PostItem";
import { useParams } from "react-router-dom";
import { UserContext } from "../../App";
import { collection, addDoc, serverTimestamp, Timestamp } from 'firebase/firestore';
import { db } from "../../backend/firebase";


interface CreatePostProps {
  onCreate: (newPost: PostItemProps) => void;
}

export default function CreatePost({ onCreate }: CreatePostProps) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const { id } = useParams();
  const { user } = useContext(UserContext)

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const newPost: PostItemBase = {
      title,
      content,
      username: user,
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
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };


  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    height:400,
    bgcolor: "background.paper",
    border: "0px solid #000",
    borderRadius: 3,
    boxShadow: 24,
    padding: 2,
  };

  return (
    <>
      <Button sx={{ margin: 2 }} onClick={handleOpen}>
        Create A post
      </Button>
      <Modal
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
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Create a New Post
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Title
            </Typography>

            <TextField
              id="title-field"
              label="Title of your post"
              multiline
             
              maxRows={4}
              variant="standard"
              fullWidth
              onChange={(event) => setTitle(event.target.value)}
            />

            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
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
                variant="contained"
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
    </>
  );
}
