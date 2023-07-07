import { useEffect, useState } from "react";
import { doc, updateDoc } from 'firebase/firestore';
import { db } from "../../backend/firebase";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { ThumbUpAlt } from "@mui/icons-material";

function LikeButton(props: { likes: number, postId: string }) {
  const { likes } = props;
const {id} = useParams()
  const [numberOfLikes, setNumberOfLikes] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const storedLikeStatus = localStorage.getItem(id);
    if (storedLikeStatus === "true") {
      setIsLiked(true);
    }
  }, [id]);

  const handleLikeClick = async () => {
    try {
      const postDocRef = doc(db, 'post', id);
  
      if (isLiked) {
        setNumberOfLikes((prevLikes) => prevLikes - 1);
        await updateDoc(postDocRef, {
          likes: numberOfLikes - 1
        });
        localStorage.setItem(id, "false");
      } else {
        setNumberOfLikes((prevLikes) => prevLikes + 1);
        await updateDoc(postDocRef, {
          likes: numberOfLikes + 1
        });
        localStorage.setItem(id, "true");
      }
  
      setIsLiked((prevIsLiked) => !prevIsLiked);
    } catch (error) {
      console.log('Error updating like count:', error);
    }
  };

  return (
    <>
      <Button
        size="small"
        startIcon={<ThumbUpAlt />}
        // variant={isLiked ? "contained" : "text"}
        onClick={handleLikeClick}
        sx={{ color: isLiked ? '#cc0000' : '#66b5ff' }}
      >
       {isLiked ? "UPVOTED" : "Upvote"} {numberOfLikes}
      </Button>
    </>
  );
}

export default LikeButton;