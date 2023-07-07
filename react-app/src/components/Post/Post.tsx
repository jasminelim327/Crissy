import React, { ReactElement, useContext, useEffect, useState } from "react";
import PostItem from "./PostItem";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../NavBar";
import { PostItemProps } from "./PostItem";
import CreatePost from "./CreatePost";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { UserContext } from "../../App";
import LoadingSpinner from "../Animation/LoadingSpinner";
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../../backend/firebase";


export default function Post() {
  const navigate = useNavigate();
  const { user, displayName } = useContext(UserContext);
  const postItems: ReactElement[] = [];
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<PostItemProps[]>([]);
  const [error, setError] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<PostItemProps[]>([]);
  const [userDisplayName, setUserDisplayName] = useState<string | null>(
    user ? user.displayName || "" : null
  );
 
  
  const handleSearch = (query) => {
    setSearchQuery(query);
    filterPosts(query);
  };


  const filterPosts = (query: string) => {
    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.content.toLowerCase().includes(query.toLowerCase()) ||
        (post.username && post.username.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredPosts(filtered);
  };

  useEffect(() => {
    console.log("fetching data");
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "post"));
        const fetchedData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          createdAt: doc.data().createdAt,
          title: doc.data().title,
          content: doc.data().content,
          username: doc.data().username,
          likes: doc.data().likes
        }));
        const sortedData = fetchedData.sort((a, b) =>
        a.createdAt > b.createdAt ? -1 : 1
      );
      setPosts(sortedData);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, []);

  useEffect(() => {
    if (user) {
      setUserDisplayName(user.displayName);
    }
  }, [user]);

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
      <NavBar handleSearch={handleSearch}  />
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
      
    </Box>

      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3}}>
      <Card variant="outlined" sx={{border:'0px'}}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Hello, {displayName}
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

      {searchQuery !== "" ? (
        filteredPosts.map((post) => (
          <Grid item key={post.id}>
            <PostItem {...post} />
          </Grid>
        ))
      ) : (
        posts.map((post) => (
          <Grid item key={post.id}>
            <PostItem {...post} />
          </Grid>
        ))
      )}
    </Grid>
    </>
  );
}