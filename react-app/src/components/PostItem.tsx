import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import axios from "axios";
import { MouseEventHandler, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import LikeButton from "./LikeButton";
import CommentSection from "./Comment Section";


interface PostItemProps {
    id: number;
    title: string;
    content: string;
    onClick?: MouseEventHandler ;
  }

const callback = () => {
  console.log('hi')

  return 5;
}

const foo = (bar: Function) => {
  bar();
}

foo(callback); // foo(5)

function PostItem(props: PostItemProps){

  const [showComment, setShowComment] = useState(false); 
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

    const handleClick = () => {
      setShowComment(!showComment)
      console.log(showComment)
    };

    return (
<>
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

      {/* comment to display list of comment when clicked */}
      <Button size="small" onClick={handleClick}>Comment</Button>
      <LikeButton />

    </CardActions>

    { showComment ? <CommentSection /> : null}
    { showComment && <CommentSection />}
  </Card>

    
  </>
    )


};


// const CommentSection = () => {
//   return <div>this is comment section</div>
// };



export default PostItem

