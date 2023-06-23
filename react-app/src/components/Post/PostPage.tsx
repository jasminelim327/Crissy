import React, { ReactElement, useContext, useEffect, useState } from "react";
import PostItem from "./PostItem";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";
import { PostItemProps } from "./PostItem";
import CreatePost from "./CreatePost";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { UserContext } from "../../App";
import LoadingSpinner from "../Animation/LoadingSpinner";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../backend/firebase";

export default function Post() {

  interface UserContextType {
    user: string;
    setUser: React.Dispatch<React.SetStateAction<string>>;
  }

  const navigate = useNavigate();
  const { user } = useContext(UserContext) as UserContextType;
  const postItems: ReactElement[] = [];
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<PostItemProps[]>([]);
  const [error, setError] = useState("");

  // to have followers/ following kind of scenario - allow the user to follow the users and the post is based on the user they are following
  // add a new collection for follower

  //  when retrieving the posts, set a constraint to have following only posts
  // following button, -- maybe for future improvements 

  useEffect(() => {
    const fetchData = async () => {
      try {
        //  before this, get the following of this user and then get the posts of 
        const querySnapshot = await getDocs(collection(db, "post"));
        const fetchedData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        createdAt: doc.data().createdAt,
        title: doc.data().title,
        content: doc.data().content,
        username: doc.data().username,
        likes: doc.data().likes
        }));
        console.log(fetch)
        setPosts(fetchedData.reverse());
        setIsLoading(false);
      } catch (error) {
        setError(error as string);
        console.log(error)
        setIsLoading(false);
      }
    };

    fetchData();
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
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3}}>
      <Card variant="outlined" sx={{border:'0px'}}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Hello, {user}
          </Typography>
          <Box
            sx={{
              borderTop: "0px solid ",
              marginTop: 0,
              paddingTop: 2,
              color: "#666",
            }}
          >
            <Typography variant="body2" align="center">
              Unconscious bias affects decision-making in subtle ways. Stay
              aware and challenge your assumptions.
              <br></br>
              <CreatePost onCreate={handleCreatePost} />
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
      <Grid justifyContent="space-between" alignItems="center">
        {postItems}
      </Grid>
    </>
  );
}