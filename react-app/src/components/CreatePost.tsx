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
import React from "react";
import { PostItemProps, PostItemBase } from "./PostItem";
import { useLocation, useParams } from "react-router-dom";
import { useQuery } from "react-query";

interface CreatePostProps {
  onCreate: (newPost: PostItemProps) => void;
}

export default function CreatePost({ onCreate }: CreatePostProps) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const { id } = useParams();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    const newPost: PostItemBase = {
      title,
      content,
      username: "hi",
      likes: 0,
    };

    // fetch POST
    // .then(data => onCreate(data))

    const requestOptions = {
      method: "POST",
      headers:{'Content-Type' : 'application/json'},
      body: JSON.stringify({
        title, 
        content, 
        username: 'something123'})

    };
    fetch('https://647087103de51400f7247096.mockapi.io/api/inspire2023/post', requestOptions)
      .then(response => response.json())
      .then(data =>  {
        onCreate(data);
        
        setTitle("");
        setContent("");
        console.log(newPost);
      })
    
    };

  // const { isLoading, error, data } = useQuery("repoData", () =>
  //   fetch(
  //     `https://647087103de51400f7247096.mockapi.io/api/inspire2023/post/${id}/comment`
  //   ).then((res) => res.json())
  // );

  // if (isLoading) return "Loading...";

  // if (error) return "An error has occurred: " + error.message;

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
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
              onChange={(event) => setTitle(event.target.value)}
            />

            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Content
            </Typography>

            <TextField
              id="content-field"
              label="Body of your post"
              multiline
              maxRows={4}
              variant="standard"
              onChange={(event) => setContent(event.target.value)}
            />
            <Grid item xs={8}>
              <Button
                variant="contained"
                href="#contained-buttons"
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
