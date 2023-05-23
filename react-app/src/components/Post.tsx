import { AspectRatio, CenterFocusStrong, Margin } from "@mui/icons-material";
import { Backdrop, Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Fade, Grid, Modal, TextField, Typography } from "@mui/material"
import { alignProperty } from "@mui/material/styles/cssUtils";
import React, { useState } from "react"

// const [count, setCount] = React.useState(0)

// const handleIncrement = () =>{

//     setCount(count+1)
// }

// const handleDecrement = () =>{

//     setCount(count-1)
// }

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function Post() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (

        <>

        <Grid spacing={3} justifyContent="space-between" alignItems="center">
        
        <Card sx={{ maxWidth: 1000, alignItems:"center", justifyContent:"space-between" , margin:5}}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Nice to meet everyone today
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Hello everyone, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, minima rem veritatis eum tenetur libero voluptas dignissimos eos mollitia commodi dolorum, non fugiat, consequuntur dicta ab debitis quidem ipsa adipisci?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">COMMENT</Button>
        <Button size="small">Like</Button>

      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 1000, alignItems:"center", justifyContent:"space-between" , margin:5}}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Nice to meet everyone today
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Hello everyone, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, minima rem veritatis eum tenetur libero voluptas dignissimos eos mollitia commodi dolorum, non fugiat, consequuntur dicta ab debitis quidem ipsa adipisci?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">COMMENT</Button>
        <Button size="small">Like</Button>

      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 1000, alignItems:"center", justifyContent:"space-between" , margin:5}}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Nice to meet everyone today
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Hello everyone, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, minima rem veritatis eum tenetur libero voluptas dignissimos eos mollitia commodi dolorum, non fugiat, consequuntur dicta ab debitis quidem ipsa adipisci?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">COMMENT</Button>
        <Button size="small">Like</Button>

      </CardActions>
    </Card><Card sx={{ maxWidth: 1000, alignItems:"center", justifyContent:"space-between" , margin:5}}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Nice to meet everyone today
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Hello everyone, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, minima rem veritatis eum tenetur libero voluptas dignissimos eos mollitia commodi dolorum, non fugiat, consequuntur dicta ab debitis quidem ipsa adipisci?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">COMMENT</Button>
        <Button size="small">Like</Button>

      </CardActions>
    </Card><Card sx={{ maxWidth: 1000, alignItems:"center", justifyContent:"space-between" , margin:5}}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Nice to meet everyone today
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Hello everyone, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, minima rem veritatis eum tenetur libero voluptas dignissimos eos mollitia commodi dolorum, non fugiat, consequuntur dicta ab debitis quidem ipsa adipisci?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">COMMENT</Button>
        <Button size="small">Like</Button>

      </CardActions>
    </Card><Card sx={{ maxWidth: 1000, alignItems:"center", justifyContent:"space-between" , margin:5}}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Nice to meet everyone today
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Hello everyone, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, minima rem veritatis eum tenetur libero voluptas dignissimos eos mollitia commodi dolorum, non fugiat, consequuntur dicta ab debitis quidem ipsa adipisci?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">COMMENT</Button>
        <Button size="small">Like</Button>

      </CardActions>
    </Card>


        </Grid>
        
        
        <div>
                <Button  sx={{margin:5}} onClick={handleOpen}>Create A post</Button>
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
                                variant="standard" />

                            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                Content
                            </Typography>

                            <TextField
                                id="standard-multiline-flexible"
                                label="Body of your post"
                                multiline
                                maxRows={4}
                                variant="standard" />
                            <Grid item xs={8}>
                                <Button variant="contained" href="#contained-buttons" sx={{ spacing: 1, marginTop: 2 }}>
                                    Submit
                                </Button>
                            </Grid>


                        </Box>
                    </Fade>
                </Modal>
            </div></>);





    
}