import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import axios from "axios";
import { MouseEventHandler, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";


interface PostItemProps {
    id: number;
    title: string;
    content: string;
    onClick: MouseEventHandler ;
  }

function PostItem(props: PostItemProps){

    const [post, SetPost] = useState({});
    const {id} = useParams();
    const {title} = useParams();

    // useEffect(() => {
    //     const fetch = async () => {
    //       try {
    //         const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    //         SetPost(data);
    //       } catch (err) {
    //         console.error(err);
    //       }
    //     };
    //     fetch();
    //   }, []);

    return (
<>
    <h1>{id}</h1>
    <h1>{title}</h1>

    <Card onClick={props.onClick}  
    sx={{ maxWidth: 1000, alignItems:"center", justifyContent:"space-between" , margin:5}}>
      
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {props.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {props.content}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Comment</Button>
      <Button size="small">Like</Button>

    </CardActions>
  </Card>

    
  </>
    )


} export default PostItem

