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

export default function CreatePost() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    padding:2
  };

  return (
<>
    <Button sx={{margin:2}}onClick={handleOpen}>
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
          <Typography id="transition-modal-title" variant="h6" component="h2">
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
</>



    )
  
}
