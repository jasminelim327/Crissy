import { Backdrop, Box, Button, Fade, Grid, Modal, TextField, Typography } from "@mui/material"
import React, { ReactElement, useEffect, useState } from "react"
import PostItem from "./PostItem";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";
import { PostItemProps } from "./PostItem";

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


const userPosts = [
    {
        id: 1,
        title: "Post 1",
        content: "Lorem ipsum blablabla"
    },
    {
        id: 2,
        title: "Post 2",
        content: "Lorem ipsum blablabla 2"
    },
    {
        id: 3,
        title: "Post 3",
        content: "Lorem ipsum blablabla 3"
    },
    {
        id: 4,
        title: "Post 4",
        content: "Lorem ipsum blablabla 4"
    },
    {
        id: 5,
        title: "Post 5",
        content: "Lorem ipsum blablabla 5"
    },
]


// const someObj: ObjectInterface = {
//     a: 1, 
//     b: 2,
// }

// interface ObjectInterface {
//     a: number;
//     b: number;
// }

// const sum = (obj: ObjectInterface) => {
//     return obj.a + obj.b;
// }

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
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error);
                setIsLoading(false);
            });

    }, [])

    
    if (isLoading) {
        return <div>Page is loading</div>;
    }

    if (error) {
        return <div>There's an error</div>
    }
    // useEffect(() => {
    //   const fetch = async () => {
    //     try {
    //       const { data } = await axios.get(userPosts);
    //       setPosts(data);
    //     } catch (err) {
    //       console.error(err);
    //     }
    //   };
    //   fetch();
    // }, []);
    /**
     * [{ id, title, content}, {id, title, ccontent}]
     */
    // const numberArr: number[] = [];

    // write for loop
    // for (let i = 0; i < 10; i++) {
    //     numberArr.push(i)
    // }
    

    for (let i = 0; i < posts.length;  i++){
      postItems.push(
          <PostItem 
          key={posts[i].id}
          id={posts[i].id} 
          title={posts[i].title} 
          content={posts[i].content}
          // on click event -> create a path to the individual post - jasmine
          onClick={() => navigate('/post/' + posts[i].id)}
          />)
    }

    return (

        <>
        <NavBar >
        </NavBar>

        <Grid spacing={3} justifyContent="space-between" alignItems="center">
            {postItems}
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