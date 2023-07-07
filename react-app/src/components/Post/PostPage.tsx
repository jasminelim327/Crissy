import React, { ReactElement, useContext, useEffect, useState } from "react";
import PostItem from "./PostItem";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../NavBar";
import { PostItemProps } from "./PostItem";
import CreatePost from "./CreatePost";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { UserContext } from "../../App";
import LoadingSpinner from "../Animation/LoadingSpinner";
import { db } from "../../backend/firebase";
import {
  getDocs,
  collection,
  doc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import CommentSection from "../Comment/CommentSection";

export default function PostPage() {
  interface UserContextType {
    user: string;
    setUser: React.Dispatch<React.SetStateAction<string>>;
  }

  const navigate = useNavigate();
  const { id } = useParams();
  const { user, displayName } = useContext(UserContext);
  const postItems: ReactElement[] = [];
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState<PostItemProps[]>([]);
  const [error, setError] = useState("");
  const [showComment, setShowComment] = useState(false);

  
  // to have followers/ following kind of scenario - allow the user to follow the users and the post is based on the user they are following
  // add a new collection for follower

  //  when retrieving the posts, set a constraint to have following only posts
  // following button, -- maybe for future improvements
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionName = "post";
        const documentId = id;
        const documentRef = doc(collection(db, collectionName), documentId);
        const docSnapshot = await getDoc(documentRef);

        if (docSnapshot.exists()) {
          // console.log("ok")
          const postData = {
            id: docSnapshot.id,
            createdAt: docSnapshot.data().createdAt,
            title: docSnapshot.data().title,
            content: docSnapshot.data().content,
            username: docSnapshot.data().username,
            likes: docSnapshot.data().likes,
          };
          console.log(postData);
          setPost([postData]);
        } else {
          setError("Post not found");
        }
        setIsLoading(false);
        
      } catch (error) {
        setError(error as string);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>There's an error: {error}</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
    <NavBar />
    <Box>
      {post.map((post) => (
        <Grid item key={post.id}>
          <PostItem {...post} />
        </Grid>
        
      ))}
      
    </Box>
  </>
);
}
