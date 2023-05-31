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
import CreatePost from "./CreatePost";

export default function Post() {
  const navigate = useNavigate();
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
        createdAt={posts[i].createdAt}
      />
    );
  }

  return (
    <>
      <NavBar user={undefined}></NavBar>
      <CreatePost />
      <Grid spacing={2} justifyContent="space-between" alignItems="center">
        {postItems}
      </Grid>
    </>
  );
}
