import React, { ReactElement, useContext, useEffect, useState } from "react";
import PostItem from "./PostItem";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { PostItemProps } from "./PostItem";
import CreatePost from "./CreatePost";
import { Grid } from "@mui/material";
import { UserContext } from "../App";
import LoadingSpinner from "./Animation/LoadingSpinner";

export default function Post() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const postItems: ReactElement[] = [];
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<PostItemProps[]>([]);
  const [error, setError] = useState();

  useEffect(() => {
    console.log("fetching data");
    setIsLoading(true);
    fetch("https://647087103de51400f7247096.mockapi.io/api/inspire2023/post")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.reverse());
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  const handleCreatePost = (newPost: PostItemProps) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  if (isLoading) {
    return <LoadingSpinner />;
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
      <NavBar></NavBar>
      <h1>{user}</h1>
      <CreatePost onCreate={handleCreatePost} />
      <Grid spacing={2} justifyContent="space-between" alignItems="center">
        {postItems}
      </Grid>
    </>
  );
}
