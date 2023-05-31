import {
  Backdrop,
  Box,
  Button,
  Fade,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";
import PostItem from "./PostItem";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { PostItemProps } from "./PostItem";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Post() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const postItems: ReactElement[] = [];
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<PostItemProps[]>([]);
  const [error, setError] = useState();

  useEffect(() => {
    console.log("fetching data");
    fetch("https://647087103de51400f7247096.mockapi.io/api/inspire2023/post")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Page is loading</div>;
  }

  if (error) {
    return <div>There's an error</div>;
  }

  for (let i = 0; i < posts.length; i++) {
    postItems.push(
      <PostItem
        key={posts[i].id}
        id={posts[i].id}
        title={posts[i].title}
        content={posts[i].content}
        username={posts[i].username}
        likes={posts[i].likes}
        // on click event -> create a path to the individual post - jasmine
        onClick={() => navigate("/post/" + posts[i].id)} 
        createdAt={posts[i].createdAt}      />
    );
  }

  return (
    <>
      <NavBar user={undefined}></NavBar>

      <Grid spacing={3} justifyContent="space-between" alignItems="center">
        {postItems}
      </Grid>

      <div>
        <Button sx={{ margin: 5 }} onClick={handleOpen}>
          Create A post
        </Button>
        <Modal
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
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Create a New Post
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Title
              </Typography>

              <TextField
                id="standard-multiline-flexible"
                label="Title of your post"
                multiline
                maxRows={4}
                variant="standard"
              />

              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Content
              </Typography>

              <TextField
                id="standard-multiline-flexible"
                label="Body of your post"
                multiline
                maxRows={4}
                variant="standard"
              />
              <Grid item xs={8}>
                <Button
                  variant="contained"
                  href="#contained-buttons"
                  sx={{ spacing: 1, marginTop: 2 }}
                >
                  Submit
                </Button>
              </Grid>
            </Box>
          </Fade>
        </Modal>
      </div>
    </>
  );
}
